
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Dispatch, SetStateAction, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useInView } from "motion/react";

const schema = z.object({
  url: z.string().url(),
});
const requestSchema = z.object({
  result_url: z.string(),
});

export function useUrlShortFrom(
  setShortUrls: Dispatch<
    SetStateAction<
      {
        url: string;
        shortUrl: string;
      }[]
    >
  >
) {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      url: "",
    },
  });
  const isDesktop = useMediaQuery({query: "(min-width: 768px)"});
  const { mutate, isPending } = useMutation({
    mutationFn: async (data: z.infer<typeof schema>) => {
      const response = await axios.post("/api/url", data);
      const result = requestSchema.parse(response.data);
      return result;
    },
    onSuccess: (data) => {
      const url = form.getValues("url");
      const shortUrl = data.result_url;
      setShortUrls((prev) => [...prev, { url, shortUrl }]);
      form.reset();
    },
  });
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(formRef, {
    once: true,
    amount: 1,
  });
  const onSubmit = (data: z.infer<typeof schema>) => mutate(data);

  return {
    form,
    onSubmit,
    isPending,
    isDesktop,
    formRef, 
    isInView
  };
}
