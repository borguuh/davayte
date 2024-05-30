import { faqs, feats, steps } from "@/source/__env";
import FAQ from "@/source/components/home/FAQ";
import Features from "@/source/components/home/Features";
import Hero from "@/source/components/home/Hero";
import HowItWorks from "@/source/components/home/HowItWorks";
import Subscribe from "@/source/components/home/Subscribe";

export default function Home() {
  return (
    <main className="px-8 sm:px-16 lg:px-28 pb-10 flex-1 w-full">
      <Hero />
      <Features feats={feats} />
      <HowItWorks steps={steps} />
      <Subscribe />
      <FAQ faqs={faqs} />
    </main>
  );
}
