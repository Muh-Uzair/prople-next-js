import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { IBuildingManager } from "@/types/building-manager-types";

export const useAuthBuildingManager = () => {
  const { data: authJsSession, status: sessionStatus } = useSession();

  // FUNCTION Query for authenticated users (using Auth.js session)
  const {
    data: dataBuildingManagerEmail = {},
    status: statusBuildingManagerEmail,
  } = useQuery<IBuildingManager>({
    queryKey: ["buildingManager", "byEmail", authJsSession?.user?.email],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/building-manager/current-by-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: authJsSession?.user?.email,
          }),
        },
      );

      if (!res.ok) {
        throw new Error("Failed to fetch building manager by email");
      }

      const json = await res.json();
      return json.data;
    },
    enabled: sessionStatus === "authenticated" && !!authJsSession?.user?.email,
    retry: false,
  });

  // FUNCTION Query for users with JWT cookie (when Auth.js session doesn't exist)
  const {
    data: dataBuildingManagerJwt = {},
    status: statusBuildingManagerJwt,
  } = useQuery({
    queryKey: ["buildingManager", "byJwt"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/building-manager/current`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        },
      );

      if (!res.ok) {
        throw new Error("Failed to fetch building manager by JWT");
      }

      const json = await res.json();
      return json.data;
    },
    // Only execute when: no Auth.js session AND JWT cookie exists
    enabled: sessionStatus === "unauthenticated",
    retry: false,
  });

  // Return the appropriate data based on session status
  const dataBuildingManager =
    sessionStatus === "authenticated"
      ? dataBuildingManagerEmail || {}
      : dataBuildingManagerJwt || {};

  return {
    dataBuildingManager,
    statusBuildingManagerEmail,
    statusBuildingManagerJwt,
  };
};
