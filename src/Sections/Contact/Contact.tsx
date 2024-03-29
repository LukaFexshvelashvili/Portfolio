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
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LoaderScreen from "../../main/LoaderScreen";

export default function Contact(props: { clickGet: any }) {
  const [mailLoader, setMailLoader] = useState(false);
  const getContact = useRef<any>();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state == "Contact") {
      window.scrollTo(0, getContact.current.offsetTop);
      navigate(location.pathname, { state: {} });
    }
  });

  const NameValue = useRef<any>();
  const MailValue = useRef<any>();
  const MessageValue = useRef<any>();
  const NameValueBlock = useRef<any>();
  const MailValueBlock = useRef<any>();
  const MessageValueBlock = useRef<any>();
  const Form = useRef(null);

  const SubFunction = (e: any) => {
    e.preventDefault();
    if (NameValue.current.value.length > 1) {
      NameValueBlock.current.classList.remove("wrongV");
      if (MailValue.current.value.length > 1) {
        MailValueBlock.current.classList.remove("wrongV");
        if (MessageValue.current.value.length > 1) {
          MessageValueBlock.current.classList.remove("wrongV");
          setMailLoader(true);
          // axios
          //   .post("http://localhost:3000/getMessage.php", {
          //     Name: NameValue.current.value,
          //     Mail: MailValue.current.value,
          //     Message: MessageValue.current.value,
          //   })
          //   .then((res) => {
          //     NameValue.current.value = "";
          //     MailValue.current.value = "";
          //     MessageValue.current.value = "";
          //   });
          emailjs
            .sendForm(
              "service_k2z8v1d",
              "template_0qtwble",
              Form.current ? Form.current : "",
              "LZfhpckPrLEKNupbf"
            )
            .then(
              function (response) {
                setMailLoader(false);

                NameValue.current.value = "";
                MailValue.current.value = "";
                MessageValue.current.value = "";
                props.clickGet(1);
              },
              function (error) {
                setMailLoader(false);

                alert("Something wrong try again later");
              }
            );
        } else {
          MessageValueBlock.current.classList.add("wrongV");
        }
      } else {
        MailValueBlock.current.classList.add("wrongV");
      }
    } else {
      NameValueBlock.current.classList.add("wrongV");
    }
  };
  return (
    <div className="Contact" ref={getContact}>
      <div className="contentContainer">
        <SectionStart end="კონტაქტი" center={true} />
      </div>
      <LoaderScreen Loader={mailLoader} />
      <div className="contentContainer ContContent">
        <img src={BG_1} alt="BgDecoration" className="bgD bgDecor1" />
        <img src={BG_2} alt="BgDecoration" className="bgD bgDecor2" />
        <img src={BG_3} alt="BgDecoration" className="bgD bgDecor3" />
        <img src={BG_4} alt="BgDecoration" className="bgD bgDecor4" />
        <form onSubmit={(e) => SubFunction(e)} ref={Form}>
          <div className="inputBlock" ref={NameValueBlock}>
            <input
              ref={NameValue}
              name="name"
              type="text"
              placeholder="თქვენი სახელი"
            />
            <img src={User} alt="UserIcon" />
          </div>
          <div className="inputBlock" ref={MailValueBlock}>
            <input
              ref={MailValue}
              name="email"
              type="text"
              placeholder="თქვენი მეილი"
            />
            <img src={Mail} alt="MailIcon" />
          </div>
          <div className="inputBlock" ref={MessageValueBlock}>
            <textarea
              ref={MessageValue}
              name="message"
              placeholder="მესიჯი"
            ></textarea>
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
