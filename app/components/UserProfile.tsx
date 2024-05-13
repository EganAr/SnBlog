"use client";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useUser } from "./getUser";
import { storage, upload } from "@/lib/firebase/services";
import { useState } from "react";
import Image from "next/image";
import { PencilIcon, User2 } from "lucide-react";
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

export default function MainImage() {
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const user = useUser();

  const handleImage = async (e: any) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, "images/" + file.name);

    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setImage(url);
      if (file) {
        setFile(file);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleClick = async () => {
    upload(file, user);
    await new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
      window.location.reload();
    });
  };
  return (
    <div
      className="w-72 h-72  border-dashed border-2 border-teal-700 rounded-full hover:cursor-pointer"
      onClick={() =>
        (document.querySelector(".ImgInput") as HTMLInputElement)?.click()
      }
    >
      <input
        type="file"
        accept="image/*"
        className="ImgInput"
        id="ImgInput"
        onChange={(e) => handleImage(e)}
        hidden
      />
      {file ? (
        <>
          <Image
            src={image}
            width={2000}
            height={2000}
            className="w-72 h-72 rounded-full object-cover"
            alt="uploaded image"
          />
        </>
      ) : (
        <>
          <User2 className="w-14 h-14 mx-auto mt-28 text-teal-700" />
          <div className="flex flex-col justify-center items-center">
            <button
              onClick={handleClick}
              className="bg-teal-700 px-2 py-0.5 rounded mt-32 text-sm hover:bg-teal-900 transition-all duration-100 ease-linear"
            >
              Upload
            </button>
          </div>
          <p>{user?.displayName}</p>
        </>
      )}
    </div>
  );
}

export function UserModal() {
  const [file, setFile] = useState("");
  const [image, setImage] = useState("");
  const user = useUser();

  const handleImage = async (e: any) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, "images/" + file.name);

    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setImage(url);
      if (file) {
        setFile(file);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleClick = async () => {
    upload(file, user);
    await new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
      window.location.reload();
    });
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="rounded-full w-12 h-8">
          <PencilIcon className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-slate-950">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            {"Make changes to your profile here. Click save when you're done."}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <p className="text-gray-700 ">{user?.displayName}</p>
          </div>
        </div>
        <div className="flex justify-between items-center px-10">
          <Image
            src={user?.photoURL || ""}
            alt=""
            width={2000}
            height={2000}
            className="w-20 h-20 rounded-full object-cover"
          />
          <p>{"---->"}</p>
          <div
            className="w-20 h-20  border-dashed border-2 border-teal-700 rounded-full hover:cursor-pointer"
            onClick={() =>
              (
                document.querySelector(".UserInput") as HTMLInputElement
              )?.click()
            }
          >
            <input
              type="file"
              accept="image/*"
              className="UserInput"
              id="UserInput"
              onChange={(e) => handleImage(e)}
              hidden
            />
            {file ? (
              <>
                <Image
                  src={image}
                  width={2000}
                  height={2000}
                  className="w-20 h-20 rounded-full object-cover"
                  alt="uploaded image"
                />
              </>
            ) : (
              <User2 className="w-6 h-6 mt-6 mx-auto text-teal-700" />
            )}
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleClick}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function ButtonUser() {
  const [file, setFile] = useState("");
  const user = useUser();

  const handleClick = async () => {
    upload(file, user);
    await new Promise((resolve) => setTimeout(resolve, 2000)).then(() => {
      window.location.reload();
    });
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="bg-teal-700 px-2 py-0.5 rounded text-sm ml-[111px] mt-4 hover:bg-teal-900 transition-all duration-100 ease-linear"
      >
        Upload
      </button>
      <p>{user?.displayName}</p>
    </>
  );
}
