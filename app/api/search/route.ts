import retrieveData, { retrieveDataBySearch } from "@/lib/firebase/services";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("query");

  if (search) {
    const searchBlog = await retrieveDataBySearch("Blog", search);
    if (searchBlog) {
      return NextResponse.json({
        status: 200,
        message: "success",
        data: searchBlog,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "not found",
      data: {},
    });
  }

  const data = await retrieveData("Blog");
  return NextResponse.json({
    status: 200,
    message: "Success",
    data: data,
  });
}
