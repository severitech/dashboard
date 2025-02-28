"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { FormCreateCustomer } from "../FormCreateCustomer/FormCreateCustomer";

export function HeaderCompany() {
  const [openModalCreate, setOpenModalCreate] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <h2 className="text-2xl">HeaderCompany</h2>
      <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
        <DialogTrigger asChild>
          <Button>Crear Empresa</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Crear Empresa</DialogTitle>
            <DialogDescription>Rellenar datos</DialogDescription>
          </DialogHeader>
          <FormCreateCustomer setOpenModalCreate={setOpenModalCreate} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
