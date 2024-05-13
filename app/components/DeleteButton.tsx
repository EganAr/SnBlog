"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import Image from "next/image";
import { useUser } from "./getUser";
import { deleteData } from "@/lib/firebase/services";
import Link from "next/link";

export default function DeleteButton({ title, id }: any ) {
  const user = useUser();
  const handleClick = () => {
    try {
        deleteData(id).then(() => window.location.reload());
    } catch (error) {
        console.log(error);
        
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="rounded-full w-10 h-8">
          <X className="w-7 h-7 min-w-6 min-h-6 text-red-500 font-thin" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-slate-950">
        <DialogHeader>
          <DialogTitle className="text-red-500">Delete Blog</DialogTitle>
          <DialogDescription className="text-gray-400">
            Are you sure you want to delete your blog?
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-2 py-2">
          <div className="flex items-center justify-start gap-4">
            <Label htmlFor="username" className="text-left">
              Title
            </Label>
            <p className="text-gray-600 text-xs line-clamp-2 w-56">{title}</p>
          </div>
          <div className="flex items-center justify-start gap-4 mt-2">
            <Label htmlFor="username" className="text-left">
              Author
            </Label>
            {user && user.photoURL ? (
              <Image
                src={user.photoURL}
                className="w-8 h-8 rounded-full object-cover"
                alt=""
                width={2000}
                height={2000}
              />
            ) : (
              <p className="text-gray-700 text-xs line-clamp-2 w-56">
                {user?.displayName}
              </p>
            )}
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleClick} className="text-red-500">
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
