export default function LoaderScreen(props: { Loader: boolean }) {
  return (
    <div
      style={{ opacity: 0.9 }}
      className={`LoaderScreen${props.Loader ? "" : " LoaderHide"}`}
    >
      <div className={`LoaderC`}></div>
    </div>
  );
}
