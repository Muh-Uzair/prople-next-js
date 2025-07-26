import React from "react";
import { Building2, UserCheck2, Settings2 } from "lucide-react";
import PropleDoesCard from "./PropleDoesCard";

const PropleDoes: React.FC = () => {
  return (
    <div className="dark:bg-background flex w-full items-center justify-center bg-stone-100">
      <div className="max-w-[1200px]">
        <div className="dark:bg-background bg-stone-100">
          <div className="tab:px-[50px] tab:py-[50px] px-[20px] py-[30px]">
            <div className="text-center">
              <span className="text-[22px] font-bold">What PROPLE Does</span>
            </div>

            <div className="laptopS:grid laptopS:grid-cols-3 flex flex-col gap-[20px] pt-[30px]">
              <div>
                <PropleDoesCard
                  icon={<Building2 size={40} className="text-primary" />}
                  cardTitle="Simplify Property Management"
                  cardDescription="One platform to manage flats, shops, and tenants"
                  cardContent="Easily organize tenant records, rent collection, maintenance logs, and more. Whether managing a single building or a multi-unit complex."
                />
              </div>

              <div>
                <PropleDoesCard
                  icon={<UserCheck2 size={40} className="text-primary" />}
                  cardTitle="Enhance Tenant Experience"
                  cardDescription="Keep tenants informed, secure, and happy"
                  cardContent="Give tenants a seamless way to pay rent, report issues, and stay updated. Improve satisfaction through transparency, timely responses, and organized communication across all roles."
                />
              </div>

              <div>
                <PropleDoesCard
                  icon={<Settings2 size={40} className="text-primary" />}
                  cardTitle="Ensure Smooth Operations"
                  cardDescription="Bridge communication between all stakeholders"
                  cardContent="From building managers to owners and residents, PROPLE brings everyone on the same page. Set automated reminders, monitor activities, and keep things running without friction."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropleDoes;
