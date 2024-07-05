import {
  AboutMe,
  Skills,
  Timelines,
  Gallery
} from "@/components/ui";

export default function About() {
  return (
    <section className="section-boilerplate">

      <h3 className="page-title">Get to Know Me!</h3>

      <div className="h-64 card-boilerplate">
        <img
          src="me.webp"
          alt="Picture of me, obviously."
          className="w-full h-full object-cover rounded-sm"
        />
      </div>

      <AboutMe />

      <Timelines />

      <Skills />

      <Gallery />

    </section>
  );
}
