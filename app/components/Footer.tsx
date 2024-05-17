import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="ml-5 md:ml-[90px] lg:ml-[125px] pt-8 lg:pt-16">
      <div className="flex justify-between items-center w-full h-60">
        <div className="flex flex-col">
          <div className="flex items-center gap-4">
            <Image
              src={"https://avatars.githubusercontent.com/u/141480038?v=4"}
              alt=""
              width={800}
              height={800}
              className="rounded-full w-10 lg:w-14 h-10 lg:h-14"
            />
            <h1 className="text-xl font-thin">SnBlog</h1>
          </div>
          <p className="text-xs w-80 md:w-80 lg:w-96 text-gray-500 pt-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam,
            nihil voluptatibus veritatis sunt in ipsa consequuntur
          </p>
          <div className="flex items-center gap-4 pt-4">
            <Link
              href={"https://www.facebook.com/profile.php?id=100026986518658"}
            >
              <Facebook size={20} className="text-blue-500" />
            </Link>
            <Link href={"https://www.instagram.com/egan_ardenna/"}>
              <Instagram size={20} className="text-pink-500" />
            </Link>
            <Link href={"https://github.com/EganAr"}>
              <Github size={20} className="text-white" />
            </Link>
          </div>
        </div>

        <div className="hidden md:flex lg:flex gap-6 lg:gap-14 justify-center items-center mr-6 lg:mr-8">
          <div className="flex flex-col text-xs lg:text-sm gap-1 text-gray-500 ">
            <h1 className="text-white text-sm lg:text-lg pb-2">Tags</h1>
            <Link href={"/category/Web"} className="hover:underline">
              Web
            </Link>
            <Link href={"/category/Gaming"} className="hover:underline">
              Gaming
            </Link>
            <Link href={"/category/Food"} className="hover:underline">
              Food
            </Link>
            <Link href={"/category/Sports"} className="hover:underline">
              Sports
            </Link>
          </div>
          <div className="flex flex-col text-xs lg:text-sm gap-1 text-gray-500">
            <h1 className="text-white text-sm lg:text-lg pb-2">Links</h1>
            <Link href={"/"} className="hover:underline">
              Home
            </Link>
            <Link href={"/contact"} className="hover:underline">
              Contact us
            </Link>
            <Link href={"/blog"} className="hover:underline">
              Blog
            </Link>
            <Link href={"/category"} className="hover:underline">
              Category
            </Link>
          </div>
          <div className="flex flex-col text-xs lg:text-sm gap-2.5 lg:gap-3 text-gray-500">
            <h1 className="text-white text-sm lg:text-lg pb-2">Social</h1>
            <Link
              href={"https://www.facebook.com/profile.php?id=100026986518658"}
              className="hover:underline"
            >
              Facebook
            </Link>
            <Link
              href={"https://www.instagram.com/egan_ardenna/"}
              className="hover:underline"
            >
              Instagram
            </Link>
            <Link
              href={"https://github.com/EganAr"}
              className="hover:underline"
            >
              Github
            </Link>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500 text-center mb-4">
        Copyright &copy; 2024
      </p>
    </div>
  );
}
