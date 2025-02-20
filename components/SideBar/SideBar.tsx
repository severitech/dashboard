
import { SidebarRoutes } from "../SidebarRoutes";
export function SideBar() {
  return (
    <div className="h-screen">
      <div className="h-full flex-col border-r">
        
        <SidebarRoutes/>
      </div>
    </div>
  );
}
