import { LucideIcon } from "lucide-react";

export type SidebarItemProps = {
  item: { icon: LucideIcon; nombre: string; href: string },
  key: string
};
