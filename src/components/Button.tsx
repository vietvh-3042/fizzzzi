import type { LinkField } from "@prismicio/client";

import { PrismicNextLink } from "@prismicio/next";

import { cn } from "@/utils/cn";

interface ButtonProps {
  buttonLink: LinkField;
  buttonText: string | null;
  className?: string;
}

export default function Button({ buttonLink, buttonText, className }: ButtonProps) {
  return (
    <PrismicNextLink
      className={cn(
        "rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold tracking-wide text-white uppercase transition-colors duration-150 hover:bg-orange-700 md:text-2xl",
        className,
      )}
      field={buttonLink}
    >
      {buttonText}
    </PrismicNextLink>
  );
}
