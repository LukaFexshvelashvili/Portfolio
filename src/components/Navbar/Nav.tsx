import "./Nav.css";
import logoImage from "../../images/Logo.png";
import { useState } from "react";

export default function Nav() {
  const [navActive, setNavActive] = useState<boolean>(false);
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
      <div className="logoNav">
        <img src={logoImage} alt="logo" />
        <p>ლუკა ფეხშველაშვილი</p>
      </div>
      <div className="lineT"></div>
      <ul className={navActive ? "navAct" : ""}>
        <li>მთავარი</li>
        <li>ჩემს შესახებ</li>
        <li>პროექტები</li>
        <li className="liContact">კონტაქტი</li>
      </ul>
    </nav>
  );
}
