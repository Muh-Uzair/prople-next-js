import { IBuildingManager } from "@/types/building-manager-types";
import { IJwtObject } from "@/types/constants";
import { Session } from "next-auth";

interface IUseAuthBuildingManagerServer {
  session: Session | null;
  jwtObject: IJwtObject;
}

export const AuthBuildingManagerServer = async ({
  session,
  jwtObject,
}: IUseAuthBuildingManagerServer): Promise<IBuildingManager | null> => {
  // user is signed in using google
  if (session !== null) {
    console.log(session);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/building-manager/current-by-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // important for backend to parse JSON
            Accept: "application/json",
          },
          body: JSON.stringify({ email: session?.user?.email }),
        },
      );

      if (!res.ok) {
        throw new Error("Unable to fetch building manager");
      }

      const data = await res.json();
      return data?.data?.buildingManager;
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("Unable to fetch building manager");
      }
    }
  }

  // user is signed in using custom auth
  if (jwtObject?.name === "jwt") {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/building-manager/current`,
        {
          method: "GET",
          headers: {
            Cookie: `jwt=${jwtObject.value}`,
          },
        },
      );

      if (!res.ok) {
        throw new Error("Unable to fetch building manager");
      }

      const data = await res.json();
      return data?.data?.buildingManager;
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("Unable to fetch building manager");
      }
    }
  }

  return null;
};
