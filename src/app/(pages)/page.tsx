import { FAQ } from "@/components/faq";
import { Hero } from "@/components/hero";
import { PainPoints } from "@/components/pain-points";
import { Pricing } from "@/components/pricing";
import { SocialProof } from "@/components/social-proof";
import { Testimonial } from "@/components/testimonial";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { UseCases } from "@/components/use-cases";
import { WhyUs } from "@/components/why-us";


export default function Home() {
  return (
    <main className="dark:bg-gray-900">
      <Hero />
      <SocialProof/>
      <UseCases />
      <PainPoints />
      <WhyUs />
      <Pricing />
      <Testimonial />
      <FAQ />
      <ModeToggle />
    </main>
  );
}
