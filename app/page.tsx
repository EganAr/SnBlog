import Link from "next/link";
import { HomeLottie } from "./components/LottieHero";
import Image from "next/image";
import InfiniteSlider from "./components/InfiniteSlider";

export default function Home() {
  return (
    <div className="max-w-screen max-h-screen">
      <div className="flex flex-col md:flex-col lg:flex-row justify-start items-start pt-10 ">
        <div>
          <div className="w-screen px-4 lg:px-12 flex flex-row justify-between items-center lg:items-start">
            <h1 className=" text-teal-700 font-bold text-xl">📗SnBlog</h1>
            <h2 className="text-xl font-mono tracking-tight">Blog App</h2>
          </div>

          <div className="flex flex-row justify-between items-start text-3xl md:text-4xl lg:text-5xl px-4 pt-20 md:pt-20 lg:pl-12 lg:pt-32 w-screen ">
            <div className="flex flex-col items-start justify-start gap-2">
              <h1 className="text-teal-700 font-thin">Unraveling the </h1>
              <h1 className="text-teal-700 font-thin">Digital Realm:</h1>
              <h1 className="text-teal-700 font-thin">Guiding Your Journey.</h1>
              <div className="flex items-center gap-14 pt-2 lg:pt-4 w-[450px] text-sm">
                <Link
                  href={"/sign-in"}
                  className="bg-teal-700 px-4 py-1.5 rounded-lg text-black hover:bg-white transition-all duration-300"
                >
                  SIGN IN
                </Link>
                <Link href={"/home"} className="hover:opacity-80">
                  {"View Now --->"}
                </Link>
              </div>
            </div>
            <HomeLottie />
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 mx-auto w-full flex flex-col items-center justify-center">
        <h1 className="font-bold">Made With</h1>
        <div className="flex gap-8 items-center pt-4">
          <Image
            src={"/svg/tailwind.png"}
            alt=""
            width={400}
            height={400}
            className="w-8 h-8"
          />
          <Image
            src={"/svg/typescript.png"}
            alt=""
            width={400}
            height={400}
            className="w-8 h-8"
          />
          <Image
            src={"/svg/next-js.svg"}
            alt=""
            width={400}
            height={400}
            className="w-8 h-8 text-white"
          />
          <Image
            src={"/svg/firebase-1.svg"}
            alt=""
            width={400}
            height={400}
            className="w-8 h-8"
          />
        </div>
      </div>
    </div>
  );
}
