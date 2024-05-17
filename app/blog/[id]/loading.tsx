import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 md:ml-16 lg:px-12 pt-28">
        <Skeleton className="w-[340px] h-72 md:w-[750px] md:h-[250px] lg:w-[500px] lg:h-80 object-cover" />
        <div className="flex flex-col items-start justify-start">
          <Skeleton className="w-[340px] lg:w-96 h-14 lg:h-20 mt-4 lg:mt-10" />
          <div className="flex gap-6 pt-4 lg:pt-20">
            <Skeleton className="w-8 h-8 object-cover rounded-full mt-2" />
            <p className="text-xs font-light text-slate-600">Author</p>
            <p className="text-xs font-light text-slate-600">Published</p>
          </div>
        </div>
        <Skeleton className="w-[60vw] h-80" />
      </div>
    </>
  );
}
