"use client";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FormCreateCustomerType } from "../FormCreateCustomer/FormCreateCustomer.type";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UploadButton } from "@/utils/uploadthing";
import { useToast } from "@/components/hooks/use-toast";
const formSchema = z.object({
  name: z.string().min(4).max(50),
  country: z.string().min(4).max(50),
  website: z.string().min(4).max(50),
  phone: z.string().min(4).max(50),
  cif: z.string().min(6),
  profileImage: z.array(z.string()),
});
import { useRouter } from "next/navigation";
export function FormCreateCustomer(props: FormCreateCustomerType) {
  const { setOpenModalCreate } = props;
  const [photo, setphoto] = useState(false);
  const route = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      country: "",
      website: "",
      phone: "",
      cif: "",
      profileImage: "",
    },
  });
  const { toast } = useToast();
  const { isValid } = form.formState;

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      axios.post("/api/company", values);
      toast({ title: "Empresa creada correctamente" });
      route.refresh();
      setOpenModalCreate(false);
    } catch (error) {
      toast({
        title: "Semething went wrong",
        description: "Please try again",
        variant: "destructive",
      });
      console.log(
        "Submit error /app/(routes)/empresas/components/FormCreateCustomer/FormCreateCustomer.tsx",
        error
      );
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de la empresa</FormLabel>
                <FormControl>
                  <Input placeholder="Empresa... " type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Seleccionar la ciudad</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una ciudad" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Bolivia">Bolivia</SelectItem>
                    <SelectItem value="Argentina">Argentina</SelectItem>
                    <SelectItem value="Uruguay">Uruguay</SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sitio Web</FormLabel>
                <FormControl>
                  <Input
                    placeholder="www.severitech.com "
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input placeholder="+591 71234567 " type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cif"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dirección</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Calle 123, Ciudad"
                    type="text"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="profileImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Logo de la empresa</FormLabel>
                <FormControl>
                  {photo ? (
                    <p className="text-sm">Imagen Cargada</p>
                  ) : (
                    <UploadButton
                      className="bg-slate-600 rounded-xl text-slate-50 pb-2"
                      endpoint="profileImage"
                      {...field}
                      onClientUploadComplete={(res) => {
                        console.log("Files: ", res);
                        setphoto(true);
                        toast({
                          description: "La imagen se ha subido correctamente.",
                        });
                      }}
                      onUploadError={(error: Error) => {
                        toast({
                          description:
                            error.message || "Error al subir la imagen",
                        });
                      }}
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Guardar</Button>
      </form>
    </Form>
  );
}
