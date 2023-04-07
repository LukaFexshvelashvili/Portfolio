import "./ProjectCard.css";

export default function ProjectCard(props: { image: string }) {
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
    </div>
  );
}
