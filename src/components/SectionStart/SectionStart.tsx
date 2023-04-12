export default function (props: {
  start?: string;
  end?: string;
  center?: boolean;
  giveStyle?: string;
}) {
  return (
    <div
      className={`starterSections${
        props.giveStyle ? ` ${props.giveStyle}` : ""
      }`}
    >
      {props.center ? <div className="lineT"></div> : null}
      <h1>
        {props.start} <span>{props.end}</span>
      </h1>
      <div className="lineT"></div>
    </div>
  );
}
