import { create } from "zustand";

export interface IBuildingManager {
  _id?: string;
  name?: string;
  username?: string;
  email?: string;
  phone?: string;
  avatar?: string;
  associatedBuildings?: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

interface BuildingManagerStore {
  isAuthBuildingManager: boolean;
  dataBuildingManager: IBuildingManager | null;

  setIsAuthBuildingManager: (value: boolean) => void;
  setDataBuildingManager: (data: IBuildingManager) => void;
  resetBuildingManager: () => void;
}

export const useBuildingManagerStore = create<BuildingManagerStore>((set) => ({
  isAuthBuildingManager: false,
  dataBuildingManager: null,

  setIsAuthBuildingManager: (value) => set({ isAuthBuildingManager: value }),
  setDataBuildingManager: (data) => set({ dataBuildingManager: data }),
  resetBuildingManager: () =>
    set({
      isAuthBuildingManager: false,
      dataBuildingManager: null,
    }),
}));
