import {
  FileText,
  House,
  LogIn,
  LogOut,
  MessageSquare,
  User,
  Wallet,
} from "lucide-react";

export const buildingManagerNavItems = [
  {
    navLabel: "Home",
    navIcon: House,
    navUrl: "/building-manager/dashboard/home",
  },
  {
    navLabel: "Details",
    navIcon: FileText,
    navUrl: "/building-manager/dashboard/details",
  },
  {
    navLabel: "Rent",
    navIcon: Wallet,
    navUrl: "/building-manager/dashboard/rent",
  },
  {
    navLabel: "Complaints",
    navIcon: MessageSquare,
    navUrl: "/building-manager/dashboard/complaints",
  },
  {
    navLabel: "Move in",
    navIcon: LogIn,
    navUrl: "/building-manager/dashboard/moveIn",
  },
  {
    navLabel: "Move out",
    navIcon: LogOut,
    navUrl: "/building-manager/dashboard/moveOut",
  },
  {
    navLabel: "Profile",
    navIcon: User,
    navUrl: "/building-manager/dashboard/profile",
  },
];
