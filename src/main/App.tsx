import Starter from "../Sections/Starter/Starter";
import MyProjects from "../Sections/MyProjects/MyProjects";
import Nav from "../components/Navbar/Nav";
import "./App.css";
import Experience from "../Sections/Experience/Experience";
import { useState } from "react";
import ProjectBlock from "../components/ProjectBlock/ProjectBlock";

function App() {
  const [projectActive, setProjectActive] = useState(0);

  return (
    <div className="App">
      <ProjectBlock
        projectActive={projectActive}
        setProjectActive={setProjectActive}
      />
      <div className="Content">
        <Nav />
        <Starter />
        <MyProjects setProjectActive={setProjectActive} />
        <Experience />
      </div>
    </div>
  );
}

export default App;
