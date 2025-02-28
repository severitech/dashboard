"use client";

import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export const ActionsDropdown = ({ companyId }: { companyId: string }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Abrir menú</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(companyId)}>
          📋 Copiar ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem >
          <Link href={`/empresas/${companyId}`}>✏️ Editar Empresa</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => console.log("Eliminar empresa", companyId)}
          className="text-red-500"
        >
          🗑️ Eliminar Empresa
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
