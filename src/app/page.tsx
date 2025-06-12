"use client";
import Header from "@/components/globals/header";
import Footer from "@/components/globals/footer";
import Hero from "@/components/sections/hero";
import ShortenForm from "@/components/sections/shorten_form";
import Statistics from "@/components/sections/statistics";
import CTA from "@/components/sections/cta";
import { useAnimate } from 'motion/react'
import { useEffect, useCallback } from 'react';

export default function Home() {
  // Animate the page on load
  const [scope, animate] = useAnimate();

  const animatePage = useCallback(async () => {
    await animate('header.header', { opacity: 1, y: 0 }, { duration: 0.5 });
    await Promise.all([
      animate('.hero-cta', { opacity: 1, x: 0 }, { duration: 0.5 }),
      animate('.hero-image', { opacity: 1, x: 0 }, { duration: 0.5 }),
    ])
  }, [animate]);
  useEffect(() => {

    animatePage();
  }, [animate, scope, animatePage]);
  return (
    <div ref={scope}>
      <Header />
      <main>
        <Hero />
        <ShortenForm />
        <Statistics />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
