import { Skeleton } from "@/components/ui/skeleton";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Loading() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="">
        <div className="flex flex-col">
          <Skeleton className="w-[95vw] md:w-[85vw] lg:w-[90vw] h-[50vh] md:h-[60vh] lg:h-[60vh] ml-2 md:ml-[90px] lg:ml-[95px] my-20 rounded-xl" />
          <div className="w-full flex flex-col justify-center items-center">
            <Skeleton className="w-64 h-8 md:w-56 md:ml-14"></Skeleton>
            <div className=" w-[90vw] md:w-[82vw] lg:w-[82vw] gap-4 md:gap-4 lg:gap-12 grid grid-cols-3 md:grid-grid-cols-3 lg:grid-cols-6 pt-4 md:ml-[100px] lg:ml-20 text-black text-xs">
              <Skeleton className="bg-sky-500 flex justify-center items-center font-thin rounded-lg w-28 md:w-44 lg:w-36 h-12"></Skeleton>
              <Skeleton className="bg-slate-100 flex justify-center items-center font-thin rounded-lg w-28 md:w-44 lg:w-36 h-12"></Skeleton>
              <Skeleton className="bg-gray-600 flex justify-center items-center font-thin rounded-lg w-28 md:w-44 lg:w-36 h-12"></Skeleton>
              <Skeleton className="bg-green-200 flex justify-center items-center font-thin rounded-lg w-28 md:w-44 lg:w-36 h-12"></Skeleton>
              <Skeleton className="bg-blue-300 flex justify-center items-center font-thin rounded-lg w-28 md:w-44 lg:w-36 h-12"></Skeleton>
              <Skeleton className="bg-rose-200 flex justify-center items-center font-thin rounded-lg w-28 md:w-44 lg:w-36 h-12"></Skeleton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
