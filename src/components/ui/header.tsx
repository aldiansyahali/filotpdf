"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import Logo from "./logo";
import { Button } from "./button";
import { LogIn } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(theme(colors.gray.100),theme(colors.gray.200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          
          <ul className="flex flex-1 items-center justify-end gap-5 mr-6">
            <li className="text-gray-700">
              <Link href='#howTo'>
                How To
              </Link>
            </li>
            <li className="text-gray-700">
              <Link href='#supportBy'>
                Support By
              </Link>
            </li>
            <li>
              <Link href='/sign-in'>
                <Button>Login
                  <LogIn className="w-4 h-4 ml-2"/>
                  </Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
