import { useEffect, useRef } from "react";
import BG_1 from "../../images/BgParticles/BG1.webp";
import BG_2 from "../../images/BgParticles/BG2.webp";
import BG_3 from "../../images/BgParticles/BG3.webp";
import BG_4 from "../../images/BgParticles/BG4.webp";
import "./Starter.css";

export default function Starter() {
  let StarterSpan = useRef<any>(null);
  let eyeC1 = useRef<any>(null);
  let eyeC2 = useRef<any>(null);

  let randColS = [
    "#ff005c",
    "#9dff00",
    "#fbff00",
    "#ff00bb",
    "#fe0ab7",
    "#52fd00",
    "#00fff6",
  ];

  let myJobs = [
    "ვებ დეველოპერი",
    "UI დიზაინერი",
    "Front-End დეველოპერი",
    "PHP დეველოპერი",
  ];

  useEffect(() => {
    let startText = myJobs[0];
    let c = StarterSpan.current.textContent.length;
    let takenc = 0;

    let textChanger = setInterval(() => {
      if (takenc == 0) {
        c--;
        StarterSpan.current.textContent = startText.substring(0, c);
        if (c == -1) {
          takenc = 1;
          startText =
            myJobs[
              myJobs.length - 1 !== myJobs.findIndex((e) => e == startText)
                ? myJobs.findIndex((e) => e == startText) + 1
                : 0
            ];
          StarterSpan.current.style.color =
            randColS[Math.floor(Math.random() * (randColS.length - 1))];
        }
      } else {
        c++;
        StarterSpan.current.textContent = startText.substring(0, c);
        if (c == StarterSpan.current.textContent.length + 1) {
          takenc = 0;
        }
      }
    }, 100);
    document.body.addEventListener("mousemove", (e) => eyeball(e));

    return () => {
      clearInterval(textChanger);
    };
  }, [StarterSpan.current]);

  function eyeball(event: any) {
    let x =
      eyeC1.current.getBoundingClientRect().left +
      eyeC1.current.clientWidth / 2;
    let y =
      eyeC1.current.getBoundingClientRect().top +
      eyeC1.current.clientHeight / 2;
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotate = radian * (180 / Math.PI) * -1 + 270;
    eyeC1.current.style.transform = "rotate(" + rotate + "deg)";
    let x2 =
      eyeC2.current.getBoundingClientRect().left +
      eyeC2.current.clientWidth / 2;
    let y2 =
      eyeC2.current.getBoundingClientRect().top +
      eyeC2.current.clientHeight / 2;
    let radian2 = Math.atan2(event.pageX - x2, event.pageY - y2);
    let rotate2 = radian2 * (180 / Math.PI) * -1 + 270;
    eyeC2.current.style.transform = "rotate(" + rotate2 + "deg)";
  }
  return (
    <div className="Starter">
      <img src={BG_1} alt="BgDecoration" className="bgD bgDecor1" />
      <img src={BG_2} alt="BgDecoration" className="bgD bgDecor2" />
      <img src={BG_3} alt="BgDecoration" className="bgD bgDecor3" />
      <img src={BG_4} alt="BgDecoration" className="bgD bgDecor4" />
      <div className="contentContainer StarterWrap">
        <div className="WelcomeContent g-6">
          <h1>
            გამარჯობა, მე ვარ<span ref={StarterSpan}>ვებ დეველოპერი</span>
          </h1>
          <p>
            3 წლიანი გამოცდილებით, გუნდური პროექტების გამოცდილებით და კლიენტთან
            თანამშრომლობით
          </p>
          <div className="ButtonsRow">
            <button className="DefButton">დამიკავშირდი</button>
            <a href="https://github.com/LukaFexshvelashvili">
              <button className="DefButton2">GITHUB</button>
            </a>
          </div>
        </div>
        <div className="FaceContent g-6">
          <div className="EyeBlockContainer">
            <div className="EyeBlock">
              <div className="EyeRow">
                <div className="EyeCircle">
                  <div ref={eyeC1} className="EyeC">
                    <div className="Eye"></div>
                  </div>
                </div>
                <div className="EyeCircle">
                  <div ref={eyeC2} className="EyeC">
                    <div className="Eye"></div>
                  </div>
                </div>
              </div>
              <div className="Mouth"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
