import React from "react";
import { Separator } from "@/components/ui/separator";

const OrSeparator: React.FC = () => {
  // VARS

  // FUNCTIONS

  // JSX
  return (
    <div className="flex items-center gap-3">
      <Separator className="h-px flex-1" />
      <span className="text-gray-400">or</span>
      <Separator className="h-px flex-1" />
    </div>
  );
};

export default OrSeparator;
