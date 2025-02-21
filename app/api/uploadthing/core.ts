import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "@clerk/nextjs/server";

const f = createUploadthing();

// Función asíncrona para manejar la autenticación
const handleAuth = async () => {
    const { userId } = await auth();
    if (!userId) throw new Error("Unauthorized");
    return { userId };
};


export const ourFileRouter = {
    profileImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
        .middleware(async () => handleAuth())
        .onUploadComplete(({ file }) => {
            console.log("Archivo subido:", file.url);
            return { url: file.url };
        }),
} satisfies FileRouter;



export type OurFileRouter = typeof ourFileRouter;
