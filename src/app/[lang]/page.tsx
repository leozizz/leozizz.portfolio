import Image from "next/image";
import { getDictionary } from "./dictionaries";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Technologies from "../components/Tecnologies";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import SocialMediaSidebar from "../components/SocialMediaSidebar";
import Footer from "../components/Footer";

export default async function Home({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header links={dictionary.headerLinks} />

      <SocialMediaSidebar />

      <Hero description={dictionary.description} />

      <About />

      <Experience />

      <Technologies />

      <Projects />

      <Contact />

      <Footer />
    </main>
  );
}
