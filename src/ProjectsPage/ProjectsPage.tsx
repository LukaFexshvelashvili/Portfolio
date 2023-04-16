import ProjectsArray from "../Arrays/ProjectsArray";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import SectionStart from "../components/SectionStart/SectionStart";
import "./ProjectsPage.css";

export default function ProjectsPage(props: { setProjectActive: any }) {
  return (
    <div className="ProjectsPage">
      <div className="contentContainer">
        <SectionStart start="ჩემი" end="ვებსაიტები" giveStyle="StartPadd" />
        <div className="ProjectsRow">
          {ProjectsArray.map(
            (
              e: {
                image: string;
                LiveLink?: string;
                GitLink?: string;
                ProjectId: number;
                PType: number;
                Team: number;
              },
              i: number
            ) =>
              (e.Team == 0 && e.PType == 1) || e.PType == 2 ? (
                <ProjectCard
                  key={i}
                  ProjectId={e.ProjectId}
                  image={e.image}
                  LiveLink={e.LiveLink}
                  GitLink={e.GitLink}
                  Click={props.setProjectActive}
                />
              ) : null
          )}
        </div>
        <SectionStart start="ჩემი" end="დიზაინები" giveStyle="StartPadd" />
        <div className="ProjectsRow">
          {ProjectsArray.map(
            (
              e: {
                image: string;
                LiveLink?: string;
                GitLink?: string;
                ProjectId: number;
                PType: number;
                Team: number;
              },
              i: number
            ) =>
              e.PType == 0 ? (
                <ProjectCard
                  key={i}
                  ProjectId={e.ProjectId}
                  image={e.image}
                  LiveLink={e.LiveLink}
                  GitLink={e.GitLink}
                  Click={props.setProjectActive}
                />
              ) : null
          )}
        </div>
        <SectionStart start="პროექტები" end="გუნდში" giveStyle="StartPadd" />

        <div className="ProjectsRow">
          {ProjectsArray.map(
            (
              e: {
                image: string;
                LiveLink?: string;
                GitLink?: string;
                ProjectId: number;
                Team: number;
              },
              i: number
            ) =>
              e.Team == 1 ? (
                <ProjectCard
                  key={i}
                  ProjectId={e.ProjectId}
                  image={e.image}
                  LiveLink={e.LiveLink}
                  GitLink={e.GitLink}
                  Click={props.setProjectActive}
                />
              ) : null
          )}
        </div>
      </div>
    </div>
  );
}
