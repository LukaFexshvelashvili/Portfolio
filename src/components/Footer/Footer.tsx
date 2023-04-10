import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="contentContainer footerContainer">
        <div className="FooterRow">
          <div className="FooterColumn">
            <div className="FooterStarter">ჩემს შესახებ</div>
            <div className="FooterD">
              3 წლიანი გამოცდილებით, გუნდური პროექტების გამოცდილებით და
              კლიენტთან თანამშრომლობით
            </div>
          </div>
          <div className="FooterColumn">
            <div className="FooterStarter">დაკავშირება</div>
            <div className="FooterD">
              <a href="mailto:lukitofexshvelashvili@gmail.com">
                lukitofexshvelashvili@gmail.com
              </a>
            </div>
            <div className="FooterD">
              <a href="https://www.facebook.com/luka.fexshvelashvili.1/">
                FACEBOOK
              </a>
            </div>
            <div className="FooterD">
              <a href="https://www.instagram.com/lukinio22/">INSTAGRAM</a>
            </div>
            <div className="FooterD">
              <a href="https://github.com/LukaFexshvelashvili">GITHUB</a>
            </div>
            <div className="FooterD">
              <a href="">LINKEDIN</a>
            </div>
          </div>
          <div className="FooterColumn">
            <div className="FooterStarter">სერვისები</div>
            <div className="FooterD">ვებ დიზაინი</div>
            <div className="FooterD">ვებ დეველოპმენტი</div>
            <div className="FooterD">ფონტენდ დეველოპმენტი</div>
            <div className="FooterD">ბექენდ დეველოპმენტი</div>
          </div>
        </div>
        <div className="contentContainer bottomSec">
          <div className="LineGlowUp"></div>
          <div className="rightsSwap">
            <div>© All Rights Served</div>
            <div>
              <a className="webS" href="https://LukaFexshvelashvili.ge">
                LukaFexshvelashvili.ge
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
