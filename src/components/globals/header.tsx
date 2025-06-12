"use client";
import { motion } from 'motion/react'
import React from "react";
import Image from "next/image";
import Menu from "./menu";

function Header() {
  return (
    <motion.header
      // initial={{ opacity: 0, y: -50 }}
      className="container flex items-center justify-between gap-6 header">
      <Image
        src="/images/logo.svg"
        alt="Shortly logo"
        width={120}
        height={120}
      />
      <Menu orientation="desktop" />
      <Menu orientation="mobile" />
    </motion.header>
  );
}

export default Header;
