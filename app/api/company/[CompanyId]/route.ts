import {db} from "@/lib/db"
import {auth} from "@clerk/nextjs"
import { NextResponse } from "next/server"

export async function PATH(
    req: Request, {params}:{params:{companyId: string}}){
        try {
            
        } catch (error) {
            console.log("[CompanyID Patch",error);
            return new NextResponse("Internal Error",{status:500})
        }
    }
