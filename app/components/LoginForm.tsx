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
          <h1 className="text-white font-thin text-xl pt-20 hidden md:hidden lg:block">
            Designed for Individuals
          </h1>
          <p className="text-gray-300 text-xs font-thin mr-20 md:mr-96 lg:mr-20 pt-6 hidden md:hidden lg:block">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            tempora hic modi delectus iste dicta, aliquam{" "}
          </p>
          <div className="hidden md:hidden lg:flex pt-10 ">
            <p className="w-5 h-1 rounded bg-gray-300"></p>
            <p className="w-2 h-1 rounded bg-gray-300 ml-1"></p>
            <p className="w-2 h-1 rounded bg-gray-300 ml-1"></p>
          </div>
        </div>
        <div className="bg-gray-200 w-[85%] h-[60%] md:w-[75%] md:h-[60%] lg:w-[45%] lg:h-[85%] z-10">
          <Link href={"/"}>
            <HomeIcon className="w-5 h-5 absolute top-[135px] left-8 z-50 text-black hover:opacity-90 hover:cursor-pointer md:hidden lg:hidden" />
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
            <div className="flex flex-col justify-start items-start pt-4 lg:pt-10">
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
                className="text-gray-700 outline-none mt-2 lg:mt-3 text-xs px-2 py-1.5 border border-gray-600 rounded-lg bg-gray-200 w-[300px] sm:64 md:w-[550px] lg:w-[450px]"
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
                className="text-gray-700 outline-none mt-2 lg:mt-3 text-xs px-2 py-1.5 border border-gray-600 rounded-lg bg-gray-200 w-[300px] sm:64 md:w-[550px] lg:w-[450px]"
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

            <div className="w-[300px] md:w-[550px] lg:w-[450px] flex flex-row lg:flex-row gap-4 justify-between items-center pt-4 lg:pt-10">
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
    <div className="flex justify-center mt-[550px]">
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
  <div className="bg-white w-[450px] h-[500px] rounded-lg mx-auto">
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
