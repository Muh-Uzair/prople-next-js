import DashboardLayout from "@/components/DashboardLayout";
import React from "react";

interface PageProps {
  params: Promise<{ details: string }>; // Updated type to Promise
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { details } = await params;

  return (
    <DashboardLayout userRole={"buildingManager"} slug={details}>
      <span>{`manager/dashboard/${details}`}</span>
    </DashboardLayout>
  );
};

export default Page;
