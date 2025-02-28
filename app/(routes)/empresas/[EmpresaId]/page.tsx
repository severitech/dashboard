import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Header } from "./components/Header";
import { EmpresaInformation } from "./components/EmpresaInformation";
export default async function CompanyIdPage({
  params,
}: {
  params: { EmpresaId: string };
}) {
    //Verificar si esta autorizado el usuario
  const { userId } = await auth();
  if (!userId) {
    return redirect("/");
  }
  //Verificar si existe la empresa
  const { EmpresaId } = params;
  const company = await db.company.findUnique({
    where: { id: EmpresaId },
  });
  //Si no existe la empresa, redirigir al usuario al listado de empresas
  if (!company) {
    return redirect("/empresas");
  }
  return <div>
    <Header />
    <EmpresaInformation empresa = { company }/>
  </div>;
}
