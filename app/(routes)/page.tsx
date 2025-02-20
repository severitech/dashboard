import {
  BookOpenCheck,
  UserRound,
  UserRoundCog,
  Waypoints,
} from "lucide-react";
import { CardSumary } from "./components/CardSumary";
import React from "react";

const cardSumary = [
  {
    icon: UserRound,
    total: "12.450",
    average: 15,
    title: "Compañias creadas",
    tooltip: "Este es el total de compañias creadas",
  },
  {
    icon: Waypoints,
    total: "86.5",
    average: 80,
    title: "Total Revenew",
    tooltip: "Esta es otra sumary",
  },
  {
    icon: BookOpenCheck,
    total: "205.5",
    average: 60,
    title: "Action From",
    tooltip: "Esta es el penultimo sumary",
  },
  {
    icon: UserRoundCog,
    total: "157.5",
    average: 20,
    title: "Otra activacion",
    tooltip: "La ultima activcacion",
  },
];

function page() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
        {cardSumary.map(({ icon, total, average, title, tooltip }) => (
          <CardSumary
            key={title}
            icon={icon}
            total={total}
            average={average}
            title={title}
            tooltip={tooltip}
          />
        ))}
      </div>
    </div>
  );
}

export default page;
