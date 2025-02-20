"use client"
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UserButton } from "@clerk/nextjs";
import { Menu, Search } from "lucide-react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { SidebarRoutes } from "../SidebarRoutes/SidebarRoutes";
import { useEffect, useState } from "react";

export function NavBar() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render a loading state or a placeholder to avoid hydration mismatch
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center w-full h-20 border-b bg-background px-2 gap-x-4 justify-between md:px-6">
      <section className="block md:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <VisuallyHidden>
              <DialogTitle>Navigation Menu</DialogTitle>
            </VisuallyHidden>
            <SidebarRoutes />
          </SheetContent>
        </Sheet>
      </section>
      <section className="relative w-[300px]">
        <Input placeholder="Buscar..." className="rounded-lg" />
        <Search strokeWidth={1} className="absolute top-2 right-2 text-gray-500"/>
      </section>
      <section className="flex gap-x-2 items-center text-white">
        <p>togle</p>
        <UserButton />
      </section>
    </div>
  );
}
