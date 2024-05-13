"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import { linksBlog, linksUser } from "./Sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SHEET_SIDES = ["top"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export default function SheetSide() {
  const pathname = usePathname();
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <button>
              <AlignJustify size={32} strokeWidth={1} />
            </button>
          </SheetTrigger>
          <SheetContent side={side} className="bg-gray-950">
            <SheetHeader className="">
              <div className="grid grid-cols-2 gap-2">
                {linksBlog.map((link) => (
                  <div key={link.name}>
                    {pathname === link.href ? (
                      <Link
                        href={link.href}
                        className="flex w-auto rounded-md justify-start items-center bg-slate-800"
                      >
                        <div className="w-14 h-12  text-sm flex justify-start rounded-md items-center gap-4 font-bold ">
                          <link.icon
                            size={24}
                            className="ml-4 text-teal-400"
                            strokeWidth={1}
                          />
                        </div>
                        <div className="text-xs ml-2">{link.name}</div>
                      </Link>
                    ) : (
                      <Link
                        href={link.href}
                        className="flex w-auto justify-start items-center hover:bg-slate-800 hover:rounded-md transition-all duration-100 ease-linear "
                      >
                        <div className="w-14 h-12 text-sm flex justify-start rounded-lg items-center gap-4 font-bold">
                          <link.icon
                            size={24}
                            className="ml-4"
                            strokeWidth={1}
                          />
                        </div>
                        <div className="text-xs ml-2">{link.name}</div>
                      </Link>
                    )}
                  </div>
                ))}
                {linksUser.map((link) => (
                  <div key={link.name}>
                    {pathname === link.href ? (
                      <Link
                        href={link.href}
                        className="flex w-auto rounded-md justify-start items-center bg-slate-800"
                      >
                        <div className="w-14 h-12  text-sm flex justify-start rounded-md items-center gap-4 font-bold ">
                          <link.icon
                            size={24}
                            className="ml-4 text-teal-400"
                            strokeWidth={1}
                          />
                        </div>
                        <div className="text-xs ml-2">{link.name}</div>
                      </Link>
                    ) : (
                      <Link
                        href={link.href}
                        className="flex w-auto justify-start items-center hover:bg-slate-800 hover:rounded-md transition-all duration-100 ease-linear "
                      >
                        <div className="w-14 h-12 text-sm flex justify-start rounded-lg items-center gap-4 font-bold">
                          <link.icon
                            size={24}
                            className="ml-4"
                            strokeWidth={1}
                          />
                        </div>
                        <div className="text-xs ml-2">{link.name}</div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </SheetHeader>
            <SheetFooter>
              <SheetClose asChild></SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
