"use client";

import { firestore, storage } from "@/lib/firebase/services";
import Image from "next/image";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AddDataSchema } from "@/schemas";
import { z } from "zod";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";
import { useState } from "react";
import { Loader2, UploadCloud } from "lucide-react";
import { useUser } from "./getUser";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Addform() {
  type AddSchema = z.infer<typeof AddDataSchema>;
  const [file, setFile] = useState("");
  const [pending, setPending] = useState(true);
  const [error, setError] = useState<string | undefined>();

  const user = useUser();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddSchema>({
    resolver: zodResolver(AddDataSchema),
  });

  const handleImage = async (e: any) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, "images/" + file.name);

    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setFile(url);
    } catch (e) {
      console.log("Error uploading image:", e);
    }
  };

  const onSubmit: SubmitHandler<AddSchema> = async (data: FieldValues) => {
    try {
      setPending(false);
      await addDoc(collection(firestore, "Blog"), {
        ...data,
        src: file,
        user: user?.displayName,
        userProfile: user?.photoURL,
        date: new Date().toDateString(),
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    } finally {
      setPending(true);
      reset();
    }
  };

  return (
    <>
      {user == null || false ? (
        <div className="w-screen h-screen pt-24 flex flex-col gap-4 justify-center items-center">
          <h1 className="text-3xl font-bold text-teal-700">Please Sign-in</h1>
          <Link
            href={"/sign-in"}
            className="ml-4 text-sm bg-teal-200 rounded-md text-teal-800 py-1 px-3"
          >
            Sign-in
          </Link>
        </div>
      ) : (
        <form
          className="ml-[35px] md:ml-[90px] lg:ml-[100px] pt-24 grid grid-cols-1 md:grid-cols-2 lggrid-cols-2 lg:gap-10 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div
            className="w-80 h-56 md:w-80 md:h-72 lg:w-[550px] lg:h-[315px] border-dashed border-2 border-teal-700 rounded hover:cursor-pointer"
            onClick={() =>
              (document.querySelector(".ImgInput") as HTMLInputElement)?.click()
            }
          >
            <input
              type="file"
              accept="image/*"
              className="ImgInput"
              onChange={(e) => handleImage(e)}
              required
              hidden
            />
            {file ? (
              <Image
                src={file}
                width={2000}
                height={2000}
                className="w-80 h-[220px] md:w-80 md:h-[284px] lg:w-[550px] lg:h-[311px] rounded object-cover"
                alt="uploaded image"
              />
            ) : (
              <UploadCloud className="w-14 h-14 mx-auto mt-20 md:mt-28 lg:mt-32 text-teal-700" />
            )}
          </div>

          <div className="flex flex-col lg:gap-4">
            <input
              {...register("title")}
              type="text"
              placeholder="Title..."
              className="outline-none border-none h-14 w-80 lg:w-[505px] rounded bg-slate-900 text-base px-2 pb-6 mt-6 md:mt-0 lg:mt-0"
            />
            {errors.title && <p className="text-red-500">Title Required</p>}

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 mt-8 md:mt-14 lg:mt-32 ">
              <div className="flex flex-col">
                <label
                  htmlFor="color"
                  className="text-gray-500 ml-1 text-sm lg:text-base"
                >
                  Select Color
                </label>
                <select
                  {...register("color")}
                  className="outline-none border-none h-8 w-80 lg:w-60 rounded bg-slate-900 px-2 text-sm lg:text-base"
                >
                  <option value="red" className="text-red-500">
                    red
                  </option>
                  <option value="green" className="text-green-500">
                    green
                  </option>
                  <option value="blue" className="text-blue-500">
                    blue
                  </option>
                  <option value="yellow" className="text-yellow-500">
                    yellow
                  </option>
                  <option value="purple" className="text-purple-500">
                    purple
                  </option>
                </select>
                {errors.color && <p>{errors.color.message}</p>}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="categories"
                  className="text-gray-500 ml-1 text-sm lg:text-base"
                >
                  Select Categories
                </label>
                <select
                  {...register("categories")}
                  className="outline-none border-none h-8  w-80 lg:w-60 rounded bg-slate-900 px-2 text-xs lg:text-base"
                >
                  <option value="Sports">Sports</option>
                  <option value="Food">Food</option>
                  <option value="Web">Web Development</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Music">Music</option>
                  <option value="Random">Random</option>
                </select>
                {errors.categories && <p>{errors.categories.message}</p>}
              </div>
            </div>
            <input
              type="date"
              placeholder="date"
              className="outline-none border-none mt-6 lg:mt-2 px-2 text-xs  h-8 w-80 md:w-40 lg:w-40 rounded bg-slate-900"
            />
          </div>

          <div className="flex flex-col mt-6 lg:mt-0">
            <input
              {...register("desc")}
              type="text"
              placeholder="Tell Your Story..."
              className="outline-none border-none text-sm font-thin h-20 pb-12 px-2 w-80 md:w-[676px] lg:w-[1115px] rounded-md bg-slate-900"
            />
            {errors.desc && <p>{errors.desc.message}</p>}
            <div className="w-80 md:w-[676px] lg:w-[1115px] flex justify-center items-center mb-10">
              {error && (
                <p className="text-red-500 text-xs w-full flex justify-center items-center">
                  {error}
                </p>
              )}
              {pending === true ? (
                <button
                  type="submit"
                  className="bg-teal-900 w-80 md:w-[676px] lg:w-[1115px] text-white py-2 rounded-lg mt-4 lg:mt-10 hover:bg-teal-700 transition-all duration-200"
                >
                  Submit
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-teal-900 w-80 md:w-[676px] lg:w-[1115px] text-white py-2 rounded-lg mt-4 lg:mt-10 flex justify-center items-center"
                >
                  <Loader2 className="w-6 h-6 animate-spin" />
                </button>
              )}
            </div>
          </div>
        </form>
      )}
    </>
  );
}
