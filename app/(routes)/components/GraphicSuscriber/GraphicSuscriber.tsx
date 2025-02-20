
"use client"
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { dataGraphic } from "./GraphicSuscriber.data";
export function GraphicSuscriber() {
  return (
    <div className="mt-5">
      <p className="text-3xl mb-1"> 24.789</p>
      <section className="flex gap-x-5 mb-2">
        <section className="flex items-center gap-2 px-3 text-md bg-[#16c8c7] text-white rounded-xl w-fit">
          8.5%
          <TrendingUp strokeWidth={1} className="" />
        </section>
      </section>
      <section className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart width= {730} height = {250} margin={{top:10,right:30, left:0, bottom:0}} data={dataGraphic}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#887cfd" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#887cfd" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#16c8c7" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#16c8c7" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="year" />
                <YAxis />
                <Area type="monotone" dataKey="oldCustomers" stroke="#887cfd" fillOpacity={1} fill="url(#colorPv)" />
                
            </AreaChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
}
