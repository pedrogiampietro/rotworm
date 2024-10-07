"use server";

import { prisma } from "@/services/database";

// src/app/_actions/items/actions.ts
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
        description: data.description || "Sem descrição",
        imageUrl: data.imageUrl || "",
        price: data.price,
        seller: {
          connect: { id: data.sellerId }, // Ensure sellerId is defined
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
