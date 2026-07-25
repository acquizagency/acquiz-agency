"use client";

import Hero from "./components/Hero";
import LogoBar from "./components/LogoBar";
import Problem from "./components/Problem";
import Stats from "./components/Stats";
import Services from "./components/Services";
import CtaMid from "./components/CtaMid";
import Process from "./components/Process";
import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <LogoBar />
      <Problem />
      <Stats />
      <Services />
      <CtaMid />
      <Process />
      <Faq />
      <ContactForm />
      <Footer />
    </main>
  );
}
