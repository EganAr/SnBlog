import Image from "next/image";
import { getData } from "../blog/page";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Link from "next/link";

export default async function CategoryPage() {
  const category = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`, 200);

  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="ml-5 md:ml-[85px] lg:ml-[125px] pt-32">
        <h1 className="text-xl">Categories</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-10 pr-2 md:pr-6 lg:pr-16 pt-10">
          {category.data.map((cat: any) => (
            <div key={cat.id} className="">
              <Link href={`/category/${cat.title}`}>
                <Image
                  src={cat.src}
                  alt=""
                  width={2000}
                  height={2000}
                  className="w-80 h-32 md:h-40 lg:h-60 object-cover rounded-2xl "
                />
              </Link>
              <h1 className="pt-3 text-gray-400 text-base">{cat.title}</h1>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
