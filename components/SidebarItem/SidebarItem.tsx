import Link from "next/link"
import { cn } from "@/lib/utils"
import { SidebarItemProps } from "./SidebarItem.types"


export function SidebarItem(props: SidebarItemProps) {
  const { item } = props
  const {href,nombre,icon: Icon} = item  
  return( <Link href={href} className={cn(`flex gap-x-2 mt-2 light:text-slate-700 dark:text-white text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer`)}>
    <Icon className=" h-5 w-5" strokeWidth={1}/>
    {nombre}
  </Link>)
}
