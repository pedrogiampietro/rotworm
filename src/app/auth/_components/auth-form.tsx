"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export function AuthForm() {
  return (
    <div className="mx-auto max-w-sm space-y-8">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Faça login na sua conta usando Discord
        </p>
      </div>
      <Button
        className="w-full bg-purple-600 text-white"
        onClick={() => signIn("discord")}
      >
        Entrar com Discord
      </Button>
    </div>
  );
}
