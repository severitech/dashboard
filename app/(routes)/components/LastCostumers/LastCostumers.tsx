import { Building } from "lucide-react";
import { CustomIcon } from "../../../../components/Customicon";
import { CustomersTable } from "../CustomersTable";

export function LastCostumers() {
  return (
    <div className=" shadow-2xl rounded-xl p-5 mb-2 rounded-lg  bg-background">
      <section className="flex items-center gap-x-2">
        <CustomIcon icon= {Building}/>
        <p className="text-xl">Siguiente customizable</p>
      </section>
      <section >
        <CustomersTable/>
      </section>
    </div>
  );
}
