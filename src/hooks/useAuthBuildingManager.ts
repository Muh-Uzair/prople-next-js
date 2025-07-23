import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { IBuildingManager } from "@/types/building-manager-types";

export const useAuthBuildingManager = () => {
  const { data: authJsSession, status: sessionStatus } = useSession();

  // Query for authenticated users (using Auth.js session)
  const {
    data: dataBuildingManagerEmail,
    status: statusBuildingManagerEmail,
    isLoading: loadingByEmail,
  } = useQuery<IBuildingManager>({
    queryKey: ["buildingManager", "byEmail", authJsSession?.user?.email],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/building-manager/current-by-email`,
        {
          method: "POST", // Changed to POST since you're sending data
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
      return json.data; // Removed extra .data if not needed
    },
    enabled: sessionStatus === "authenticated" && !!authJsSession?.user?.email,
  });

  // Query for users with JWT cookie (when Auth.js session doesn't exist)
  const {
    data: dataBuildingManagerJwt,
    status: statusBuildingManagerJwt,
    isLoading: loadingByJwt,
  } = useQuery({
    queryKey: ["buildingManager", "byJwt"],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/building-manager/current`,
        {
          method: "GET", // GET is fine here since you're not sending body data
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // This will send JWT cookie
        },
      );

      if (!res.ok) {
        throw new Error("Failed to fetch building manager by JWT");
      }

      const json = await res.json();
      return json.data;
    },
    enabled: sessionStatus === "unauthenticated", // Only when no Auth.js session
  });

  // Return the appropriate data based on session status
  const dataBuildingManager =
    sessionStatus === "authenticated"
      ? dataBuildingManagerEmail
      : dataBuildingManagerJwt;

  const isLoading =
    sessionStatus === "loading" || loadingByEmail || loadingByJwt;

  return {
    dataBuildingManager,
    isLoading,
    sessionStatus,
    // Individual data for debugging if needed
    dataBuildingManagerEmail,
    statusBuildingManagerEmail,
    dataBuildingManagerJwt,
    statusBuildingManagerJwt,
  };
};
