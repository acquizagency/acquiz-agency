import type { Metadata } from "next";
import JsonLd from "./components/site/JsonLd";
import { organizationJsonLd } from "./lib/seo";
import Hero from "./components/Hero";
import LogoBar from "./components/LogoBar";
import Problem from "./components/Problem";
import Stats from "./components/Stats";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import CtaMid from "./components/CtaMid";
import Process from "./components/Process";
import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <JsonLd data={organizationJsonLd} />
      <Hero />
      <LogoBar />
      <Problem />
      <Stats />
      <Services />
      <WhyUs />
      <CtaMid />
      <Process />
      <Faq />
      <ContactForm />
      <Footer />
    </main>
  );
}
