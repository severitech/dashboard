import { EmpresaInformationProps } from "./EmpresaInformation.types";
import { User } from "lucide-react";
import { CompanyForms } from "../CompanyForms";

export function EmpresaInformation(props: EmpresaInformationProps) {
  const { empresa } = props;
  return (
    <div className="p-3 grid grid-cols-1 lg:grid-cols-2 lg:gap-10 gap-y-4">
      <div className=" rounded-lg bg-background  shadow-md hover:shadow-lg transition-shadow duration-300 p-4">
        <div>
          {/*Formulario de la empresa*/}
          <CompanyForms empresa={empresa} />
        </div>
      </div>
      <div className=" rounded-lg bg-background shadow-md hover:shadow-lg transition-shadow duration-300 p-4 h-main">
        <div className="flex items-center justify-between gap-x-2">
          <div className="flex items-center gap-x-2">
            <User className="w-5 h-5" />
            Contacto
          </div>
          <div>
            <p>new Contact</p>
          </div>
        </div>
        <p>Listado de contactos</p>
      </div>
    </div>
  );
}
