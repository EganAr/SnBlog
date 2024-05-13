"use client";

import { Github, HomeIcon, Loader, Loader2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "@/schemas";
import {
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  setPersistence,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/lib/firebase/services";
import { useRouter } from "next/navigation";
import { User } from "firebase/auth";
import { useState } from "react";

export default function Loginform() {
  const [pending, setPending] = useState(true);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setPersistence(auth, browserSessionPersistence).then(() => {
      return createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      ).then((userCredential) => {
        const user: User = userCredential.user; // extract the User object
        updateProfile(user, { displayName: values.name })
          .then(() => {
            setPending(false);
            router.push("/home");
            reset();
          })
          .catch((err) => {
            console.log(err.message);
          });
      });
    });
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col lg:flex-row justify-center items-center">
        <div className="bg-[url('/bg/Teal.jpg')] bg-cover w-[85%] h-[35%] lg:w-[45%] lg:h-[85%] flex flex-col justify-start items-start px-6 lg:px-14">
          <Link href={"/"}>
            <HomeIcon className="w-6 h-6 absolute lg:left-20 top-16 hover:opacity-90 hover:cursor-pointer" />
          </Link>
          <h1 className="text-white font-thin text-xl pt-16 lg:pt-20">
            Designed for Individuals
          </h1>
          <p className="text-gray-300 text-xs font-thin mr-20 md:mr-96 lg:mr-20 pt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            tempora hic modi delectus iste dicta, aliquam{" "}
          </p>
          <div className="flex pt-10">
            <p className="w-5 h-1 rounded bg-gray-300"></p>
            <p className="w-2 h-1 rounded bg-gray-300 ml-1"></p>
            <p className="w-2 h-1 rounded bg-gray-300 ml-1"></p>
          </div>
        </div>
        <div className="bg-gray-200 w-[85%] h-[55%] lg:w-[45%] lg:h-[85%]">
          <h1 className="text-teal-800 font-thin lg:text-2xl lg:pt-6 px-4 lg:px-[62px]">
            Sign Up
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="flex flex-col justify-center items-center"
          >
            <div className="flex flex-col justify-start items-start lg:pt-8">
              <label htmlFor="Email" className="text-sm text-gray-700 ">
                name
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Sneks"
                className="text-gray-700 outline-none lg:mt-2 text-xs px-2 py-1.5 border border-gray-600 rounded-lg bg-gray-200   w-[300px] md:w-[600px] lg:w-[450px]"
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name.message}</p>
              )}
            </div>

            <div className="flex flex-col justify-start items-start  pt-1 lg:pt-4">
              <label htmlFor="Email" className="text-sm text-gray-700 ">
                email adress
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="name@gmail.com"
                className="text-gray-700 outline-none lg:mt-2 text-xs px-2 py-1.5 border border-gray-600 rounded-lg bg-gray-200   w-[300px] md:w-[600px] lg:w-[450px]"
              />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>

            <div className="flex flex-col justify-start items-start  pt-1 lg:pt-4">
              <label htmlFor="Password" className="text-sm text-gray-700">
                password
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="********"
                className="text-gray-700 outline-none mt-1 lg:mt-2 text-xs px-2 py-1.5 border border-gray-600 rounded-lg bg-gray-200   w-[300px] md:w-[600px] lg:w-[450px]"
              />
              {errors.password && (
                <p className="text-red-500 text-xs">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex flex-col justify-start items-start">
            {pending === true ? (
                <button
                  type="submit"
                  className="bg-teal-900 w-[300px] md:w-[600px] lg:w-[450px] text-white py-2 rounded-lg mt-4 lg:mt-6 hover:bg-teal-700 transition-all duration-200 text-sm"
                >
                  create an account
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-teal-900 w-[300px] md:w-[550px] lg:w-[450px] text-white py-2 rounded-lg mt-4 lg:mt-6 flex justify-center items-center"
                >
                  <Loader2Icon className="w-6 h-6 animate-spin" />
                </button>
              )}
              <p className="text-gray-600 text-xs pt-2">
                Don`t have an account?{" "}
                <Link
                  href={"/sign-in"}
                  className="text-teal-800 font-bold underline "
                >
                  Sign-in
                </Link>
              </p>
            </div>

            <div className="w-[300px] md:w-[600px] lg:w-[450px] flex gap-4 justify-between items-center pt-6">
              <div className="w-1/2 h-10 flex justify-center items-center rounded gap-2 border bg-slate-950 hover:bg-teal-700 hover:cursor-pointer transition-all duration-300">
                <Image
                  src={"/google.png"}
                  alt=""
                  width={2000}
                  height={2000}
                  className="w-6 h-6"
                />
              </div>
              <div className="w-1/2 h-10 flex justify-center items-center rounded gap-2 border bg-slate-950 hover:bg-teal-700 hover:cursor-pointer hover:text-white transition-all duration-300">
                <Github className="w-6 h-6" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

{
  /* <div className="flex h-screen justify-between items-center">
  <div className="w-[632px] h-[632px] bg-[url('/bg/lofi-ai.jpg')] bg-cover">
    <div className="flex justify-center mt-[400px]">
      <Accordion type="single" collapsible className="w-[500px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if
            you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
  <div className="bg-white   w-[300px] md:w-[600px] lg:w-[450px] h-[500px] rounded-lg mx-auto">
    <div className="text-slate-950 pt-2 pl-4 flex justify-between ">
      <Link href={"/"} className="hover:opacity-80">
        <HomeIcon />
      </Link>
      <Link
        href={"/forgot-password"}
        className="text-slate-400 text-xs pr-2"
      >
        Forgot Password?
      </Link>
    </div>

    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl text-slate-950">AUTH 🔐</h1>
      <p className="text-slate-400">Welcome Back!</p>
    </div>
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 justify-center items-center pt-2"
      >
        <div className="flex flex-col gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-96">
                <FormLabel className="text-slate-950 font-bold">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="john.doe@example.com"
                    className="text-slate-950"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="w-96">
                <FormLabel className="text-slate-950 font-bold">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="******"
                    className="text-slate-950"
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormError message={error} />
        <FormSuccess message={success} />

        <div className="pt-2">
          <button
            className="w-96 h-10 rounded-md bg-slate-950 text-white hover:bg-amber-400  transition-all duration-300"
            disabled={isPending}
          >
            Login
          </button>
        </div>
        <div className="w-96 flex gap-4 justify-between items-center">
          <div className="w-1/2 h-10 flex justify-center items-center gap-2 border border-slate-950 text-slate-950 hover:bg-slate-950 hover:cursor-pointer transition-all duration-300">
            <Image
              src={"/google.png"}
              alt=""
              width={2000}
              height={2000}
              className="w-6 h-6"
            />
          </div>
          <div className="w-1/2 h-10 flex justify-center items-center gap-2 border border-slate-950 text-slate-950 hover:bg-slate-950 hover:cursor-pointer hover:text-white transition-all duration-300">
            <Github className="w-6 h-6" />
          </div>
        </div>
      </form>
    </Form>
    <p className="text-slate-400 text-sm pt-2 px-[32px]">
      Don't have an account?{" "}
      <Link href={"/register"} className="underline pl-1 text-slate-950">
        Register
      </Link>
    </p>
  </div>
</div> */
}
