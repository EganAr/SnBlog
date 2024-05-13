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
          <Skeleton className="w-[90vw] h-[60vh] ml-[92px] my-20" />
          <div className="w-full flex flex-col justify-center items-center pl-[44.5px]">
            <Skeleton className="w-64 h-8"></Skeleton>
            <div className=" w-[76vw] gap-8 flex justify-start items-start pt-4">
              <Skeleton className="bg-sky-500 flex justify-center items-center font-thin rounded-lg w-36 h-12"></Skeleton>
              <Skeleton className="bg-slate-100 flex justify-center items-center font-thin rounded-lg w-36 h-12"></Skeleton>
              <Skeleton className="bg-gray-600 flex justify-center items-center font-thin rounded-lg w-36 h-12"></Skeleton>
              <Skeleton className="bg-green-200 flex justify-center items-center font-thin rounded-lg w-36 h-12"></Skeleton>
              <Skeleton className="bg-blue-300 flex justify-center items-center font-thin rounded-lg w-36 h-12"></Skeleton>
              <Skeleton className="bg-rose-200 flex justify-center items-center font-thin rounded-lg w-36 h-12"></Skeleton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
