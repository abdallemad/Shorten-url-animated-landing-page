"use client";
import ShortenUrlsContainer from "./short-urls-container";
import ShortenUrlForm from "./shorten-url-form";
import { useState } from "react";
import { z } from "zod";

function ShortenForm() {
  const [shortUrls, setShortUrls] = useState<
    {
      url: string;
      shortUrl: string;
    }[]
  >([]);
  return (
    <section className="bg-gray-100 pb-12">
      <div className="container">
        <ShortenUrlForm setShortUrls={setShortUrls}/>
        <ShortenUrlsContainer shortUrls={shortUrls}/>
      </div>
    </section>
  );
}

export default ShortenForm;
