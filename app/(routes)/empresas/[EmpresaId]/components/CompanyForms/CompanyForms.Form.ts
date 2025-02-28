import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(1, {message: "El nombre es requerido"}),
    country: z.string().min(1, {message: "El pais es requerido"}),
    website: z.string().min(1, {message: "El sitio web es requerido"}),
    cif: z.string().min(1, {message: "El cif es requerido"}),
})
