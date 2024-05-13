"use client";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useUser } from "../components/getUser";
import Image from "next/image";
import Link from "next/link";
import MainImage, { UserModal } from "../components/UserProfile";
import UserBlog from "../components/UserBlog";

export default function UserPage() {
  const user = useUser();

  return (
    <>
      <Navbar />
      <Sidebar />

      {user === null ? (
        <div className="w-screen h-screen pt-24 flex flex-col gap-4 justify-center items-center">
          <h1 className="text-3xl font-bold text-teal-700">Please Sign-in</h1>
          <Link
            href={"/sign-in"}
            className="ml-4 text-sm bg-teal-200 rounded-md text-teal-800 py-1 px-3"
          >
            Sign-in
          </Link>
        </div>
      ) : (
        <div className="md:pl-[88px] lg:pl-[88px] pt-24 flex flex-col lg:flex-row justify-center lg:justify-start gap-16 items-center lg:items-start">
          <div>
            {user && user.photoURL ? (
              <>
                <div className="flex flex-col justify-center items-end">
                  <Image
                    src={user.photoURL}
                    width={2000}
                    height={2000}
                    alt=""
                    className="w-56 lg:w-72 h-56 lg:h-72 rounded-full object-cover"
                  />
                  <UserModal />
                </div>
                <p>{user.displayName}</p>
              </>
            ) : (
              <MainImage />
            )}
          </div>

          <div className="lg:mt-20 flex flex-col justify-start items-start">
            <h1 className="text-gray-300">Your Blog</h1>
            <UserBlog username={user.displayName} />
          </div>
        </div>
      )}
    </>
  );
}
