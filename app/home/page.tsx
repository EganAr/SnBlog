import Image from "next/image";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { getData } from "../blog/page";
import Link from "next/link";
import Footer from "../components/Footer";

export default async function Home() {
  const blogPromise = await getData("https://127.0.0.1:3000/api/blog", 0);
  const categoriesPromise = await getData(
    "https://127.0.0.1:3000/api/categories",
    0
  );

  const [blog, categories] = await Promise.all([
    blogPromise,
    categoriesPromise,
  ]);
  return (
    <>
      <div className="max-w-[95vw] w-screen">
        <Navbar />
        <Sidebar />
        <div className="flex flex-col justify-center items-center ml-5 md:ml-[90px] lg:ml-[125px]">
          <div className="bg-[url('/bg/main-hero.jpg')] rounded-xl bg-cover w-[95vw] md:w-[85vw] lg:w-[90vw] h-[50vh] md:h-[60vh] lg:h-[60vh] my-20 bg-top">
            <div className="flex flex-col justify-start mt-40 md:mt-48 lg:mt-44 ml-4 lg:ml-10">
              <h1 className="bg-gray-950 rounded-full flex items-center justify-center w-32 h-8 lg:w-44 lg:h-10 border border-white font-bold text-xs lg:text-sm">
                Web Development
              </h1>
              <h2 className="text-sm md:text-xl lg:text-2xl pt-2 w-[75vw] md:w-[60vw] lg:w-[50vw] ">
                Building Progressive Web Apps: Bridging The Gap Between Web and
                Mobile
              </h2>
              <p className="text-xs lg:text-sm pt-2 w-[90vw] md:w-[50vw] lg:w-[50vw] font-thin">
                Integrating mindfulness practices with helps developers
                cultivates present-moment awarness, fostering focus,
                problem-solving, adn work-life balance.
              </p>
              <Link
                href="/blog"
                className="text-sm font-thin underline flex items-start justify-start w-28 h-8 mt-2"
              >
                Read More
              </Link>
            </div>
          </div>

          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-2xl font-thin">Popular Categories</h1>
            <div className="w-[90vw] md:w-[82vw] lg:w-[82vw] gap-4 md:gap-4 lg:gap-12 grid grid-cols-3 md:grid-grid-cols-3 lg:grid-cols-6 pt-4 md:ml-8 lg:ml-0 text-black text-xs">
              <Link
                href="/category/Sports"
                className="bg-sky-500 flex justify-center items-center font-thin rounded-lg w-28 md:w-44 lg:w-36 h-12"
              >
                <p className="">Sports</p>
              </Link>
              <Link
                href={"/category/Food"}
                className="bg-slate-100 flex justify-center items-center font-thin rounded-lg w-28 md:w-44 lg:w-36 h-12"
              >
                <p>Food</p>
              </Link>
              <Link
                href={"/category/Web"}
                className="bg-gray-600 flex justify-center items-center font-thin rounded-lg w-28 md:w-44 lg:w-36 h-12"
              >
                <p className="text-white">Web </p>
              </Link>
              <Link
                href={"/category/Gaming"}
                className="bg-green-200 flex justify-center items-center font-thin rounded-lg w-28 md:w-44 lg:w-36 h-12"
              >
                <p>Gaming</p>
              </Link>
              <Link
                href={"/category/Music"}
                className="bg-fuchsia-500 flex justify-center items-center font-thin rounded-lg w-28 md:w-44 lg:w-36 h-12"
              >
                <p>Music</p>
              </Link>
              <Link
                href={"/category/Random"}
                className="bg-rose-200 flex justify-center items-center font-thin rounded-lg w-28 md:w-44 lg:w-36 h-12"
              >
                <p>Random</p>
              </Link>
            </div>
          </div>

          <div className="w-full py-20 lg:ml-4">
            <div className="flex justify-between items-start">
              <div className="flex flex-col justify-start items-start">
                <h1 className="text-2xl font-thin">Recent Post</h1>
                <div className="flex flex-col gap-8 pt-10">
                  {blog.data.slice(2, 5).map((image: any) => (
                    <div
                      key={image.id}
                      className="flex justify-start items-start"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={2000}
                        height={2000}
                        className="min-w-40 min-h-40 w-40 h-40 md:w-[250px] md:h-[200px] lg:w-[300px] lg:h-60 object-cover"
                      />
                      <div className="flex flex-col pl-4 lg:pl-10 font-thin">
                        <div className="flex gap-4 items-center text-sm md:text-base lg:text-base">
                          <h1 className="font-thin text-gray-500">
                            {image.date} *
                          </h1>
                          <h2 className={`text-${image.color}-500`}>
                            {image.categories}
                          </h2>
                        </div>
                        <h1 className="w-48 md:w-72 lg:w-72 pt-3 md:pt-6 lg:pt-6 text-sm md:text-base lg:text-xl">
                          {image.title}
                        </h1>
                        <p className="line-clamp-2 w-48 md:w-72 lg:w-72 pt-2 lg:pt-6 text-xs  md:text-sm lg:text-sm text-gray-500">
                          {image.desc}
                        </p>
                        <Link
                          href={`/blog/${image.id}`}
                          className="font-thin text-xs md:text-sm lg:text-sm pt-2 md:pt-6 lg:pt-6 hover:opacity-80"
                        >
                          read more
                          <div className="bg-gradient-to-r from-violet-500  to-fuchsia-500 h-0.5 w-[70px] rounded-full"></div>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-72 hidden md:hidden lg:block">
                <Hot />
                <div className="pt-8 pl-4">
                  <p className="text-xs font-thin text-gray-500">
                    Discover by Topic
                  </p>
                  <h1 className="text-2xl font-thin">Categories</h1>
                  <div className="grid grid-cols-3 gap-x-10 gap-y-2 w-36 pt-4">
                    {categories.data.map((categories: any) => (
                      <div
                        key={categories.id}
                        className={`text-${categories.color}-500 rounded-full}`}
                      >
                        <Link
                          href={`/category/${categories.title}`}
                          className="text-xs"
                        >
                          {categories.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function Hot() {
  const blog = await getData("http://localhost:3000/api/blog", 0);
  return (
    <div className="bg-slate-950 rounded-lg p-4">
      <p className="text-xs font-thin text-gray-500">{"What's Hot?"}</p>
      <h1 className="text-2xl font-thin">Most Popular</h1>
      <div className="pt-6">
        {blog.data.slice(3, 7).map((image: any) => (
          <div key={image.id} className="flex flex-col">
            <div className="flex flex-col">
              <h1
                className={`flex justify-center items-center rounded-lg text-sm bg-${image.color}-500 w-24 font-thin`}
              >
                {image.categories}
              </h1>
              <Link
                href={`/blog/${image.id}`}
                className="text-sm pt-1 hover:underline"
              >
                {image.title}
              </Link>
              <div className="flex gap-5">
                <h2 className="text-xs  text-gray-500">Egan Ardenna</h2>
                <p className="text-xs pb-8 text-gray-300">{image.date}</p>
                <p className="text-yellow-500"></p>
                <p className="text-amber-500"></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const color = [
  "bg-red-500",
  "text-red-500",
  "bg-blue-500",
  "text-blue-500",
  "bg-green-500",
  "text-green-500",
  "text-green-500",
  "bg-yellow-500",
  "text-yellow-500",
  "bg-amber-500",
  "text-amber-500",
  "bg-sky-500",
  "text-sky-500",
  "bg-pink-500",
  "text-pink-500",
  "bg-violet-500",
  "text-violet-500",
  "bg-teal-500",
  "text-teal-500",
  "bg-rose-500",
  "text-rose-500",
  "bg-fuchsia-500",
  "text-fuchsia-500",
];
