import { z } from "zod";

export const itemSchema = z.object({
  title: z.string().min(1, "O título é obrigatório"),
  description: z.string().optional(),
  imageUrl: z.string().url("Insira uma URL válida para a imagem").optional(),
  price: z.number().positive("O preço deve ser um número positivo"),
});
