"use client";

import Lottie from "lottie-react";
import bg from "@/public/Lottie/card-2.json";
import bg1 from "@/public/Lottie/book.json";
import bg2 from "@/public/Lottie/phone.json";
import bg3 from "@/public/Lottie/cat-2.json";
import { motion } from "framer-motion";
import { Github, LucideTwitch, Youtube } from "lucide-react";

export default function LottieHero() {
  return (
    <>
      <div className="w-full flex justify-between items-start mt-20">
        <motion.div
          className="flex flex-col items-start justify-start pl-20"
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h1 className="text-justify text-amber-400 font-extrabold text-5xl w-96 flex flex-col">
            Let`s Make <span>Something</span> <span>Fun Together</span>{" "}
          </h1>
          <div className="w-96 text-sm text-white tracking-wide mt-4 flex flex-col">
            <span>
              Lorem ipsum dolor sit amet consectetur{" "}
              <span className="underline">Indonesia.</span>
            </span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing</span>
            <span>lorem ipsum dolor sit amet</span>
          </div>
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex gap-4 justify-start items-start pt-6"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-slate-800 text-white rounded-md py-2 px-3 "
              onClick={() => {
                window.scrollTo({
                  top: 1260,
                  behavior: "smooth",
                });
              }}
            >
              Contact
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-amber-400 text-black rounded-md shadow-xl py-2 px-3"
            >
              Lorem ipsum
            </motion.button>
          </motion.div>
          <motion.div
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="pt-8 flex gap-8  justify-start items-center"
          >
            <div>
              <Youtube size={36} className="text-red-600 ml-2" />
              <p className="text-red-600 text-xs mt-1">Youtube</p>
            </div>
            <div>
              <LucideTwitch size={30} className="text-purple-600 ml-1" />
              <p className="text-purple-600 text-xs mt-2">Twitch</p>
            </div>
            <div>
              <Github size={30} className="text-white ml-1" />
              <p className="text-white text-xs mt-2">Github</p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <Lottie
            animationData={bg}
            loop={true}
            className="w-96 mx-20 brightness-75"
          />
        </motion.div>
      </div>
    </>
  );
}

export function AboutLottie() {
  return (
    <div className="absolute top-[121vh] left-[6vh]">
      <Lottie animationData={bg1} className="w-[60vh] brightness-75" />
    </div>
  );
}

export function ContactLottie() {
  return (
    <Lottie
      animationData={bg2}
      loop={true}
      className="w-[450px] brightness-75"
    />
  );
}

export function HomeLottie() {
  return (
    <Lottie
      animationData={bg3}
      loop={true}
      className="absolute right-0 top-24 lg:top-28 md:top-20 lg:px-16 w-56 md:w-96 lg:w-[600px] "
    />
  );
}
