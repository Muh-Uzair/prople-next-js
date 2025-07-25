import React, { ReactNode } from "react";

interface IProtectedRouteClient {
  children: ReactNode;
}

const ProtectedRouteClient: React.FC<IProtectedRouteClient> = ({
  children,
}) => {
  // VARS

  // FUNCTIONS

  // JSX
  return <div>{children}</div>;
};

export default ProtectedRouteClient;
