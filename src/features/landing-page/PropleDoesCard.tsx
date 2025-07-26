import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Props {
  icon?: React.ReactNode;
  cardTitle?: string;
  cardDescription?: string;
  cardContent?: string;
}

const PropleDoesCard: React.FC<Props> = ({
  icon,
  cardTitle,
  cardDescription,
  cardContent,
}) => {
  // VARS

  // FUNCTIONS

  // JSX
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="mb-[10px]">{icon}</div>
          {cardTitle}
        </CardTitle>
        <CardDescription>
          {cardDescription || "Dummy card description"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <span className="text-[15px]">{cardContent}</span>
      </CardContent>
      <CardFooter>
        <Button>Check details</Button>
      </CardFooter>
    </Card>
  );
};

export default PropleDoesCard;
