import Nav from "../components/Navbar/Nav";
import "./App.css";
import { useEffect, useState } from "react";
import ProjectBlock from "../components/ProjectBlock/ProjectBlock";
import Footer from "../components/Footer/Footer";
import HomePage from "../Sections/HomePage";
import { Route, Routes } from "react-router-dom";
import ProjectsPage from "../ProjectsPage/ProjectsPage";

function App() {
  const [Loader, setLoader] = useState(true);
  useEffect(() => {
    setLoader(false);
  }, []);

  const [projectActive, setProjectActive] = useState(0);
  const [alertActive, setAlertActive] = useState(0);

  return (
    <div className="App">
      <div className={`Loader${Loader ? "" : " LoaderHide"}`}>
        <div className="LoaderC"></div>
      </div>

      <ProjectBlock
        projectActive={projectActive}
        setProjectActive={setProjectActive}
      />
      <div className={`AlertSend${alertActive ? " AlertSendActive" : ""}`}>
        <div className="closeBlock" onClick={() => setAlertActive(0)}>
          <span></span>
          <span></span>
        </div>
        <h2>
          <span>მადლობა</span> დაკავშირებისთვის
        </h2>
        <p>
          პასუხს რაც შეიძლება <span>სწრაფად</span> მოგწერთ მითითებულ მეილზე{" "}
          <span>:)</span>
        </p>
      </div>
      <div className="Content">
        <Nav />
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <HomePage
                  setProjectActive={setProjectActive}
                  clickGet={setAlertActive}
                />
              }
            />
            <Route
              path="MyProjects"
              element={<ProjectsPage setProjectActive={setProjectActive} />}
            />
          </Route>
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;
