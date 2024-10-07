"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRef } from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { zodResolver } from "@hookform/resolvers/zod";

import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { createItem } from "@/app/_actions/items/actions";
import { itemSchema } from "../types";

type ItemUpsertSheetProps = {
  children?: React.ReactNode;
};

export function ItemUpsertSheet({ children }: ItemUpsertSheetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(itemSchema),
  });

  const { data: session } = useSession();

  if (!session) {
    return "você precisa fazer login primeiro.";
  }

  const onSubmit = form.handleSubmit(async (data) => {
    try {
      if (!session.user.id) {
        throw new Error("User ID is not available.");
      }

      await createItem({
        title: data.title,
        description: data.description || "Sem descrição",
        imageUrl: data.imageUrl || "",
        price: Number(data.price),
        sellerId: session.user.id,
      });
      router.refresh();

      ref.current?.click();

      toast({
        title: "Success",
        description: "O item foi criado com sucesso.",
      });
    } catch (error) {
      console.log("error", error);
      toast({
        title: "Error",
        description: "Ocorreu um erro ao criar o item.",
      });
    }
  });

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div ref={ref}>{children}</div>
      </SheetTrigger>
      <SheetContent>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-8 h-screen">
            <SheetHeader>
              <SheetTitle>Criar Item</SheetTitle>
              <SheetDescription>
                Adicione as informações do item e clique em salvar.
              </SheetDescription>
            </SheetHeader>

            {/* Campo de Título */}
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o título do item" {...field} />
                  </FormControl>
                  <FormDescription>
                    Este será o nome público do item.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo de Descrição */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite a descrição do item"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Descrição opcional para o item.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo de URL da Imagem */}
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL da Imagem</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="https://imagem-do-item.com"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Insira a URL de uma imagem para o item (opcional).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Campo de Preço */}
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preço</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Digite o preço em gold coins"
                      value={field.value ?? ""} // Certificando-se de que o valor inicial é uma string vazia se for undefined
                      onChange={(e) => field.onChange(Number(e.target.value))} // Convertendo para número
                    />
                  </FormControl>
                  <FormDescription>Defina o preço do item.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <SheetFooter className="mt-auto">
              <Button type="submit">Salvar</Button>
            </SheetFooter>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
