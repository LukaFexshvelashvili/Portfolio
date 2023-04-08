import ProjectsArray from "../../Arrays/ProjectsArray";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import SectionStart from "../../components/SectionStart/SectionStart";
import "./MyProjects.css";

export default function MyProjects() {
  return (
    <div className="MyProjects SecPadder">
      <div className="contentContainer">
        <SectionStart start="ჩემი" end="პროექტები" />
        <div className="ProjectsRow">
          {ProjectsArray.map(
            (
              e: { image: string; LiveLink?: string; GitLink?: string },
              i: number
            ) => (
              <ProjectCard
                key={i}
                image={e.image}
                LiveLink={e.LiveLink}
                GitLink={e.GitLink}
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
