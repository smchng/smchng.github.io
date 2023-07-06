import "./NavBar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React, { useContext } from "react";
import { CursorContext } from "./Pages/Projects/Cursor//CursorContext.js";

import pdf from "./Files/resume.pdf";

function NavBar() {
  const { handleHover, handleHoverExit } = useContext(CursorContext);
  return (
    <nav className="navBar">
      <div className="navContainer">
        <div className="navContent">
          {" "}
          <div className="pageContainer">
            <CustomLink
              to="/"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverExit}
            >
              {capitalizeText("home")}
            </CustomLink>
            <CustomLink
              to="/About"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverExit}
            >
              {capitalizeText("about")}
            </CustomLink>
            <CustomLink
              to="/Gallery"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverExit}
            >
              {capitalizeText("gallery")}
            </CustomLink>{" "}
          </div>
        </div>

        <div className="navContent">
          <div className="extContainer">
            <div className="extLinks">
              <CustomLinkEXT
                href={pdf}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}
                className="extName"
              >
                {capitalizeText("resume")}
              </CustomLinkEXT>
              <p className="inline slash">/</p>
              <CustomLinkEXT
                href="https://www.linkedin.com/in/samantha-chung-76a0961bb/"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}
                className="extName"
              >
                {capitalizeText("linkedin")}
              </CustomLinkEXT>
              <p className="inline slash">/</p>
              <CustomLinkEXT
                href="mailto:s.chng02@gmail.prettierrc.js.com"
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}
                className="extName"
              >
                {capitalizeText("email")}
              </CustomLinkEXT>
            </div>
          </div>{" "}
        </div>
      </div>

      <div>
        <hr />
      </div>
    </nav>
  );
}

export default NavBar;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  const linkClass = isActive ? "activeLink" : "inactiveLink";
  return (
    <li className={linkClass}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
function CustomLinkEXT({ to, children, ...props }) {
  return (
    <li>
      <a href={to} {...props} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </li>
  );
}

function capitalizeText(text) {
  return text.toUpperCase();
}
