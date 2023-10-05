import Header from "@/src/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/src/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/src/components/footer";
import ThemeSwitch from "@/src/components/theme-switch";
import ThemeContextProvider from "@/src/context/theme-context";

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import LanguageSwitcher from "@/src/components/language-switcher";

// export function generateStaticParams() {
//   return [{ locale: "en" }, { locale: "pt" }];
// }

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leonardo | Personal Portfolio",
  description: "Leonardo is a intern in frontend web development",
};

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-red-200 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w[32.25rem] rounded-full blur-[15rem] sm:w-[68.75rem] dark:bg-red-400/30 animate-blob animation-delay-2000"></div>

        <div className="bg-blue-200 absolute top-[10rem] -z-10 left-[-35rem] h-[31.25rem] w[50rem] rounded-full blur-[15rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-blue-400/30 animate-blob animation-delay-4000"></div>

        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />
              <Toaster position="top-right" reverseOrder={false} />
              <ThemeSwitch />
              <LanguageSwitcher />
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
