import React from "react";
import LoadingSpinner from "./spinner-02";

const LoadingScreenFull: React.FC = () => {
  // VARS

  // FUNCTIONS

  // JSX
  return (
    <div className="flex h-screen items-center justify-center">
      <LoadingSpinner spinnerPrimaryColor={true} />
    </div>
  );
};

export default LoadingScreenFull;
