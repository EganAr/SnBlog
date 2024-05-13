import { Skeleton } from "@/components/ui/skeleton";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Loading() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="ml-[130px] pt-32">
        <Skeleton className="text-xl w-24 h-4"></Skeleton>

        <div className="grid grid-cols-3 gap-10 pr-16 pt-10">
          <div>
            <Skeleton className="w-80 h-60 object-cover rounded-2xl "></Skeleton>
            <Skeleton className="mt-3 w-12 h-4 text-gray-400 text-base"></Skeleton>
          </div>
          <div>
            <Skeleton className="w-80 h-60 object-cover rounded-2xl "></Skeleton>
            <Skeleton className="mt-3 w-12 h-4 text-gray-400 text-base"></Skeleton>
          </div>
          <div>
            <Skeleton className="w-80 h-60 object-cover rounded-2xl "></Skeleton>
            <Skeleton className="mt-3 w-12 h-4 text-gray-400 text-base"></Skeleton>
          </div>
          <div>
            <Skeleton className="w-80 h-60 object-cover rounded-2xl "></Skeleton>
            <Skeleton className="mt-3 w-12 h-4 text-gray-400 text-base"></Skeleton>
          </div>
          <div>
            <Skeleton className="w-80 h-60 object-cover rounded-2xl "></Skeleton>
            <Skeleton className="mt-3 w-12 h-4 text-gray-400 text-base"></Skeleton>
          </div>
          <div>
            <Skeleton className="w-80 h-60 object-cover rounded-2xl "></Skeleton>
            <Skeleton className="mt-3 w-12 h-4 text-gray-400 text-base"></Skeleton>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
