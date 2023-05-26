import React, { useState, useContext } from "react";
import { CursorContext } from "./Projects/Cursor/CursorContext.js";
import { Link } from "react-router-dom";
import "./Home.css";
import "./main.css";

import project1 from "./homeImgs/Image28.png";
import project2 from "./homeImgs/Image32.png";
import project3 from "./homeImgs/Main Pic.png";

const projectImgs = [
  { src: project1, alt: "Project 1" },
  { src: project2, alt: "Project 2" },
  // { src: project3, alt: "Project 3" },
];
const projectNames = ["PAVILION", "COMING SOON"];

export default function Home() {
  return (
    <div className="home-container">
      <div className="firstName name">{`Samantha Chung`.toUpperCase()}</div>
      {/* <div className="lastName name">{capitalizeText("chung")}</div> */}
      {/* <div className="half-line">
        <hr />
      </div> */}
      <div className="subtext">
        {`Multimedia Designer exploring different modes of design`.toUpperCase()}
      </div>
      <div className="list-container">
        <ul className="list">
          {`services`.toUpperCase()}
          <ul className="list-item">prototyping</ul>
          <ul className="list-item">3D modelling</ul>
          <ul className="list-item"> web design</ul>
          <ul className="list-item">web development</ul>
          <ul className="list-item">motion graphics</ul>
          <ul className="list-item"> wiring framing</ul>
          <ul className="list-item">marketing design</ul>
          <ul className="list-item">photo editing</ul>
          <ul className="list-item">video editing</ul>
        </ul>
        <ul className="list">
          {`tools`.toUpperCase()}
          <ul className="list-item">Adobe CC</ul>
          <ul className="list-item">Rhino</ul>
          <ul className="list-item">OnShape</ul>
          <ul className="list-item"> Maya</ul>
          <ul className="list-item">Figma</ul>
          <ul className="list-item">HTML</ul>
          <ul className="list-item">CSS</ul>
          <ul className="list-item">JS</ul>
          <ul className="list-item">Java</ul>
          <ul className="list-item">Python</ul>
          <ul className="list-item">React</ul>
        </ul>
      </div>
      <div className="long-line">
        <hr />
      </div>
      <ProjectHover />
    </div>
  );
}

const ProjectHover = (pageName) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { handleHover, handleHoverExit } = useContext(CursorContext);

  const handleMouseEnter = (index) => {
    if (window.innerWidth > 800) {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div
      className="projects-container"
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverExit}
    >
      {projectImgs.map((image, index) => (
        <Link to={`${projectNames[index].toLowerCase()}`} key={index}>
          <img
            src={image.src}
            alt={image.alt}
            style={{
              zIndex: hoveredIndex === index ? 10 : 1,
              objectFit: "cover",
              flexGrow: 1,
              boxSizing: "border-box",
              height: "80vh",
              width:
                hoveredIndex === index
                  ? "70vw"
                  : hoveredIndex !== null
                  ? "100%"
                  : "100%",
              transition: " 0.5s ease-in-out",
              maxWidth: "95vw",
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          />
          <div className="project-name-hover">{projectNames[index]}</div>
          {hoveredIndex === index && (
            <div className="project-name animate__animated animate__zoomIn animate__faster ">
              {projectNames[index]}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};
