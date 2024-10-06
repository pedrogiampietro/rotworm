"use client";

import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  HamburgerMenuIcon,
  Cross1Icon,
  DiscordLogoIcon,
} from "@radix-ui/react-icons";
import { UserNav } from "./user-nav";
import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-gray-800">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.svg"
          alt="Rotworm Logo"
          width={32}
          height={32}
          className="h-8 w-8 mr-2"
        />
        <h1 className="text-xl font-bold">Rotworm</h1>
      </Link>

      <div className="hidden md:flex space-x-4">
        <Button variant="ghost">Profile</Button>

        {session ? (
          <UserNav session={session} />
        ) : (
          <Button
            className="bg-purple-600 text-white"
            onClick={() => signIn("discord")}
          >
            <DiscordLogoIcon className="mr-2 h-4 w-4" /> Entrar com Discord
          </Button>
        )}
      </div>

      <div className="md:hidden">
        <Button variant="ghost" onClick={toggleMenu}>
          {isOpen ? (
            <Cross1Icon className="h-6 w-6" />
          ) : (
            <HamburgerMenuIcon className="h-6 w-6" />
          )}
        </Button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 p-4 md:hidden">
          {session ? (
            <div className="flex flex-col items-center">
              <Image
                src={session.user.image || "/default-avatar.png"}
                alt="User Name"
                width={48}
                height={48}
                className="rounded-full"
              />
              <span className="text-white">{session.user.name}</span>
              <Button
                className="bg-red-600 text-white"
                onClick={() => signOut()}
              >
                Sair
              </Button>
            </div>
          ) : (
            <Button
              className="bg-purple-600 text-white"
              onClick={() => {
                signIn("discord");
                toggleMenu(); // Fecha o menu após login
              }}
            >
              <DiscordLogoIcon className="mr-2 h-4 w-4" /> Entrar com Discord
            </Button>
          )}
          <Button variant="ghost" onClick={toggleMenu}>
            Oi
          </Button>
          <Button variant="ghost" onClick={toggleMenu}>
            não sei
          </Button>
          <Button variant="ghost" onClick={toggleMenu}>
            até mais
          </Button>
        </div>
      )}
    </header>
  );
}
