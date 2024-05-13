"use client";

import {
  PlusCircle,
  LucideHome,
  User,
  LayoutGrid,
  TabletSmartphone,
  Handshake,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SheetSide from "./Sheet";

export const linksBlog = [
  {
    name: "Home",
    href: "/home",
    icon: LucideHome,
  },
  {
    name: "Categories",
    href: "/category",
    icon: LayoutGrid,
  },
  {
    name: "Blog",
    href: "/blog",
    icon: TabletSmartphone,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: Handshake,
  },
];

export const linksUser = [
  {
    name: "User",
    href: "/user",
    icon: User,
  },
  {
    name: "Add Blog",
    href: "/add-blog",
    icon: PlusCircle,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <>
      <nav className="fixed h-screen mt-[62px] md:w-[8vw] lg:w-[6vw] bg-gray-900 hidden md:block lg:block">
        <div className="flex flex-col justify-start items-center gap-2.5 ml-1 pt-6">
          {linksBlog.map((link) => (
            <div key={link.name}>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  className="w-14 h-12  text-sm flex justify-start rounded-md items-center gap-3 font-bold bg-slate-800"
                >
                  <p className="w-1 h-8 rounded-xl bg-black"></p>
                  <link.icon
                    size={24}
                    className=" text-teal-400"
                    strokeWidth={1}
                  />
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="group w-14 h-12  text-sm flex justify-start rounded-lg items-center gap-4 font-bold hover:bg-slate-800 hover:rounded-md transition-all duration-100 ease-linear "
                >
                  <link.icon size={24} className="ml-4" strokeWidth={1} />
                  <p className="absolute font-thin left-20 scale-0 group-hover:scale-100 bg-gray-800 w-auto py-2 px-4 m-1 text-xs rounded-md ease-in-out duration-300">
                    {link.name}
                  </p>
                </Link>
              )}
            </div>
          ))}
          <div className="bg-gray-500 ml-1.5 w-14 h-0.5 rounded-full my-4"></div>
          {linksUser.map((link) => (
            <div key={link.name}>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  className="w-14 h-12  text-sm flex justify-start rounded-md items-center gap-3 font-bold bg-slate-800"
                >
                  <p className="w-1 h-8 rounded-xl bg-black"></p>
                  <link.icon
                    size={24}
                    className="text-teal-400"
                    strokeWidth={1}
                  />
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="group w-14 h-12 text-sm flex justify-start items-center gap-4  font-bold hover:bg-slate-800 hover:rounded-md transition-all duration-100 ease-linear  "
                >
                  <link.icon size={24} className="ml-4" strokeWidth={1} />
                  <p className="absolute font-thin left-20 scale-0 group-hover:scale-100 bg-gray-800 w-auto py-2 px-3 text-xs rounded-md ease-in-out duration-300">
                    {link.name}
                  </p>
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>
      <div className="fixed top-4 left-4 z-10 lg:hidden md:hidden">
        <SheetSide />
      </div>
    </>
  );
}
