import React from "react";
import "../styles/Footer.css";

import logo from "../assets/logo.png";
import social from "../assets/social.png";

function Footer() {
  return (
    <div className="footerContainer redSection">
      <div className="footer">
        <div className="up">
          <div className="left">
            <p>Klauprechtstrase 26 76137 Karlsruhe, Germany</p>
            <p>+49 721 358060</p>
            <p>info@partyservice-brath.de</p>
          </div>
          <div className="middle">
            <img src={logo} height={120} alt="" />
          </div>
          <div className="right">
            <p>Besuchen Sie uns auf:</p>
            <img src={social} alt="" />
          </div>
        </div>
      </div>
      <div className="footerDown">
        <div className="down">
          <p>© 2020 by Metzgerei Heiko Brath GmbH, Deutschland</p>
          <p>
            Code and design by <span>StudioPresent</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
