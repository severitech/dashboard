import {
  BarChart4,
  Building2,
  PanelsTopLeft,
  Settings,
  ShieldCheck,
  CircleHelpIcon,
  Calendar,
} from "lucide-react";

export const sideBarRoutesdata = [
  {
    nombre: "Panel de control",
    icon: PanelsTopLeft,
    href: "/",
  },
  {
    nombre: "Empresas",
    icon: Building2,
    href: "/Empresas",
  },
  {
    nombre: "Calenadario",
    icon: Calendar,
    href: "/Calenadario",
  },
];

export const dataToolsSidebar = [
  {
    nombre: "Ayuda",
    icon: CircleHelpIcon,
    href: "/Ayuda",
  },
  {
    nombre: "Datos",
    icon: BarChart4,
    href: "/Datos",
  },
];

export const dataSupportSideBar = [
  {
    nombre: "Configuracion",
    icon: Settings,
    href: "/Configuracion",
  },
  {
    nombre: "Seguridad",
    icon: ShieldCheck,
    href: "/Seguridad",
  },
];
