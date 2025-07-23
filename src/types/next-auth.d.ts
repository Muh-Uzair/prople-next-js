import { IBuildingManager } from "@/stores/buildingManagerStore";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      buildingManagerData?: IBuildingManager;
    };
  }

  interface User {
    buildingManagerData?: IBuildingManager;
  }
}
