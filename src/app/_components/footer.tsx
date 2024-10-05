import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InstagramLogoIcon,
  TwitterLogoIcon,
  VideoIcon,
  PaddingIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <Image
              src="/logo.svg"
              alt="Rotworm Logo"
              width={32}
              height={32}
              className="h-8 w-8 mr-2"
            />
            Rotworm
          </h3>
          <p className="text-gray-400 mb-4">
            Marketplace for tibia items, gold, and more.
          </p>
          <p className="text-gray-400 mb-4">Join our community</p>
          <div className="flex space-x-4">
            <PaddingIcon className="w-6 h-6 hover:text-purple-500 cursor-pointer" />
            <VideoIcon className="w-6 h-6 hover:text-purple-500 cursor-pointer" />
            <TwitterLogoIcon className="w-6 h-6 hover:text-purple-500 cursor-pointer" />
            <InstagramLogoIcon className="w-6 h-6 hover:text-purple-500 cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Marketplace
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Rankings
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Connect a wallet
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Join Our Weekly Digest</h3>
          <p className="text-gray-400 mb-4">
            Get exclusive promotions & updates straight to your inbox.
          </p>
          <div className="flex space-x-2">
            <Input
              type="email"
              placeholder="Enter your email here"
              className="rounded-lg px-4 py-3 bg-white text-gray-900"
            />
            <Button className="bg-purple-600 hover:bg-purple-500 px-4 py-3 rounded-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <div className="text-center mt-12 border-t border-gray-800 pt-6 text-gray-500">
        © 2024 Rotworm. All rights reserved.
      </div>
    </footer>
  );
}
