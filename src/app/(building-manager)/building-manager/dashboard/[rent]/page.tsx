import DashboardLayout from "@/components/DashboardLayout";
import React from "react";

interface PageProps {
  params: Promise<{ rent: string }>; // Updated type to Promise
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { rent } = await params;

  return (
    <DashboardLayout userRole={"buildingManager"} slug={rent}>
      <span>{`manager/dashboard/${rent}`}</span>
    </DashboardLayout>
  );
};

export default Page;
