"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  EnvelopeOpenIcon,
  HamburgerMenuIcon,
  Cross1Icon,
} from "@radix-ui/react-icons";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex justify-between items-center py-4 px-6 bg-gray-800">
      <div className="flex items-center">
        <Image
          src="/logo.svg"
          alt="Rotworm Logo"
          width={32}
          height={32}
          className="h-8 w-8 mr-2"
        />
        <h1 className="text-xl font-bold">Rotworm</h1>
      </div>

      <div className="hidden md:flex space-x-4">
        <Button variant="ghost">Oi</Button>
        <Button variant="ghost">não sei</Button>
        <Button variant="ghost">até mais</Button>
        <Button className="bg-purple-600 text-white">
          <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Sign Up
        </Button>
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
          <Button variant="ghost" onClick={toggleMenu}>
            Oi
          </Button>
          <Button variant="ghost" onClick={toggleMenu}>
            não sei
          </Button>
          <Button variant="ghost" onClick={toggleMenu}>
            até mais
          </Button>
          <Button className="bg-purple-600 text-white" onClick={toggleMenu}>
            <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Sign Up
          </Button>
        </div>
      )}
    </header>
  );
}
