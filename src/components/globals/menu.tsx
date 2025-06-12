"use client";

import { Menu as MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "../ui/dropdown-menu";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";

function Menu({ orientation }: { orientation: "desktop" | "mobile" }) {
  switch (orientation) {
    case "desktop":
      return (
        <div className="md:flex hidden items-center justify-between grow py-16">
          <nav>
            <ul className="flex items-center gap-6">
              {["Features", "Pricing", "Resources"].map((item) => {
                return (
                  <li
                    className="text-gray-400 hover:text-gray-600 cursor-pointer text-lg font-bold"
                    key={item}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              size={"lg"}
              variant={"ghost"}
              className="rounded-full font-semibold text-base text-gray-400"
            >
              Login
            </Button>
            <Button
              size={"lg"}
              className="rounded-full font-semibold text-base "
            >
              Sign Up
            </Button>
          </div>
        </div>
      );
    case "mobile":
      return <MobileMenu />;
    default:
      return null;
  }
}

function MobileMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="md:hidden py-12">
        <Button variant={"ghost"}>
          <MenuIcon className="size-8 text-gray-400" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[calc(100vw-4rem)] bg-secondary text-secondary-foreground pt-8 rounded-xl"
        align="end"
      >
        <DropdownMenuGroup>
          {["Features", "Pricing", "Resources"].map((item) => {
            return (
              <DropdownMenuItem
                key={item}
                className="justify-center text-lg font-semibold py-4"
              >
                {item}
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="my-4 bg-gray-500 h-px mx-4" />
        <div className="flex flex-col pb-12 px-4 gap-4">
          <Button
            size={"lg"}
            variant={"ghost"}
            className="rounded-full font-semibold text-base text-gray-400"
          >
            Login
          </Button>
          <Button size={"lg"} className="rounded-full font-semibold text-base ">
            Sign Up
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Menu;
