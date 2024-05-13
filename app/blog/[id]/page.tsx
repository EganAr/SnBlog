import Image from "next/image";
import { getData } from "../page";
import { Hot } from "@/app/home/page";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import Footer from "@/app/components/Footer";

export default async function SinglePost({
  params,
}: {
  params: { id: number };
}) {
  const blog = await getData(
    `http://localhost:3000/api/blog?id=` + params.id,
    0
  );
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 md:ml-16 lg:px-12 pt-28">
        <div>
          <Image
            src={blog.data.src}
            alt=""
            width={2000}
            height={2000}
            className="w-96 h-72 md:w-[750px] md:h-[250px] lg:w-[500px] lg:h-80 object-cover"
          />
        </div>

        <div className="flex flex-col items-start justify-start">
          <h1
            className={`flex items-center text-xl lg:text-3xl font-bold tracking-wide lg:pt-10 ${blog.data.color}`}
          >
            {blog.data.title}
          </h1>

          <div className="flex gap-6 pt-4 lg:pt-20">
            <Image
              src={blog.data.userProfile}
              alt=""
              width={40}
              height={40}
              className="w-8 h-8 object-cover rounded-full mt-2"
            />
            <div className="flex flex-col">
              <p className="text-xs font-light text-slate-600">Author</p>
              <p className="text-sm font-bold pt-2">{blog.data.user}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xs font-light text-slate-600">Published</p>
              <p className="text-sm font-bold pt-2">{blog.data.date}</p>
            </div>
          </div>
        </div>
        <div className="pt-8 w-[90vw] md:w-[75vw] lg:w-[80vw] flex ">
          <div className="w-full md:w-[75vw] lg:w-[60vw] text-gray-300 ">
            <p className="text-xs md:text-sm lg:text-base text-justify tracking-tight lg:tracking-wide font-thin">
              {blog.data.desc}
            </p>
            <p className="text-xs md:text-sm lg:text-base text-justify tracking-tight lg:tracking-wide font-thin pt-8">
              {blog.data.desc2}
            </p>
            <p className="text-xs md:text-sm lg:text-base text-justify tracking-tight lg:tracking-wide font-thin pt-8">
              {blog.data.desc3}
            </p>
          </div>
          <div className="hidden md:hidden lg:block w-[18vw] absolute left-[75vw]">
            <Hot />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
