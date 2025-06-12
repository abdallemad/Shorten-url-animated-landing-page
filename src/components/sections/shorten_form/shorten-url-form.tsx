"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUrlShortFrom } from "@/hooks/use-url-short-form";
import { Loader2 } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { motion } from 'motion/react'

function ShortenUrlForm({
  setShortUrls,
}: {
  setShortUrls: Dispatch<
    SetStateAction<
      {
        url: string;
        shortUrl: string;
      }[]
    >
  >;
}) {
  const { form, onSubmit, isPending, isDesktop, formRef,isInView } =
    useUrlShortFrom(setShortUrls);
  return (
    <Form {...form}>
      <motion.form
        // ref={formRef}
        // initial={{ opacity: 0, y: 150 }}
        // animate={isInView ? { opacity: 1, y: 0 , transition: { duration: 0.5 } } : {}}
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex max-md:flex-col items-center gap-2 p-8 md:p-12 bg-[#3a3053] rounded-xl  relative isolate overflow-hidden -translate-y-[40%]"
      >
        <Image
          src={
            isDesktop
              ? "/images/bg-shorten-desktop.svg"
              : "/images/bg-shorten-mobile.svg"
          }
          alt="shorten url"
          fill
          className="absolute inset-x-0 -z-10 pointer-events-none"
          objectFit="cover"
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem className="grow max-md:w-full">
              <FormControl>
                <Input
                  placeholder="https://example.com"
                  {...field}
                  className="grow"
                  disabled={isPending}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          size="lg"
          type="submit"
          className="max-md:w-full"
          disabled={isPending}
        >
          {isPending && <Loader2 className="animate-spin" />}
          {isPending ? "Shortening..." : "Shorten !"}
        </Button>
      </motion.form>
    </Form>
  );
}

export default ShortenUrlForm;
