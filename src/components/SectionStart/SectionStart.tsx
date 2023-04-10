export default function (props: {
  start?: string;
  end?: string;
  center?: boolean;
}) {
  return (
    <div className="starterSections">
      {props.center ? <div className="lineT"></div> : null}
      <h1>
        {props.start} <span>{props.end}</span>
      </h1>
      <div className="lineT"></div>
    </div>
  );
}
