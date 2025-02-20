import { CustomIcon } from "@/components/Customicon"
import { BarChart } from "lucide-react"
import { GraphicSuscriber } from "../GraphicSuscriber"
export function SalesDistributors() {
  return (
    <div className=" shadow-xl bg-background rounded-lg p-5">
      <section className="flex gap-x-2 items-center">
        <CustomIcon icon={BarChart}/>
        <p className="text-xl">Ventas por distribuidor</p>
      </section>
      <section>
        <GraphicSuscriber/>
      </section>
    </div>
  )
}
