import retrieveData, {
  retrieveDataByField,
  retrieveDataById,
} from "@/lib/firebase/services";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailBlog = await retrieveDataById("categories", id);
    if (detailBlog) {
      return NextResponse.json({
        status: 200,
        message: "success",
        data: detailBlog,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "not found",
      data: {},
    });
  }

  const data = await retrieveData("categories");
  return NextResponse.json({
    status: 200,
    message: "Success",
    data: data,
  });
}
