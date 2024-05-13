import Navbar from "@/app/components/Navbar";
import { getData } from "../../blog/page";
import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/Footer";

export default async function Search({
  params,
}: {
  params: { query: string };
}) {
  const search = await getData(
    `http://127.0.0.1:3000/api/search?query=` + params.query,
    0
  );

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-5 md:ml-[85px] lg:ml-[125px] pt-32">
        <h1 className="flex text-xl gap-2">
          {" "}
          Results for <p className="text-red-500">{params.query}</p>{" "}
        </h1>
        <div className="flex flex-col justify-start items-start gap-8 pt-10">
          {search.data.map((data: any) => (
            <>
              <div key={data.id} className="flex">
                <Image
                  src={data.src}
                  alt={data.alt}
                  width={2000}
                  height={2000}
                  className="min-w-40 min-h-40 w-40 h-40 md:w-[250px] md:h-[200px] lg:w-[300px] lg:h-60 object-cover"
                />
                <div className="flex flex-col pl-4 lg:pl-10 font-thin">
                  <div className="flex gap-4 items-center text-sm md:text-base lg:text-base">
                    <h1 className="font-thin text-gray-500">{data.date} *</h1>
                    <h2 className={`text-red-500`}>{data.categories}</h2>
                  </div>
                  <h1 className="w-48 md:w-72 lg:w-72 pt-3 md:pt-6 lg:pt-6 text-sm md:text-base lg:text-xl">
                    {data.title}
                  </h1>
                  <p className="line-clamp-2 w-48 md:w-72 lg:w-72 pt-2 lg:pt-6 text-xs  md:text-sm lg:text-sm text-gray-500">
                    {data.desc}
                  </p>
                  <Link
                    href={`/blog/${data.id}`}
                    className="font-thin text-xs md:text-sm lg:text-sm mt-2 md:mt-6 lg:mt-6 hover:opacity-80 w-20"
                  >
                    read more
                    <div className="bg-gradient-to-r from-violet-500  to-fuchsia-500 h-0.5 w-[70px] rounded-full"></div>
                  </Link>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
