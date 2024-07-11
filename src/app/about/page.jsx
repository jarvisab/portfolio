import SectionTemplate from "../section";
import { AboutMe, Skills, Timelines, Gallery } from "@/components/ui";

export default function About() {
  return (
    <SectionTemplate titleText={"Get to Know me!"}>
      <div className="h-64 card-boilerplate">
        <img
          src="me.webp"
          alt="Picture of me, obviously."
          className="grayscale w-full h-full object-cover rounded-sm"
        />
      </div>

      <AboutMe />

      <Timelines />

      <Skills />

      <Gallery />
    </SectionTemplate>
  );
}
