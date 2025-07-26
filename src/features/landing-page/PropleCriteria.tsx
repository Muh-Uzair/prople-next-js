import React from "react";
import { Building2, Users, KeyRound } from "lucide-react";
import PropleDoesCard from "./PropleDoesCard";

const PropleCriteria: React.FC = () => {
  return (
    <div className="border-primary dark:bg-background flex w-full items-center justify-center border-[1px] bg-white">
      <div className="w-full max-w-[1200px]">
        <div className="dark:bg-background bg-white">
          <div className="tab:px-[50px] tab:py-[50px] px-[20px] py-[30px]">
            <div className="text-center">
              <span className="text-primary text-[22px] font-bold">
                What Makes PROPLE Reliable
              </span>
            </div>

            <div className="laptopS:grid laptopS:grid-cols-3 flex flex-col gap-[20px] pt-[30px]">
              <div>
                <PropleDoesCard
                  icon={<Building2 size={40} className="text-primary" />}
                  cardTitle="Built for Multipurpose Buildings"
                  cardDescription="Tailored for managing flats, shops, and tenants under one roof"
                  cardContent="Whether you manage commercial spaces or residential units—or both—PROPLE adapts to your building’s unique structure, giving you the flexibility to manage everything in one place."
                />
              </div>

              <div>
                <PropleDoesCard
                  icon={<Users size={40} className="text-primary" />}
                  cardTitle="Role-Based Access & Collaboration"
                  cardDescription="Clear access levels for managers, tenants, and owners"
                  cardContent="Every user has a defined role. PROPLE ensures smooth collaboration while maintaining data security and transparency among building managers, owners, and residents."
                />
              </div>

              <div>
                <PropleDoesCard
                  icon={<KeyRound size={40} className="text-primary" />}
                  cardTitle="Secure & Centralized Management"
                  cardDescription="Everything you need in one place—secure and accessible"
                  cardContent="From rent tracking to issue reporting and announcements, PROPLE centralizes essential building operations, reducing manual overhead and errors made by human while managing."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropleCriteria;
