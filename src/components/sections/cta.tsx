"use client";
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import {useMediaQuery} from 'react-responsive'

function CTA() {
  const isMobile = useMediaQuery({query: "(max-width: 768px)"});
  return (
    <section className="relative py-12 bg-[#3a3053] flex flex-col gap-8 items-center isolate">
      <Image src={isMobile ? "/images/bg-boost-mobile.svg" : "/images/bg-boost-desktop.svg"} alt="cta" fill className="absolute inset-x-0 -z-10 pointer-events-none" objectFit="cover" />
      <h2 className="h2 text-secondary-foreground">
        Boost your links today
      </h2>
      <Button size="lg" className="rounded-full px-8">
        Get Started
      </Button>
    </section>
  )
}

export default CTA