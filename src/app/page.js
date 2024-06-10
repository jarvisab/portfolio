import About from "@/components/About";
import HeroBanner from "@/components/HeroBanner";
import Timelines from "@/components/Timelines";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <section className="home">
      <HeroBanner />
      <About />
      <Skills />
      <Timelines />
    </section>
  );
}
