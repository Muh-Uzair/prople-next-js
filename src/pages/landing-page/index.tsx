import LandingPage from "@/features/landing-page/LandingPage";
import React, { useEffect } from "react";
import { useBuildingManagerStore } from "@/stores/buildingManagerStore";
import { useFetchBuildingManager } from "@/hooks/useFetchBuildingManager";

const Index: React.FC = () => {
  // VARS
  const { isAuthBuildingManager } = useBuildingManagerStore();
  const { mutateCurrBuildingManager } = useFetchBuildingManager({
    performSignUp: false,
  });

  // FUNCTIONS
  useEffect(() => {
    const innerFun = () => {
      mutateCurrBuildingManager();
    };

    if (!isAuthBuildingManager) {
      innerFun();
    }
  }, [isAuthBuildingManager, mutateCurrBuildingManager]);

  return <LandingPage />;
};

export default Index;
