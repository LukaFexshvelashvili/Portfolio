import ProjectsArray from "../../Arrays/ProjectsArray";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import SectionStart from "../../components/SectionStart/SectionStart";
import "./MyProjects.css";

export default function MyProjects(props: {
  setProjectActive: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="MyProjects SecPadder">
      <div className="contentContainer">
        <SectionStart start="ჩემი" end="პროექტები" />
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
        <div className="ProjectsB">
          <button className="DefButton">მეტის ნახვა</button>
          <a href="https://github.com/LukaFexshvelashvili">
            <button className="DefButton2">GITHUB</button>
          </a>
        </div>
      </div>
    </div>
  );
}
