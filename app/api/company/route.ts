import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
    try {
        const { userId } = await auth();
        console.log(userId)
        const data = await req.json();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        // Validar que los campos requeridos estén presentes
        if (!data.name || !data.cif) {
            return new NextResponse("Missing required fields", { status: 400 });
        }

        // Crear la empresa
        const company = await db.company.create({
            data: {
                userId,
                ...data,
            },
        });

        return NextResponse.json(company);
    } catch (error) {
        console.error("Error en la creación de la compañía:", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}

