import { Building } from "lucide-react";
import { CustomIcon } from "../Customicon";

export function LastCostumers() {
  return (
    <div className="p-5 rounded-lg shadow-sm bg-background">
      <section className="flex items-center gap-x-2">
        <CustomIcon icon= {Building}/>
        <p className="text-xl">Siguiente customizable</p>
      </section>
    </div>
  );
}
