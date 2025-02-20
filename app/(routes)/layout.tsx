import { NavBar } from "@/components/NavBar";

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactElement;
}) {
  return (
    <div className="flex w-full h-full">
      <section className="hidden xl:block w-80 h-full xl:fixed">
        sidebar
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
