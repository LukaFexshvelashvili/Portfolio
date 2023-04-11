import Nav from "../components/Navbar/Nav";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import ProjectBlock from "../components/ProjectBlock/ProjectBlock";
import Footer from "../components/Footer/Footer";
import HomePage from "../Sections/HomePage";
import { Route, Routes, useLocation } from "react-router-dom";
import ProjectsPage from "../ProjectsPage/ProjectsPage";

function App() {
  const [Loader, setLoader] = useState(true);
  const LoaderDiv = useRef<any>();

  useEffect(() => {
    let TimeOT: any;
    const handleLoad = () => {
      if (LoaderDiv.current) {
        LoaderDiv.current.style.opacity = "0";
      }
      TimeOT = setTimeout(() => {
        setLoader(false);
      }, 300);
    };

    window.onload = handleLoad;

    return () => {
      window.onload = null;
      clearTimeout(TimeOT);
    };
  }, []);
  const isMob = window.innerWidth > 800;
  const [projectActive, setProjectActive] = useState(0);
  const [alertActive, setAlertActive] = useState(0);

  return (
    <div className="App">
      {isMob ? (
        Loader ? (
          <div ref={LoaderDiv} className="Loader">
            <div className="LoaderC"></div>
          </div>
        ) : null
      ) : null}
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
