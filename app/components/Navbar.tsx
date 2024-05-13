"use client";

import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { useUser } from "./getUser";
import Logout from "./Logout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [text, setText] = useState("");
  const router = useRouter();
  const user = useUser();

  return (
    <nav className="fixed w-screen bg-gray-900 flex justify-between items-center h-16 shadow-md">
      <h1 className="pl-4 lg:px-5 text-xl lg:text-2xl text-teal-400 hidden md:block lg:block">
        <Link href={"/"} className="font-thin">
          {" "}
          SnBlog
        </Link>
      </h1>

      <div className="flex justify-between items-center ml-16 md:ml-2 w-[156px] md:w-[400px] lg:w-[500px] h-8 bg-gray-800 rounded-lg">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Search or Jump to..."
          className="w-full h-full px-4 bg-transparent text-xs  outline-none border-none"
        />
        <SearchIcon
          onClick={() => router.push("/search/" + text)}
          size={16}
          className="text-white mx-2 hover:cursor-pointer"
        />
      </div>

      <div>
        {user === null || false ? (
          <Link
            href={"/sign-in"}
            className="mr-2 lg:mr-10 text-xs bg-teal-200 rounded-md text-teal-800 py-1 px-3"
          >
            Sign-in
          </Link>
        ) : (
          <>
            <div className="flex gap-3 md:mr-6 lg:mr-10 items-center justify-center">
              {user && user.displayName && (
                <Link href={"/user"} className="text-xs text-white">
                  {user.displayName}
                </Link>
              )}
              {user && user.photoURL && (
                <Link href={"/user"}>
                  <Image
                    src={user.photoURL}
                    className="rounded-full lg:mr-4 w-8 h-8 lg:w-10 lg:h-10 object-cover "
                    width={400}
                    height={400}
                    alt=""
                  />
                </Link>
              )}
              <Logout />
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
