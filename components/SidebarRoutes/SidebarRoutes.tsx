import {
  sideBarRoutesdata,
  dataToolsSidebar,
  dataSupportSideBar,
} from "./SidebarRoutes.data";
import { SidebarItem } from "../SidebarItem";
import { Separator } from "@/components/ui/separator";
export function SidebarRoutes() {
  return (
    <div className="flex flex-col justify-between">
      <ul>
        <li className="p-2 md:p-6">
          <p className="font-bold">General</p>
          {sideBarRoutesdata.map((item) => (
            <SidebarItem key={item.nombre} item={item} />
          ))}
        </li>
        <Separator />
        <li className="p-2 md:p-6">
          <p className="font-bold">Herramientas</p>
          {dataToolsSidebar.map((item) => (
            <SidebarItem key={item.nombre} item={item} />
          ))}
        </li>
        <Separator />
        <li className="p-2 md:p-6">
          <p className="font-bold">Seguridad</p>
          {dataSupportSideBar.map((item) => (
            <SidebarItem key={item.nombre} item={item} />
          ))}
        </li>
      </ul>
      {/* quiero llevar esta seccion al final de la pagina */}
      <section className="absolute bottom-0 left-0 right-0 gap-4"  >
        <Separator />
        <footer className="mt-3 p-3 text-center fontb">
          <p className="text-lg" >Version 7.2.8</p>
          <p className="text-sm" >Copyright © 2025 - Todos los derechos reservados </p>
          <p className="text-sm" >Desarrollado por <a href="https://severitech.com" target="_blank" className="text-blue-500 hover:text-blue-700 font-bold">Severitech</a></p>
        </footer>
      </section>
    </div>
  );
}
