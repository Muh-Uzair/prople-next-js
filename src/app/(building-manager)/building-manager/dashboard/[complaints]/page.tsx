import DashboardLayout from "@/components/DashboardLayout";
import React from "react";

interface PageProps {
  params: Promise<{ complaints: string }>; // Updated type to Promise
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { complaints } = await params;

  return (
    <DashboardLayout userRole={"buildingManager"} slug={complaints}>
      <span>{`manager/dashboard/${complaints}`}</span>
    </DashboardLayout>
  );
};

export default Page;
