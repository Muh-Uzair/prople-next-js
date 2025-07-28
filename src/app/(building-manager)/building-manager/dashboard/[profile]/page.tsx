import DashboardLayout from "@/components/DashboardLayout";
import React from "react";

interface PageProps {
  params: Promise<{ profile: string }>; // Updated type to Promise
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { profile } = await params;

  return (
    <DashboardLayout userRole={"buildingManager"} slug={profile}>
      <span>{`manager/dashboard/${profile}`}</span>
    </DashboardLayout>
  );
};

export default Page;
