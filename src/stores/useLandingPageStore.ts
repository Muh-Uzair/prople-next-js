import { create } from "zustand";

interface LandingPageState {
  buildingManagerStatus: "idle" | "success" | "error";
  setBuildingManagerStatus: (status: "idle" | "success" | "error") => void;
}

export const useLandingPageStore = create<LandingPageState>((set) => ({
  buildingManagerStatus: "idle",
  setBuildingManagerStatus: (status) => set({ buildingManagerStatus: status }),
}));
