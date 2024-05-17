"use client";

import { Github, HomeIcon, Loader, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { useState, useTransition } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase/services";
import { useRouter } from "next/navigation";
import { browserSessionPersistence, setPersistence } from "firebase/auth";

export default function Loginform() {
  const router = useRouter();
  const [pending, setPending] = useState(true);
  const [error, setError] = useState<string | undefined>();
  const [signInWithEmailAndPassword, user, loading, error2] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithEmailAndPassword(values.email, values.password).then(
          (res) => {
            if (res) {
              setPending(false);
              router.push("/home");
            } else {
              setError("Invalid Email or Password");
            }
          }
        );
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col lg:flex-row justify-center items-center">
        <div className="absolute lg:relative bg-[url('/bg/Teal.jpg')] bg-cover w-[95%] h-[70%] md:w-[90%] md:h-[80%] lg:w-[45%] lg:h-[85%] flex flex-col justify-start items-start px-2 lg:px-14 ">
          <Link href={"/"}>
            <HomeIcon className="w-6 h-6 absolute md:left-4 lg:left-4 top-4 hover:opacity-90 hover:cursor-pointer hidden md:block lg:block" />
          </Link>
          <h1 className="text-white font-thin text-xl pt-20 hidden lg:block">
            Designed for Individuals
          </h1>
          <p className="text-gray-300 text-xs font-thin mr-20 md:mr-96 lg:mr-20 pt-6 hidden lg:block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            tempora hic modi delectus iste dicta, aliquam{" "}
          </p>
          <div className="hidden lg:flex pt-10 ">
            <p className="w-5 h-1 rounded bg-gray-300"></p>
            <p className="w-2 h-1 rounded bg-gray-300 ml-1"></p>
            <p className="w-2 h-1 rounded bg-gray-300 ml-1"></p>
          </div>
        </div>
        <div className="bg-gray-200 w-[85%] h-[60%] md:w-[80%] md:h-[65%] lg:w-[45%] lg:h-[85%] z-10">
          <Link href={"/"}>
            <HomeIcon className="w-5 h-5 absolute top-[140px] left-10 z-50 text-black hover:opacity-90 hover:cursor-pointer md:hidden lg:hidden" />
          </Link>
          <Link
            href={"/forgot-password"}
            className="w-full flex justify-end items-end text-black text-xs px-2 pt-1 underline"
          >
            forgot password?
          </Link>
          <h1 className="text-teal-800 flex justify-center items-center font-thin lg:text-2xl pt-4">
            Sign In
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="flex flex-col justify-center  items-center lg:px-0 px-4"
          >
            <div className="flex flex-col justify-start items-start pt-6 md:pt-10 lg:pt-12">
              <label
                htmlFor="Email"
                className="text-xs lg:text-sm text-gray-700 "
              >
                email adress
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="name@gmail.com"
                className="text-gray-700 outline-none mt-2 lg:mt-3 text-xs px-2 py-1.5 border border-gray-600 rounded-lg bg-gray-200 w-[300px] md:w-[550px] lg:w-[450px]"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col justify-start items-start pt-2 lg:pt-4">
              <label
                htmlFor="Password"
                className="text-xs lg:text-sm text-gray-700"
              >
                password
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="********"
                className="text-gray-700 outline-none mt-2 lg:mt-3 text-xs px-2 py-1.5 border border-gray-600 rounded-lg bg-gray-200 w-[300px] md:w-[550px] lg:w-[450px]"
              />
              {errors.password && (
                <p className="text-red-500 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex flex-col justify-start items-start pt-3">
              {error && (
                <p className="text-red-500 text-xs w-full flex justify-center items-center">
                  {error}
                </p>
              )}
              {pending === true ? (
                <button
                  type="submit"
                  className="bg-teal-900 w-[300px] md:w-[550px] lg:w-[450px] text-white py-2 rounded-lg mt-4 lg:mt-10 hover:bg-teal-700 transition-all duration-200"
                >
                  Login
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-teal-900 w-[300px] md:w-[550px] lg:w-[450px] text-white py-2 rounded-lg mt-4 lg:mt-10 flex justify-center items-center"
                >
                  <Loader2 className="w-6 h-6 animate-spin" />
                </button>
              )}

              <p className="text-gray-600 text-xs pt-2 lg:px-4">
                Don`t have an account?{" "}
                <Link
                  href={"/sign-up"}
                  className="text-teal-800 font-bold underline "
                >
                  Sign-up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
