"use client";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "react-responsive";

const STATISTICS = [
  {
    title: "Brand Recognition",
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    icon: "/images/icon-brand-recognition.svg",
  },
  {
    title: "Detailed Records",
    description:
      "Gain insights who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    icon: "/images/icon-detailed-records.svg",
  },
  {
    title: "Fully Customizable",
    description:
      "Improve brand awareness and content discoverability through customizable links. supercharging audience engagement.",
    icon: "/images/icon-fully-customizable.svg",
  },
] as const;

function Statistics() {
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <section className="bg-gray-100 py-24">
      <div className="container">
        <div className="space-y-4 mb-12">
          <h2 className="h2 text-center">Advanced Statistics</h2>
          <p className="description-lg leading-[1.8] text-center max-w-md mx-auto">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 max-md:gap-12">
          {STATISTICS.map((s, i) => {
            let translate = 0;
            if (isDesktop) {
              switch (i) {
                case 0:
                  translate = -50;
                  break;
                case 1:
                  translate = 0;
                  break;
                case 2:
                  translate = 50;
                  break;
              }
            }
            return (
              <li key={s.title} className="relative w-fit h-fit isolate max-md:text-center z-10">
                {i == 1 && isDesktop && (
                  <div className="absolute -inset-x-12 bg-primary h-2 top-1/2 -mt-1/2 z-[-99]" />
                )}
                {i == 1 && !isDesktop && (
                  <div className="absolute -inset-y-12 bg-primary w-2 left-1/2 -ml-1/2 -z-50" />
                )}
                <div
                  className="bg-background px-6 pb-4 rounded-xl relative z-[99]"
                  style={{ transform: `translateY(${translate}px)` }}
                >
                  <figure className="rounded-full bg-secondary p-4 w-fit -translate-y-[50%] max-md:mx-auto">
                    <Image src={s.icon} alt={s.title} width={50} height={50} className="size-10" />
                  </figure>
                  <h3 className="h3 mb-4">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {s.description}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Statistics;
