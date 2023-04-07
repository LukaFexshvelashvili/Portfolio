import "./Nav.css";
import logoImage from "../../images/Logo.png";

export default function Nav() {
  return (
    <nav>
      <div className="logoNav">
        <img src={logoImage} alt="logo" />
        <p>ლუკა ფეხშველაშვილი</p>
      </div>
      <div className="lineT"></div>
      <ul>
        <li>მთავარი</li>
        <li>ჩემს შესახებ</li>
        <li>პროექტები</li>
        <li className="liContact">კონტაქტი</li>
      </ul>
    </nav>
  );
}
