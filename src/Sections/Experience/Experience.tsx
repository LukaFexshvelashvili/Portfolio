import "./Experience.css";
import SectionStart from "../../components/SectionStart/SectionStart";
import { LanguagesArray, LanguagesNArray } from "../../Arrays/LanguagesArray";
import { useState } from "react";

export default function Experience() {
  const [activedLang, setActivedLang] = useState(0);
  return (
    <div className="Experience SecPadder">
      <div className="contentContainer">
        <SectionStart start="ჩემი" end="გამოცდილება" />
        <div className="ExperienceContent">
          <div className="TextSide g-6">
            <h3>
              პროექტების შექმნისას მაქსიმალურად ვკონცეტრირდები საიტის
              <span className="redDot"> სისწრაფეზე </span>
              და<span className="redDot redDot2"> ხარისხზე </span>თანამედროვე
              ტექნოლოგიების დახმარებით
            </h3>
            <h3>
              ტექნოლოგიები რომლებთანაც მიმუშავია:
              {LanguagesNArray.map(
                (
                  e: { styler: string; name: string; getId: number },
                  i: number
                ) => (
                  <span key={i}>
                    {" "}
                    <span
                      onMouseOver={() => setActivedLang(e.getId)}
                      onMouseLeave={() => setActivedLang(0)}
                      className={`langS ${e.styler}${
                        e.getId == activedLang ? " ActivedN" : ""
                      }`}
                    >
                      {" "}
                      {e.name}
                    </span>
                    {i !== LanguagesNArray.length - 1 ? (
                      <span className="noner">,</span>
                    ) : (
                      ""
                    )}
                  </span>
                )
              )}
            </h3>
          </div>
          <div className="LogoSide g-6">
            <div className="GlowStick GDown"></div>
            <div className="LogosRow">
              {LanguagesArray.map(
                (
                  e: { image: string; name: string; getId: number },
                  i: number
                ) => (
                  <div
                    key={i}
                    onMouseOver={() => setActivedLang(e.getId)}
                    onMouseLeave={() => setActivedLang(0)}
                    className={`LogoCard${
                      e.getId == activedLang ? " ActivedC" : ""
                    }`}
                  >
                    <img src={e.image} alt={e.name + "-Icon"} />
                  </div>
                )
              )}
            </div>
            <div className="GlowStick GUp"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
