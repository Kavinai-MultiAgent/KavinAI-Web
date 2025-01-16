import { Hero } from "@/components/hero";
import { PainPoints } from "@/components/pain-points";
import { SocialProof } from "@/components/social-proof";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { UseCases } from "@/components/use-cases";


export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof/>
      <UseCases />
      <PainPoints />
      <ModeToggle />
    </main>
  );
}
