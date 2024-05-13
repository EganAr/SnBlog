import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Hot } from "../home/page";
import Footer from "../components/Footer";

export default async function Blog({
  searchParams,
}: {
  searchParams: { page: any };
}) {
  let page = parseInt(searchParams.page || 1);
  const pageSize = 4;

  const blogPromise = await getData("http://127.0.0.1:3000/api/blog", 0);
  const categoriesPromise = await getData(
    "http://127.0.0.1:3000/api/categories",
    0
  );

  const [blog, categories] = await Promise.all([
    blogPromise,
    categoriesPromise,
  ]);

  return (
    <>
      <Navbar />
      <Sidebar />
      <h1 className="pt-32 ml-5 md:ml-[85px] lg:ml-[125px] text-lg font-bold">
        All Posts
      </h1>
      <div className="flex">
        <div className="flex flex-col justify-start items-start gap-8 pt-10 ml-5 md:ml-[85px] lg:ml-[125px]">
          {blog.data
            .slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize)
            .map((image: any) => (
              <>
                <div key={image.id} className="flex">
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
              </>
            ))}
          <div className="w-full pr-2 md:pr-0 lg:pr-0 flex justify-between items-center ">
            <Link
              href={`/blog?page=${page - 1}`}
              className="text-teal-500 bg-black px-4 py-1 rounded hover:text-teal-200 transition-all duration-200"
            >
              Previous
            </Link>
            <Link
              href={`/blog?page=${page + 1}`}
              className="text-teal-500 bg-black px-4 py-1 rounded hover:text-teal-200 transition-all duration-200"
            >
              Next
            </Link>
          </div>
        </div>

        <div className="ml-44 hidden lg:flex lg:flex-col gap-16">
          <div>
            <p className="text-xs font-thin text-gray-500">Discover by Topic</p>
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
          <div className="w-72 ">
            <Hot />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export async function getData(URL: string, Time: number) {
  const res = await fetch(URL);

  await new Promise((resolve) => setTimeout(resolve, Time));

  return res.json();
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
