import Starter from "../Sections/Starter/Starter";
import Nav from "../components/Navbar/Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Content">
        <Nav />
        <Starter />
      </div>
    </div>
  );
}

export default App;
