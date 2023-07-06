import React, { useState, useEffect, useContext } from "react";
import { CursorContext } from "./Cursor/CursorContext.js";
import "./Projects.css";

import banner from "./PavilionImgs/Main Pic.png";
import map1 from "./PavilionImgs/map1.png";
import map2 from "./PavilionImgs/map3.png";
import sketch1 from "./PavilionImgs/sketch1.jpg";
import sketch2 from "./PavilionImgs/sketch2.jpg";
import sketch3 from "./PavilionImgs/sketch3.jpg";
import d1 from "./PavilionImgs/3d1.png";
import d2 from "./PavilionImgs/3d2.png";
import iso1 from "./PavilionImgs/iso2.jpg";
import render from "./PavilionImgs/render.mp4";
import walkthrough from "./PavilionImgs/vid.mp4";

const mapImgs = [map1, map2];

function Pavilion() {
  const { handleHover, handleHoverExit } = useContext(CursorContext);
  return (
    <div>
      <img src={banner} className="banner" />
      <div className="project-title ">{`Pavilion`.toUpperCase()}</div>
      <div className="project-overview">
        {`A prospected music pavilion located within Holland Park, designed to provide a gathering place for music recitals and other events.`.toUpperCase()}
      </div>
      <div className=" resume-container">
        <div>
          <p className="resume-title">{`team`.toUpperCase()}</p>
          <hr className="half-line" />
          <div>
            <p className="company" style={{ margin: "0 0 0rem 0" }}>
              Samantha Chung
            </p>
            <p className="company date">(me)</p>
          </div>
          <div>
            <p className="company" style={{ margin: "0rem" }}>
              Angela Lu
            </p>
          </div>
        </div>

        <div>
          <p className="resume-title">{`Timeline`.toUpperCase()}</p>
          <hr className="half-line" />
          <div>
            <div>
              <p className="company">March 1-29, 2023</p>
              <p className="company date">(4 weeks)</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" resume-container">
        <div>
          <p className="resume-title">{`role`.toUpperCase()}</p>
          <hr className="half-line" />
          <div>
            <p className="company" style={{ margin: "0 0 0rem 0" }}>
              3D Modeller/Renderer
            </p>
          </div>
          <div>
            <p className="company" style={{ marginTop: "0rem" }}>
              Pavilion Ideation
            </p>
          </div>
        </div>

        <div>
          <p className="resume-title">{`Tools`.toUpperCase()}</p>
          <hr className="half-line" />
          <div>
            <div>
              <p className="company" style={{ margin: "0 0 0rem 0" }}>
                Rhino
              </p>
            </div>
            <div>
              <p className="company" style={{ margin: "0rem" }}>
                Twin Motion
              </p>
            </div>
            <div>
              <p className="company" style={{ margin: "0" }}>
                Grasshopper
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" resume-container">
        <div>
          <p className="resume-title">{`EXT. links`.toUpperCase()}</p>
          <hr className="half-line" />
          <div>
            <a
              className="company extLink"
              href="https://crescendo.cargo.site/"
              target="_blank"
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverExit}
            >
              blog
            </a>
          </div>
        </div>

        <div>
          <p className="resume-title">{`jump to`.toUpperCase()}</p>
          <hr className="half-line" />
          <div>
            <div>
              <a
                className="company extLink"
                style={{ margin: "0 0 0rem 0" }}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}
                onClick={(event) => {
                  event.preventDefault();
                  const targetElement = document.getElementById("context");
                  if (targetElement) {
                    window.scrollTo({
                      top: targetElement.offsetTop,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Context
              </a>
            </div>
            <div>
              <a
                className="company extLink"
                style={{ margin: "0 0 0rem 0" }}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}
                onClick={(event) => {
                  event.preventDefault();
                  const targetElement = document.getElementById("goal");
                  if (targetElement) {
                    window.scrollTo({
                      top: targetElement.offsetTop,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Goal
              </a>
            </div>
            <div>
              <a
                className="company extLink"
                style={{ margin: "0 0 0rem 0" }}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}
                onClick={(event) => {
                  event.preventDefault();
                  const targetElement = document.getElementById("steps");
                  if (targetElement) {
                    window.scrollTo({
                      top: targetElement.offsetTop,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Steps
              </a>
            </div>
            <div>
              <a
                className="company extLink"
                style={{ margin: "0 0 0rem 0" }}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}
                onClick={(event) => {
                  event.preventDefault();
                  const targetElement = document.getElementById("final");
                  if (targetElement) {
                    window.scrollTo({
                      top: targetElement.offsetTop,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Final
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-title " id="context">
        {`Context`.toUpperCase()}
        <p className="body-highlight">
          {`Unite music, comfort, and design in a captivating pavilion nestled within the park, offering an inviting space for both recitals and relaxation.`.toUpperCase()}
        </p>
        <p className="body">
          As a designer, I am passionate about creating visually appealing and
          functional structures that add value to the built environment. In this
          project, I modeled a music pavilion in Holland Park, Surrey BC,{" "}
          <strong>
            which demanded a comprehensive understanding of architecture, human
            ergonomics, and design aesthetics.
          </strong>{" "}
          Collaborating with a talented partner, we embarked on ideating and
          composing various presentation components, including a comprehensive
          blog that showcased our entire creative journey. My contribution
          involved ideating the structure, modelling versions to create a
          visualization, and coordinating with my team to deliver the project.
          Through this collaboration, we successfully merged our skills and
          expertise to create an engaging and visually stunning portrayal of our
          collective efforts.
        </p>
      </div>

      {/* <div className="project-title ">{capitalizeText("scope")}</div> */}
      <div className="project-title " id="goal">
        {`goal`.toUpperCase()}
        <p className="body-highlight">
          {`
            In many public areas, there is an absence of comfortable resting
            spaces that can discourage people in spending more time outdoors.
          `.toUpperCase()}
        </p>
        <p className="body">
          With an understanding of the need for inviting resting areas in public
          spaces, the project aimed to address this gap by designing a pavilion
          that not only facilitated music recitals but also provided a
          comfortable and enticing space for people to relax.
        </p>
      </div>

      <div className="project-title " id="steps">
        {`steps`.toUpperCase()}
        <p className="body-highlight">
          {`
            Evaluating the space.
          `.toUpperCase()}
        </p>
        <p className="body">
          The project began with a meticulous evaluation of the space available
          in Holland Park. Our aim was to identify an ideal location that
          offered an open area in close proximity to the lush greenery,
          incorporating numerous walkways to ensure maximum engagement with the
          pavilion. By carefully assessing the park's layout and considering
          factors such as accessibility and visibility, we strategically
          positioned the pavilion to{" "}
          <strong>
            create a harmonious connection with its surroundings. This
            thoughtful approach enabled us to design a space that seamlessly
            integrated with the park,
          </strong>{" "}
          enticing people to interact with and appreciate the pavilion's
          presence amidst the natural beauty of Holland Park.
        </p>
        <div>
          {/* <figure>
            <img className="figureImg" src={map1}></img>
          </figure>
          <figure>
            <img className="figureImg" src={map2}></img>
          </figure> */}
          <ImageCarousel imgs={mapImgs} />
        </div>

        <p className="body-highlight">
          {`
            Research and inspiration.
          `.toUpperCase()}
        </p>
        <p className="body">
          During the research phase of the project, extensive exploration was
          conducted to gather inspiration and insights. Platforms like Pinterest
          became valuable resources for discovering potential features that
          could enhance the pavilion's design. By curating a collection of
          visual references, including colors and materials, a vision began to
          take shape.
        </p>
        <p className="body">
          Careful consideration was given to the weather conditions in the area
          to ensure the selected materials would withstand durability and
          longevity. The design was{" "}
          <strong>
            influenced by the circulation within the pavilion, providing
            visitors with a comfortable and functional experience.
          </strong>{" "}
          This research phase served as a solid foundation for the subsequent
          design and development stages, integrating the findings into the
          project's overall vision and goals.{" "}
        </p>

        <p className="body-highlight">
          {`
            sketching
          `.toUpperCase()}
        </p>
        <p className="body">
          Entering the sketching phase, we explored a diverse range of features
          for the pavilion design. However,{" "}
          <strong>
            the challenge arose in harmonizing these elements with a cohesive
            focal point.
          </strong>{" "}
          Additionally, the task of transforming conceptual ideas into a
          professional and realistic representation presented its own set of
          complexities. To overcome this, one feature was prioritized and
          enforced as the focal point. Afterwards, the other features worked its
          way in to support the center piece.
        </p>
        <div className="figure-container">
          <figure>
            <img className="figureImg" src={sketch1}></img>
          </figure>
          <figure>
            <img className="figureImg" src={sketch2}></img>
          </figure>
          <figure>
            <img className="figureImg" src={sketch3}></img>
          </figure>
        </div>

        <p className="body-highlight">
          {`
            3D Adaptation
          `.toUpperCase()}
        </p>
        <p className="body">
          With Rhino as the creative tool, I sculpted our pavilion design with
          precision and ingenuity, seamlessly iterating and refining our
          creation. Employing the power of Grasshopper, I generated the
          intricate elements, explored diverse forms, and experimented with
          captivating color palettes. This immersive process allowed us to
          establish a captivating sense of hierarchy, aesthetic appeal, and
          functionality within our structure. Through the interplay of
          technology and artistic vision, our modeling journey showcased the
          incredible potential of digital tools, breathing life into our vision
          and transforming it into a remarkable architectural masterpiece.
        </p>
        <div className="figure-container">
          <figure>
            <img className="figureImg" src={d1}></img>
          </figure>
          <figure>
            <img className="figureImg" src={d2}></img>
          </figure>
        </div>

        <p className="body-highlight">
          {`
            3D rendering
          `.toUpperCase()}
        </p>
        <p className="body">
          Incorporating Twinmotion into my workflow, I seamlessly transitioned
          from modeling to the realm of visualization. Through the power of
          video and animation, I brought my pavilion design to life, showcasing
          its intricate details and captivating features. Applying carefully
          selected materials, I replicated Holland Park, ensuring a realistic
          and immersive experience. Human scale and ergonomics were at the
          forefront of my considerations, as I aimed to create{" "}
          <strong>
            a pavilion that seamlessly integrated with its surroundings and
            provided a comfortable environment for visitors.
          </strong>{" "}
          The resulting animations gracefully highlighted the pavilion's
          interaction with the park, emphasizing its plausibility and enhancing
          its visual appeal.
        </p>
        <div className="figure-container">
          <video autoPlay muted loop>
            <source className="figureImg" src={render} type="video/mp4" />
          </video>
          {/* <figure>
            <img className="figureImg" src={iso1}></img>
          </figure> */}
        </div>
      </div>
      <div className="project-title " id="final">
        {`final`.toUpperCase()}{" "}
        <div className="figure-container">
          <video autoPlay muted loop>
            <source className="figureImg" src={walkthrough} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}

function ImageCarousel({ imgs }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imgs.length);
  //   }, 2000);

  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [imgs.length]);
  return (
    <div className="image-wrapper">
      {imgs.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            className={`carouselImage ${
              index === currentImageIndex ? "active" : ""
            }`}
            alt="carousel"
          />
        </div>
      ))}
    </div>
  );
}

export default Pavilion;
