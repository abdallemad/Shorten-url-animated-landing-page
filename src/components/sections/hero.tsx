"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {motion} from 'motion/react'


function Hero() {
  return (
    <section className="container grid grid-cols1 md:grid-cols-2 max-md:gap-12 items-center pb-42 pt-8">
      <motion.div 
      // initial={{ opacity: 0, x: -50 }}
      className="flex flex-col gap-6 items-center md:items-start max-md:text-center hero-cta">
        <h1 className="h1">
          More than just 
          shorter links
        </h1>
        <p className="description-lg max-w-sm">
          Build your brand{"'"}s recognition and get detailed insights on how
          your links are performing
        </p>
        <Button className="rounded-full px-8" size={"lg"}>
          Get Started
        </Button>
      </motion.div>
      <motion.img
        // initial={{ opacity: 0, x: 50 }}
        src={"/images/illustration-working.svg"}
        alt="a person working on a laptop"
        className=" max-md:row-start-1 md:translate-x-[14%] w-[620px] md:scale-120 hero-image"
      />
    </section>
  );
}

export default Hero;
