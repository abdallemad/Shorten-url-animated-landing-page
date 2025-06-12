import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AnimatedList } from "@/components/magicui/animated-list";

function ShortenUrlsContainer({
  shortUrls,
}: {
  shortUrls: { url: string; shortUrl: string }[];
}) {
  return (
    <AnimatedList>
      {shortUrls.map((url, index) => (
        <ShortUrlItem key={index} url={url.url} shortUrl={url.shortUrl} />
      ))}
    </AnimatedList>
  );
}
function ShortUrlItem({ url, shortUrl }: { url: string; shortUrl: string }) {
  const [isCopied, setIsCopied] = useState(false);
  return (
    <li className="flex flex-wrap max-md:flex-col md:items-center gap-2 p-4 bg-background rounded-xl justify-between relative isolate overflow-hidden">
      <p className="max-w-[48ch] w-[90%] text-ellipsis text-nowrap overflow-hidden max-md:border-b max-md:pb-3">{url}</p>
      <div className="flex max-md:flex-col md:items-center gap-4 max-md:w-full">
        <p className="text-primary">{shortUrl}</p>
        <Button
          className="px-6 h-11 text-base max-md:w-full"
          variant={isCopied ? "secondary" : "default"}
          onClick={() => {
            navigator.clipboard.writeText(shortUrl);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 4000);
          }}
        >
          {isCopied ? "Copied!" : "Copy"}
        </Button>
      </div>
    </li>
  );
}

export default ShortenUrlsContainer;
