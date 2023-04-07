import Starter from "../Sections/Starter/Starter";
import MyProjects from "../Sections/MyProjects/MyProjects";
import Nav from "../components/Navbar/Nav";
import "./App.css";
import Experience from "../Sections/Experience/Experience";

function App() {
  return (
    <div className="App">
      <div className="Content">
        <Nav />
        <Starter />
        <MyProjects />
        <Experience />
      </div>
    </div>
  );
}

export default App;
