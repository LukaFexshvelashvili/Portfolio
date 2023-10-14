import { useEffect, useState } from "react";

export default function LoaderPage(props: { Loader: boolean }) {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const Timer = setTimeout(() => {
      setHide(true);
    }, 500);

    return () => {
      clearTimeout(Timer);
    };
  }, []);

  return (
    <div className={`Loader${props.Loader ? "" : " LoaderHide"}`}>
      <div className={`LoaderC${hide ? " EndAnimLoader" : ""}`}></div>
    </div>
  );
}
