import React from "react";
import Naviguation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const contact = () => {
  return (
    <div className="contact">
      <Naviguation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>La Roche Sur Foron</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0659995826">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  06 59 99 58 26
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="bethazdev@protonmail.com">
                <span
                  className="clickInput"
                  onClick={() => {
                    alert("email copié !");
                  }}
                >
                  bethazdev@protonmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default contact;
