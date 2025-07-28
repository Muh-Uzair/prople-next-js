import DashboardLayout from "@/components/DashboardLayout";
import React from "react";

interface PageProps {
  params: Promise<{ home: string }>; // Updated type to Promise
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { home } = await params;

  return (
    <DashboardLayout userRole={"buildingManager"} slug={home}>
      <span>{`manager/dashboard/${home}`}</span>
    </DashboardLayout>
  );
};

export default Page;
