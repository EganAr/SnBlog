import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "email is required" }),
  password: z.string().min(6, { message: "Minimum 6 characters" }),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "email is required" }),
  password: z.string().min(6, { message: "Minimum 6 characters" }),
  name: z.string().min(1, { message: "name is required" }),
});

export const AddDataSchema = z.object({
  title: z.string().min(10, { message: "Minimum 10 characters" }),
  desc: z.string().min(40, { message: "Minimum 40 characters" }),
  color: z.string().min(1, { message: "color is required" }),
  categories: z.string().min(1, { message: "categories is required" }),
});


export const ForgotSchema = z.object({
  email: z.string().email({ message: "email is required" }),
})