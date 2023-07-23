import { memo, useMemo } from "react";
import ProjectsArray from "../Arrays/ProjectsArray";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import SectionStart from "../components/SectionStart/SectionStart";
import "./ProjectsPage.css";

function ProjectsPage(props: { setProjectActive: any }) {
  const webSitesProjects = useMemo(() => {
    return ProjectsArray.filter(
      (e) => (e.Team === 0 && e.PType === 1) || e.PType === 2
    );
  }, []);

  const designsProjects = useMemo(() => {
    return ProjectsArray.filter((e) => e.PType === 0);
  }, []);

  const teamProjects = useMemo(() => {
    return ProjectsArray.filter((e) => e.Team === 1);
  }, []);
  return (
    <div className="ProjectsPage">
      <div className="contentContainer">
        <SectionStart start="ჩემი" end="ვებსაიტები" giveStyle="StartPadd" />
        <div className="ProjectsRow">
          {webSitesProjects.map(
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
          {designsProjects.map(
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
          {teamProjects.map(
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
export default memo(ProjectsPage);
