
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { DataTable } from "./DataTable";
import { db } from "@/lib/db";
import { columns } from "./Columns";
export async function ListCompanies() {
  const { userId} = await auth();
  if (!userId) {
    return redirect("/");
  }
  const companies = await db.company.findMany({
    where:{
        userId
    },
    orderBy:{
        createdAt: "desc"
    }
  })
  return <div>
    <DataTable columns={columns} data={companies}/>
  </div>;
}
