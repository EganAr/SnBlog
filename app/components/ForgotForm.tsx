"use client";

import { auth } from "@/lib/firebase/services";
import { ForgotSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

export default function ForgotForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof ForgotSchema>>({
    resolver: zodResolver(ForgotSchema),
  });
  const OnSubmit = (values: z.infer<typeof ForgotSchema>) => {
    sendPasswordResetEmail(auth, values.email).then((res) => {
      router.push("/login");
    });
  };
  return (
    <div className="bg-gray-200 rounded-xl w-96 h-96">
      <h1 className="text-teal-700 text-xl mx-10 pt-10">Forgot Password</h1>
      <form
        onSubmit={handleSubmit(OnSubmit)}
        className="flex flex-col justify-center items-start  pt-20"
      >
        <label htmlFor="email" className="text-gray-700 mx-10 pb-2">
          email
        </label>
        {errors.email && (
          <p className="text-xs text-red-500 mx-10">{errors.email.message}</p>
        )}
        <input
          {...register("email")}
          type="email"
          placeholder="john.doe@example.com"
          className="mx-10 w-80 border border-gray-500 outline-none rounded-lg py-1 px-2 text-black"
        />
        <div className="w-full flex justify-end items-end pt-16">
          <button
            className="bg-teal-900 w-32 text-white py-2 rounded-lg mt-10 mx-10 hover:bg-teal-700 transition-all duration-200"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
