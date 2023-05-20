import "./NavBar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React, { useContext } from "react";
import { CursorContext } from "./Pages/Projects/Cursor//CursorContext.js";

function NavBar() {
  const { handleHover, handleHoverExit } = useContext(CursorContext);
  return (
    <nav className="navBar">
      <ul>
        <div className="navContainer">
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
          </CustomLink>
        </div>
      </ul>
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

function capitalizeText(text) {
  return text.toUpperCase();
}
