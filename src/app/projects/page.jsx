/* eslint-disable @next/next/no-img-element */

import SectionTemplate from "../section";
import { projects, otherProjects } from "@/data";
import { ProjectItem, GalleryItem } from "@/components/ui";

export default function Projects() {
  return (
    <SectionTemplate titleText={"Some of my Relevant Activities and Projects"}>
      <>
        {projects.map((item) => (
          <ProjectItem key={item.id} project={item} />
        ))}
      </>

      <div className="mb-1">

        <GalleryItem
          gTitle={"Others (Websites, Apps, Tests, etc)"}
          gImgs={otherProjects}
        />

      </div>
    </SectionTemplate>
  );
}
