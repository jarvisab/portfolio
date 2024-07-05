/* eslint-disable @next/next/no-img-element */

import { projects, otherProjects } from "@/data";
import { TitleCard, ImagesBrowser, DescriptionList } from "@/components/ui";

export default function Projects() {
  return (
    <section className="section-boilerplate projects">
      <h3 className="page-title">Some of my Relevant Activities and Projects</h3>

      <>

        {projects.map((item) => (

          <div id={'project-'+item.id} key={item.id}>

            <TitleCard
              title={item.title}
              isUsingLink={true}
              livelink={item.liveLink}
              gitlink={item.gitHub}
            />

            <ImagesBrowser
              imagesList={item.img}
              imgsTitle={item.title}
            />

            <DescriptionList
              description={item.desc}
            />
          </div>
          
        ))}

      </>

      <div className="mb-1">

        <TitleCard
          title={"Others (Websites, Apps, Tests, etc)"}
        />

        <ImagesBrowser
          imagesList={otherProjects}
          imgsTitle={'Others'}
        />

      </div>
    </section>
  );
}