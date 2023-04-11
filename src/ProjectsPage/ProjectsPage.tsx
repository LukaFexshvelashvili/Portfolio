import ProjectsArray from "../Arrays/ProjectsArray";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import SectionStart from "../components/SectionStart/SectionStart";
import "./ProjectsPage.css";

export default function ProjectsPage(props: { setProjectActive: any }) {
  return (
    <div className="ProjectsPage">
      <SectionStart start="ჩემი" end="პროექტები" center={true} />
      <div className="ProjectsRow">
        {ProjectsArray.map(
          (
            e: {
              image: string;
              LiveLink?: string;
              GitLink?: string;
              ProjectId: number;
            },
            i: number
          ) => (
            <ProjectCard
              key={i}
              ProjectId={e.ProjectId}
              image={e.image}
              LiveLink={e.LiveLink}
              GitLink={e.GitLink}
              Click={props.setProjectActive}
            />
          )
        )}
      </div>
    </div>
  );
}
