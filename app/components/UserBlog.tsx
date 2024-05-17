"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import DeleteButton from "./DeleteButton";

export default function UserBlog({ username }: any) {
  const [title, setTitle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/user?query=` + username
        );
        const blog = await res.json();

        setTitle(
          blog.data.map((blog: any) => (
            <>
              <div className="relative flex flex-col" key={blog.id}>
                <div className="w-[350px] md:w-[650px] lg:w-[700px] h-28 border border-gray-400 rounded flex justify-start items-center gap-4 px-4">
                  <Image
                    src={blog.src}
                    alt=""
                    width={1000}
                    height={1000}
                    className="min-h-16 min-w-20 w-20 h-16 object-cover"
                  />
                  <div>
                    <Link
                      className="line-clamp-2 text-sm hover:underline w-48 md:w-[450px] lg:w-[480px]"
                      href={`/blog/${blog.id}`}
                    >
                      {blog.title}
                    </Link>
                    <p className="text-xs text-gray-500 line-clamp-2 w-48 md:w-[450px] lg:w-[500px]">
                      {blog.desc}
                    </p>
                  </div>
                  <div className="absolute top-2 right-4">
                    <DeleteButton title={blog.title} id={blog.id} />
                  </div>
                </div>
              </div>
            </>
          ))
        );
        setLoading(false);
      } catch {
        console.log("error");
      }
    };

    fetchData();
  }, [username]);

  if (loading === true) {
    return <p>Loading..</p>;
  }
  if (!title) {
    return <p>data Not Found</p>;
  }

  return (
    <div className="flex flex-col justify-start items-start gap-4 mt-4">
      {title}
    </div>
  );
}
