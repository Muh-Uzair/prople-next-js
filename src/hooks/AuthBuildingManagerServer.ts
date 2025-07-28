import { getQueryClient } from "@/lib/query-client";
import { IBuildingManager } from "@/types/building-manager-types";
import { IJwtObject } from "@/types/constants-types";
import { Session } from "next-auth";

interface IUseAuthBuildingManagerServer {
  session: Session | null;
  jwtObject: IJwtObject;
}

// FUNCTION Fetch function for building manager by email (Google auth)
const fetchBuildingManagerByEmail = async (
  email: string,
): Promise<IBuildingManager> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/building-manager/current-by-email`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email }),
    },
  );

  if (!res.ok) {
    throw new Error("Unable to fetch building manager by email");
  }

  const data = await res.json();

  if (!data?.data?.buildingManager) {
    throw new Error("Building manager not found");
  }

  return data.data.buildingManager;
};

// FUNCTION Fetch function for building manager by JWT (custom auth)
const fetchBuildingManagerByJwt = async (
  jwtValue: string,
): Promise<IBuildingManager> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/building-manager/current`,
    {
      method: "GET",
      headers: {
        Cookie: `jwt=${jwtValue}`,
      },
    },
  );

  if (!res.ok) {
    throw new Error("Unable to fetch building manager by JWT");
  }

  const data = await res.json();

  if (!data?.data?.buildingManager) {
    throw new Error("Building manager not found");
  }

  return data.data.buildingManager;
};

// FUNCTION Server-side function using React Query
export const AuthBuildingManagerServer = async ({
  session,
  jwtObject,
}: IUseAuthBuildingManagerServer): Promise<IBuildingManager | null> => {
  const queryClient = getQueryClient();

  try {
    // User is signed in using Google
    if (session?.user?.email) {
      const buildingManager = await queryClient.fetchQuery({
        queryKey: ["buildingManager", "byEmail", session?.user?.email],
        queryFn: () => fetchBuildingManagerByEmail(session.user.email!),
      });
      return buildingManager;
    }

    // User is signed in using custom auth
    if (jwtObject?.name === "jwt" && jwtObject.value) {
      const buildingManager = await queryClient.fetchQuery({
        queryKey: ["buildingManager", "byJwt"],
        queryFn: () => fetchBuildingManagerByJwt(jwtObject.value),
      });
      return buildingManager;
    }

    return null;
  } catch (error) {
    console.error("Error fetching building manager:", error);
    return null;
  } finally {
    // Clean up the query client
    queryClient.clear();
  }
};
