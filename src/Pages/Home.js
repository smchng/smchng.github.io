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
const projectDesc = [
  "Musical Pavilion that provides comfort and relaxation",
  "",
];
const projectSkills = ["SKILLS: 3D Modelling/Rendering ", ""];
const projectTools = ["TOOLS: Rhino, Twinmotion, Grasshopper", ""];

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
        <div>
          <Link to={`${projectNames[index].toUpperCase()}`} key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className={`project-filter ${
                hoveredIndex === index ? "hovered" : ""
              }`}
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
                // filter:
                //   hoveredIndex === index
                //     ? "brightness(0.7)"
                //     : hoveredIndex !== null,
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          </Link>
          {/* <div className="project-name-hover">{projectNames[index]}</div> */}

          {hoveredIndex === index && (
            <div className="animate__animated animate__fadeIn">
              <div className="project-name">{projectNames[index]}</div>
              <div className="project-sub">
                <p className="project-desc">{`${projectDesc[
                  index
                ].toUpperCase()}`}</p>
                <p className="project-skills">{projectSkills[index]}</p>
                <p className="project-tools">{projectTools[index]}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
