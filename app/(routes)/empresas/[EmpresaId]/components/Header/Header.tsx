"use client";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export function Header() {
  const router = useRouter();

  return (
    <div className="flex items-center text-xl gap-6">
      <ArrowLeft className="mr-2 w-5 h-5 cursor-pointer" onClick={() => router.back()} />
        <p className="gap-5">Editando la Empresa</p>
    </div>
  );
}
