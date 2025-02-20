import { Separator } from "@/components/ui/separator";
import { SidebarItem } from "../SidebarItem";
import { LucideIcon } from "lucide-react";

interface SideBarContextsProps {
  encabezado: string;
  datos: { nombre: string; icon: LucideIcon; href: string }[];
}

export function SideBarContexts({ encabezado, datos }: SideBarContextsProps) {
  return (
    <li className="">
        <Separator className="mb-2"/>
      <h2 className="select-none">{encabezado}</h2>
      <ul>
        <li className="p-1 md:p-2">
          {datos.map((item) => (
            <SidebarItem key={item.nombre} item={item} />
          ))}
        </li>
      </ul>
    </li>
  );
}
