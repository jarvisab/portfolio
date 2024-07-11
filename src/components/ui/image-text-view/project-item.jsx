import { TitleCard, ImagesBrowser, DescriptionList } from "@/components/ui";

export default function ProjectItem({ project }) {
  return (
    <div
      id={"project-" + project.id}
      key={project.id}
      className="my-6 rounded-md max-md:p-2 md:p-4 hover:border hover:border-b-4 hover:border-r-4 hover:-translate-y-4"
    >
      <TitleCard
        title={project.title}
        isUsingLink={true}
        livelink={project.liveLink}
        gitlink={project.gitHub}
      />

      <ImagesBrowser imagesList={project.img} imgsTitle={project.title} />

      <DescriptionList description={project.desc} />
    </div>
  );
}
