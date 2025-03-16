"use client";

import { PopoverGroup } from "@headlessui/react";
import Logo from "../../img/logo.png";
import { useTheme } from "../../context/ThemeContext";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-black">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-full items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img alt="Novalyze logo" src={Logo} className="h-15 w-auto" />
          </a>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="/" className="text-sm/6 font-semibold text-secondary">
            Home
          </a>
          <a href="#" className="text-sm/6 font-semibold text-secondary">
            Marketplace
          </a>
          <a href="#" className="text-sm/6 font-semibold text-secondary">
            Company
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/login"
            className="text-sm/6 font-semibold text-secondary mt-2 mr-10">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
          <button
            onClick={toggleTheme}
            className="bg-zinc-500 dark:bg-zinc-200 p-2 rounded shadow-md dark:shadow-amber-500/50 shadow-sky-500/50">
            {theme === "light" ? (
              <FaMoon className="size-5" />
            ) : (
              <MdSunny className="size-5" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
