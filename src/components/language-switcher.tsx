"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next-intl/client";
import { useTransition } from "react";

import Brazil from "@/public/brazil-flag.png";
import USA from "@/public/usa-flag.png";
import Image from "next/image";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      locale === "pt"
        ? router.replace(pathname, { locale: "en" })
        : router.replace(pathname, { locale: "pt" });
    });
    console.log(router, pathname, locale, "teste");
  };

  return (
    <button
      className="fixed bottom-5 right-20 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center opacity-90 hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={handleClick}
    >
      {locale === "en" ? (
        <Image src={Brazil} alt="Brazil Flag" />
      ) : (
        <Image src={USA} alt="USA Flag" />
      )}
    </button>
  );
}
