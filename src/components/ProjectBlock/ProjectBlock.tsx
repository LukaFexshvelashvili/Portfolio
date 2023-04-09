import "./ProjectBlock.css";
import Project1 from "../../images/Projects/project1.png";
import ProjectsArray from "../../Arrays/ProjectsArray";
import { useEffect, useRef } from "react";
interface ProjectBlock {
  projectActive: number;
  setProjectActive: React.Dispatch<React.SetStateAction<number>>;
}

export default function ProjectBlock({
  projectActive,
  setProjectActive,
}: ProjectBlock) {
  let getProject = ProjectsArray.filter((e) => projectActive == e.ProjectId)[0];
  const ProjectB = useRef<HTMLDivElement>(null);

  function handleClickOutside(event: any) {
    if (
      ProjectB.current &&
      !ProjectB.current.contains(event.target) &&
      event.target.className != "ProjectCard"
    ) {
      setProjectActive(0);
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return (
    <div
      ref={ProjectB}
      className={`ProjectBlock${
        projectActive == 0 ? " ProjectBlockClosed" : ""
      }`}
    >
      <div className="closeBlock" onClick={() => setProjectActive(0)}>
        <span></span>
        <span></span>
      </div>
      <div className="imageSide g-8">
        <img src={getProject?.image} alt="ProjectImage" />
      </div>
      <div className="infoSide g-4">
        <h2>{getProject?.PName}</h2>
        <div className="usedLanguages">
          <p>
            ტიპი:{" "}
            {getProject?.PType == 0 ? (
              <span className="FIGMADot">დიზაინი</span>
            ) : getProject?.PType == 1 ? (
              <span className="HTMLDot">ვებსაიტი</span>
            ) : getProject?.PType == 2 ? (
              <>
                <span className="HTMLDot">ვებსაიტი</span>,{" "}
                <span className="FIGMADot">დიზაინი</span>
              </>
            ) : null}
          </p>
        </div>
        <div className="usedLanguages">
          გამოყენებული ტექნოლოგიები:{" "}
          {getProject?.PLangs.map((e, i) => (
            <span className={`${e}Dot`}>
              {e}
              <span className="nonerr">
                {getProject?.PLangs.length !== i + 1 ? "," : ""}
              </span>{" "}
            </span>
          ))}
        </div>
        <div className="ButtonsProject">
          {getProject?.LiveLink ? (
            <a href={getProject?.LiveLink}>
              <button className="DefButton">LIVE</button>
            </a>
          ) : undefined}
          {getProject?.GitLink ? (
            <a href={getProject?.GitLink}>
              <button className="DefButton">GITHUB</button>
            </a>
          ) : undefined}
        </div>
      </div>
    </div>
  );
}
