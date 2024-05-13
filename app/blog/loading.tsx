import { Skeleton } from "@/components/ui/skeleton";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Loading() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="pt-36">
        <Skeleton className="ml-[150px] w-16 h-4" />
        <div className="flex flex-col">
          <div className="flex flex-col gap-8 pt-10 ml-[150px]">
            <div className="flex">
              <Skeleton className="w-[300px] h-60 object-cover" />
              <div className="flex flex-col pl-10 pt-4">
                <div className="flex gap-4 items-center">
                  <Skeleton className="w-16 h-4" />
                  <Skeleton className="w-8 h-4" />
                </div>
                <Skeleton className="w-72 h-20 mt-6" />
                <Skeleton className="w-72 h-10 mt-6" />
                <Skeleton className="w-16 h-4 mt-6" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 pt-10 ml-[150px]">
            <div className="flex">
              <Skeleton className="w-[300px] h-60 object-cover" />
              <div className="flex flex-col pl-10 pt-4">
                <div className="flex gap-4 items-center">
                  <Skeleton className="w-16 h-4" />
                  <Skeleton className="w-8 h-4" />
                </div>
                <Skeleton className="w-72 h-20 mt-6" />
                <Skeleton className="w-72 h-10 mt-6" />
                <Skeleton className="w-16 h-4 mt-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
