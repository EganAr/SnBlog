import retrieveData, {
  retrieveDataByField,
  retrieveDataById,
  retrieveDataBySearch,
} from "@/lib/firebase/services";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const categories = searchParams.get("categories");

  if (categories) {
    const detailCat = await retrieveDataByField(
      "Blog",
      "categories",
      categories
    );

    if (detailCat) {
      return NextResponse.json({
        status: 200,
        message: "success",
        data: detailCat,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "not found",
      data: {},
    });
  }

  if (id) {
    const detailBlog = await retrieveDataById("Blog", id);
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

  const data = await retrieveData("Blog");
  return NextResponse.json({
    status: 200,
    message: "Success",
    data: data,
  });
}
