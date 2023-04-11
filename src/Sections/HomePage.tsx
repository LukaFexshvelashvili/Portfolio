import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import MyProjects from "./MyProjects/MyProjects";
import Starter from "./Starter/Starter";

export default function HomePage(props: {
  setProjectActive: any;
  clickGet: any;
}) {
  return (
    <>
      <Starter />
      <MyProjects setProjectActive={props.setProjectActive} />
      <Experience />
      <Contact clickGet={props.clickGet} />
    </>
  );
}
