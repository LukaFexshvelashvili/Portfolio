import SectionStart from "../../components/SectionStart/SectionStart";
import BG_1 from "../../images/BgParticles/BG1.webp";
import BG_2 from "../../images/BgParticles/BG2.webp";
import BG_3 from "../../images/BgParticles/BG3.webp";
import BG_4 from "../../images/BgParticles/BG4.webp";

import User from "../../images/Icons/user.png";
import Mail from "../../images/Icons/mail.png";
import Message from "../../images/Icons/message.png";
import Facebook from "../../images/Icons/Facebook.png";
import Instagram from "../../images/Icons/Instagram.png";
import Github from "../../images/Icons/Github.png";

import "./Contact.css";

export default function Contact(props: { clickGet: any }) {
  const SubFunction = (e: any) => {
    props.clickGet(1);
    e.preventDefault();
  };
  return (
    <div className="Contact">
      <div className="contentContainer">
        <SectionStart end="კონტაქტი" center={true} />
      </div>

      <div className="contentContainer ContContent">
        <img src={BG_1} alt="BgDecoration" className="bgD bgDecor1" />
        <img src={BG_2} alt="BgDecoration" className="bgD bgDecor2" />
        <img src={BG_3} alt="BgDecoration" className="bgD bgDecor3" />
        <img src={BG_4} alt="BgDecoration" className="bgD bgDecor4" />
        <form onSubmit={(e) => SubFunction(e)}>
          <div className="inputBlock">
            <input type="text" placeholder="თქვენი სახელი" />
            <img src={User} alt="UserIcon" />
          </div>
          <div className="inputBlock">
            <input type="text" placeholder="თქვენი მეილი" />
            <img src={Mail} alt="MailIcon" />
          </div>
          <div className="inputBlock">
            <textarea placeholder="მესიჯი"></textarea>
            <img src={Message} alt="MessageIcon" />
          </div>
          <button className="DefButton subForm">გაგზავნა</button>
        </form>
        <div className="SocIcons">
          <a href="https://www.facebook.com/luka.fexshvelashvili.1/">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com/lukinio22/">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://github.com/LukaFexshvelashvili">
            <img src={Github} alt="Github" />
          </a>
        </div>
      </div>
    </div>
  );
}
