"use client";

import { useRef } from "react";
import { AboutLottie } from "./LottieHero";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { GithubIcon } from "lucide-react";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      className="pt-24"
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      transition={{ duration: 2 }}
    >
      <div className="mx-[500px] w-[600px] h-[360px]  rounded-xl shadow-amber-600 shadow-2xl ">
        <div className="flex flex-col gap-4 justify-center items-start px-10 py-10">
          <h1 className="text-xl text-amber-400 font-bold">About Me</h1>
          <p className="text-2xl font-extrabold tracking-wide text-white w-96 text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ex
            vel totam dolores
          </p>
          <p className="text-xs tracking-tight text-white text-justify w-96">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
            dolore ipsa. Quo culpa, tempore Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Magnam, modi obcaecati. Iste labore
            repellat, ipsa eaque error libero autem quasi, neque nisi at a amet!
          </p>
          <div className="flex gap-16">
            <h1 className="text-amber-400 font-bold text-xl">
              10 K+
              <p className="text-xs text-white pt-2">Projects</p>
            </h1>
            <h1 className="text-amber-400 font-bold text-xl">
              234 K+
              <p className="text-xs text-white pt-2">People reached</p>
            </h1>
            <h1 className="text-amber-400 font-bold text-xl">
              1 K+
              <p className="text-xs text-white pt-2">Services</p>
            </h1>
          </div>
        </div>
        <AboutLottie />
      </div>
    </motion.div>
  );
}
