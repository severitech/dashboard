import { NavBar } from "@/components/NavBar";
import { SideBar } from "@/components/SideBar/SideBar";
export default function LayoutDashboard({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <div className="flex w-full h-full">
      <section className="hidden xl:block w-80 h-full xl:fixed">
        <SideBar />
      </section>
      <section className="w-full xl:ml-80">
        <NavBar />
        <section className="p-6 bg-[#fafbfc] dark:bg-secondary">
          {children}
        </section>
      </section>
    </div>
  );
}
