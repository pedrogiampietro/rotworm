// actions.ts
"use server";

import { prisma } from "@/services/database";

export async function createItem(data: {
  title: string;
  sellerId: string;
  description: string;
  imageUrl: string;
  price: number;
}) {
  try {
    const newItem = await prisma.item.create({
      data: {
        name: data.title,
        description: data.description || "Sem descrição", // Use form data or default
        imageUrl: data.imageUrl || "", // Use form data or default
        price: data.price, // Use the actual price from the form
        seller: {
          connect: { id: data.sellerId },
        },
      },
    });
    return newItem;
  } catch (error) {
    console.log("Error creating item", error);
    console.error("Failed to create item", error);
    throw new Error("Error creating item");
  }
}
