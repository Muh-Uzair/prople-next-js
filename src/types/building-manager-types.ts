export interface IBuildingManager {
  name?: string;
  username?: string;
  email?: string;
  password: string;
  phone?: string;
  avatar?: string;
  associatedBuildings?: string[];
  role: "buildingManager";
}
