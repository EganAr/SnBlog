import { Skeleton } from "@/components/ui/skeleton";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Loading() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="ml-5 md:ml-[85px] lg:ml-[125px] pt-32">
        <Skeleton className="text-xl w-24 h-4"></Skeleton>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 pr-2 md:pr-6 lg:pr-16 pt-10">
          <div>
            <Skeleton className="w-40 md:w-52 lg:w-80 h-32 md:h-40 lg:h-60 object-cover rounded-2xl "></Skeleton>
            <Skeleton className="mt-3 w-12 h-4 text-gray-400 text-base"></Skeleton>
          </div>
          <div>
            <Skeleton className="w-40 md:w-52 lg:w-80 h-32 md:h-40 lg:h-60 object-cover rounded-2xl "></Skeleton>
            <Skeleton className="mt-3 w-12 h-4 text-gray-400 text-base"></Skeleton>
          </div>
          <div>
            <Skeleton className="w-40 md:w-52 lg:w-80 h-32 md:h-40 lg:h-60 object-cover rounded-2xl "></Skeleton>
            <Skeleton className="mt-3 w-12 h-4 text-gray-400 text-base"></Skeleton>
          </div>
          <div>
            <Skeleton className="w-40 md:w-52 lg:w-80 h-32 md:h-40 lg:h-60 object-cover rounded-2xl "></Skeleton>
            <Skeleton className="mt-3 w-12 h-4 text-gray-400 text-base"></Skeleton>
          </div>
          <div>
            <Skeleton className="w-40 md:w-52 lg:w-80 h-32 md:h-40 lg:h-60 object-cover rounded-2xl "></Skeleton>
            <Skeleton className="mt-3 w-12 h-4 text-gray-400 text-base"></Skeleton>
          </div>
          <div>
            <Skeleton className="w-40 md:w-52 lg:w-80 h-32 md:h-40 lg:h-60 object-cover rounded-2xl "></Skeleton>
            <Skeleton className="mt-3 w-12 h-4 text-gray-400 text-base"></Skeleton>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
