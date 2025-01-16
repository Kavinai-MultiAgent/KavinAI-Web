import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";
import { ModeToggle } from "@/components/ui/mode-toggle";


export default function Home() {
  return (
    <main>
      <Hero />
      <SocialProof/>
      <ModeToggle />
    </main>
  );
}
