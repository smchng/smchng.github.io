import React, { useContext } from "react";
import { CursorContext } from "./Pages/Projects/Cursor//CursorContext.js";
import "./Footer.css";
import pdf from "./Files/resume.pdf";

export default function Footer() {
  const { handleHover, handleHoverExit } = useContext(CursorContext);
  return (
    // <div>
    //   <hr />
    <div className="footer-container">
      <p className="inline">{capitalizeText("Samantha Chung Ⓒ 2023")}</p>
      <div className="links inline">
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          {capitalizeText("resume")}
        </a>
        <p className="inline slash">/</p>
        <a
          href="https://www.linkedin.com/in/samantha-chung-76a0961bb/"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          {capitalizeText("LinkedIn")}
        </a>
        <p className="inline slash">/</p>
        <a
          href="mailto:s.chng02@gmail.prettierrc.js.com"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          {capitalizeText("Email")}
        </a>
      </div>
    </div>
    // </div>
  );
}

function capitalizeText(text) {
  return text.toUpperCase();
}
