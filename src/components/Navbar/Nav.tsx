import "./Nav.css";
import logoImage from "../../images/Logo.png";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const [navActive, setNavActive] = useState<boolean>(false);
  const location = useLocation();
  useEffect(() => {
    setNavActive(false);
  }, [location.pathname, location.state]);
  useEffect(() => {
    if (location.state == null) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.state]);
  return (
    <nav>
      <div
        className={`navCloser${navActive ? " navCloserActive" : ""}`}
        onClick={() => setNavActive(!navActive)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Link to="/">
        <div className="logoNav">
          <img src={logoImage} alt="logo" />
          <p>ლუკა ფეხშველაშვილი</p>
        </div>
      </Link>
      <div className="lineT"></div>
      <ul className={navActive ? "navAct" : ""}>
        <Link to="/">
          <li>მთავარი</li>
        </Link>

        <li onClick={() => navigate("/", { state: "Experience" })}>
          გამოცდილება
        </li>
        <Link to="/MyProjects">
          <li>პროექტები</li>
        </Link>
        <li
          onClick={() => navigate("/", { state: "Contact" })}
          className="liContact"
        >
          კონტაქტი
        </li>
      </ul>
    </nav>
  );
}
