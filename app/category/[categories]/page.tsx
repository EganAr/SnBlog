import { getData } from "@/app/blog/page";
import BreadLink from "@/app/components/BreadLink";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import { Hot } from "@/app/home/page";
import Image from "next/image";
import Link from "next/link";

export default async function SingleCategory({
  params,
}: {
  params: { categories: string };
}) {
  const singleCategory = await getData(
    "http://127.0.0.1:3000/api/blog?categories=" + params.categories,
    0
  );

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-5 md:ml-[85px] lg:ml-[125px] pt-28">
        <BreadLink CatName={params.categories} />
      </div>

      <div className="flex ">
        <div className="flex flex-col gap-8 pt-10 ml-5 md:ml-[85px] lg:ml-[125px] pb-20">
          {singleCategory.data.map((cat: any) => (
            <div key={cat.id} className="flex justify-start items-start">
              <Image
                src={cat.src}
                alt={cat.alt}
                width={2000}
                height={2000}
                className="min-w-40 min-h-40 w-40 h-40 md:w-[250px] md:h-[200px] lg:w-[300px] lg:h-60 object-cover"
              />
              <div className="flex flex-col  pl-4 lg:pl-10 lg:pt-4 font-thin">
                <div className="flex gap-4 items-center">
                  <h1 className="font-thin text-gray-500">{cat.date} *</h1>
                  <h2 className={`text-red-500`}>{cat.categories}</h2>
                </div>
                <h1 className="w-48 md:w-72 lg:w-72 pt-3 md:pt-6 lg:pt-6 text-sm md:text-base lg:text-xl">
                  {cat.title}
                </h1>
                <p className="line-clamp-2 w-48 md:w-72 lg:w-72 pt-2 lg:pt-6 text-xs  md:text-sm lg:text-sm text-gray-500">
                  {cat.desc}
                </p>
                <Link
                  href={`/blog/${cat.id}`}
                  className="font-thin text-xs md:text-sm lg:text-sm pt-2 md:pt-6 lg:pt-6 hover:opacity-80"
                >
                  read more
                  <div className="bg-gradient-to-r from-violet-500  to-fuchsia-500 h-0.5 w-[70px] rounded-full"></div>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="w-56 ml-44 hidden md:hidden lg:block">
          <Hot />
        </div>
      </div>

      <Footer />
    </>
  );
}
