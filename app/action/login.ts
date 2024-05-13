"use server";

import { LoginSchema } from "@/schemas";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values);

  if(!validateFields.success) {
    return {error: "Invalid Email or Password"}
  }

  return {success: "email sent!"}
};
