import DashboardLayout from "@/components/DashboardLayout";
import React from "react";

interface PageProps {
  params: Promise<{ moveIn: string }>; // Updated type to Promise
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { moveIn } = await params;

  return (
    <DashboardLayout userRole={"buildingManager"} slug={moveIn}>
      <span>{`manager/dashboard/${moveIn}`}</span>
    </DashboardLayout>
  );
};

export default Page;
