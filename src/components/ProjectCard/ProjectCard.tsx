import "./ProjectCard.css";

export default function ProjectCard(props: {
  image: string;
  LiveLink?: string;
  GitLink?: string;
}) {
  function hideLoader(img: any) {
    const cardId = img.parentNode;
    const loader = cardId.children[0];
    loader.style.display = "none";
  }
  return (
    <div className="ProjectCard">
      <div className="LoaderImg"></div>
      <img
        src={props.image}
        alt="Project"
        onLoad={(e) => hideLoader(e.target)}
      />
      <div className="HoverButtons">
        {props.LiveLink ? (
          <a href={props.LiveLink}>
            <button className="DefButton">LIVE</button>
          </a>
        ) : undefined}
        {props.GitLink ? (
          <a href={props.GitLink}>
            <button className="DefButton">GITHUB</button>
          </a>
        ) : undefined}
      </div>
    </div>
  );
}
