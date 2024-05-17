import { Skeleton } from "@/components/ui/skeleton";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function Loading() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="pt-36">
        <Skeleton className="ml-5 md:ml-[85px] lg:ml-[125px] w-16 h-4" />
        <div className="flex flex-col">
          <div className="flex flex-col justify-start items-start gap-8 pt-10 ml-5 md:ml-[85px] lg:ml-[125px]">
            <div className="flex">
              <Skeleton className="min-w-40 min-h-40 w-40 h-40 md:w-[250px] md:h-[200px] lg:w-[300px] lg:h-60 object-cover" />
              <div className="flex flex-col pl-4 lg:pl-10">
                <div className="flex gap-4 items-center">
                  <Skeleton className="w-16 h-4" />
                  <Skeleton className="w-8 h-4" />
                </div>
                <Skeleton className="w-72 h-12 lg:h-20 mt-2 lg:mt-6" />
                <Skeleton className="w-72 h-6 mt-6" />
                <Skeleton className="w-16 h-4 mt-6" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 pt-10 ml-5 md:ml-[85px] lg:ml-[125px]">
            <div className="flex">
              <Skeleton className="min-w-40 min-h-40 w-40 h-40 md:w-[250px] md:h-[200px] lg:w-[300px] lg:h-60 object-cover" />
              <div className="flex flex-col pl-4 lg:pl-10">
                <div className="flex gap-4 items-center">
                  <Skeleton className="w-16 h-4" />
                  <Skeleton className="w-8 h-4" />
                </div>
                <Skeleton className="w-72 h-20 mt-6" />
                <Skeleton className="w-16 h-4 mt-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
