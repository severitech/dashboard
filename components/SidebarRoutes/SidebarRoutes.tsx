"use client";

import {
  sideBarRoutesdata,
  dataToolsSidebar,
  dataSupportSideBar,
} from "./SidebarRoutes.data";
import { SideBarContexts } from "./SideBarContexts";
import { Separator } from "../ui/separator";
import { Logo } from "@/components/Logo/Logo";
export function SidebarRoutes() {
  return (
    <div className="flex flex-col justify-between mt-5 ml-2">
      <Logo />
      <ul className="mt-3">
        <SideBarContexts encabezado="General" datos={sideBarRoutesdata} />
        <SideBarContexts encabezado="Herramientas" datos={dataToolsSidebar} />
        <SideBarContexts encabezado="Seguridad" datos={dataSupportSideBar} />
      </ul>
      <section className="absolute bottom-0 left-0 right-0 gap-4">
        <Separator />
        <footer className="mt-3 p-3 text-center fontb">
          <p className="text-base">Version 7.2.8</p>
          <p className="text-sm">
            Copyright © 2025 - Desarrollado por {" "}
             <a
              href="https://severitech.dev"
              target="_blank"
              className="text-[#16c8c7] hover:text-[rgb(126,255,255)] font-bold"
            >Severitech
            </a>
          </p>
        </footer>
      </section>
    </div>
  );
}
