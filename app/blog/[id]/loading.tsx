import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="grid grid-cols-2 gap-7 px-28 pt-28">
        <Skeleton className="w-[500px] h-80 object-cover" />
        <div className="flex flex-col items-start justify-start">
          <Skeleton className="w-96 h-20 mt-10 ml-2" />
          <div className="flex gap-6 pt-20">
            <Skeleton className="w-8 h-8 object-cover rounded-full mt-2 ml-2" />
            <p className="text-xs font-light text-slate-600">Author</p>
            <p className="text-xs font-light text-slate-600">Published</p>
          </div>
        </div>
        <Skeleton className="w-[60vw] h-80" />
      </div>
    </>
  );
}
