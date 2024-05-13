"use server";

import { AddDataSchema, } from "@/schemas";
import * as z from "zod";

export const AddData = async (values: z.infer<typeof AddDataSchema>) => {
  const validateFields = AddDataSchema.safeParse(values);

  if(!validateFields.success) {
    return {error: "Invalid Data"}
  }

  return {success: "Data Added"}
};