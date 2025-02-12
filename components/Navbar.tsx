"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  const pathname = usePathname();
  const isActiveLink =
    pathname === "/"
      ? "font-semibold text-gray-800 dark:text-gray-200"
      : "font-normal text-gray-600 dark:text-gray-400";
  return (
    <nav className="flex items-center justify-between w-full relative max-w-2xl mx-auto pt-8 pb-8 sm:pb-16 px-4 md:px-0">
      <div className="flex justify-center items-center gap-3">
        <Link
          href="/"
          className={`rounded-lg hover:text-gray-950 dark:hover:text-gray-200 transition-all ${isActiveLink}`}
        >
          <span className="capsize">Blog</span>
        </Link>
      </div>
      <ThemeSwitcher />
    </nav>
  );
}
