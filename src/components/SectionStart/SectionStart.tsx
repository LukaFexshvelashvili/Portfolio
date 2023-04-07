export default function (props: { start: string; end?: string }) {
  return (
    <div className="starterSections">
      <h1>
        {props.start} <span>{props.end}</span>
      </h1>
      <div className="lineT"></div>
    </div>
  );
}
