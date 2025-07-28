import DashboardLayout from "@/components/DashboardLayout";
import React from "react";

interface PageProps {
  params: Promise<{ moveOut: string }>; // Updated type to Promise
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { moveOut } = await params;

  return (
    <DashboardLayout userRole={"buildingManager"} slug={moveOut}>
      <span>{`manager/dashboard/${moveOut}`}</span>
    </DashboardLayout>
  );
};

export default Page;
