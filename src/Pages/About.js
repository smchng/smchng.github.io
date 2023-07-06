// import React from "react";
import "./About.css";
import "./main.css";

// import ESG1 from "./galleryImgs/ESG 1.png";
// import kaenine from "./galleryImgs/kaenine.png";
// import GoalD1 from "./galleryImgs/GoalD 1.png";
// import reCap from "./galleryImgs/reCap.png";
// import photo1 from "./galleryImgs/DSC02534.jpg";
// import photo2 from "./galleryImgs/DSC02600.jpg";
// import photo3 from "./galleryImgs/DSC02636.jpg";
// import photo5 from "./galleryImgs/DSC03399.jpg";

// const photos = [
//   reCap,
//   ESG1,
//   reCap,
//   ESG1,
//   GoalD1,
//   photo1,
//   kaenine,
//   photo2,
//   GoalD1,
//   photo1,
//   kaenine,
//   photo3,
//   photo5,
// ];

export default function About() {
  return (
    <div>
      <div className="about-container">
        <div className="about-inline grid-item1">
          <div className="title">{capitalizeText("hello!")}</div>
          <p className="desc bio">
            I’m Samantha, a 3rd-year SIAT student from Vancouver. Despite having
            several years of experience working with Adobe CC, I am currently
            expanding my skill set by exploring 3D software for architecture and
            user experience design, with a focus on creating interfaces. My
            passion for design is driven by the desire to create solutions that
            not only meet the bare minimum requirements but also leave a lasting
            impact on users. When designing, I enjoy playful approaches that
            elevate the overall outlook of a design while still following the
            project’s form.
          </p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className=" resume-container">
        <div className="about-inline service-list ">
          <p className="resume-title">{capitalizeText("Skills")}</p>
          <hr className="half-line" />
          <div className="skills-list">
            <div>
              <ul className="service-item">prototyping</ul>
              <ul className="service-item">3D modelling</ul>
              <ul className="service-item"> web design</ul>
            </div>
            <div>
              <ul className="service-item">web development</ul>
              <ul className="service-item">motion graphics</ul>
              <ul className="service-item"> wiring framing</ul>
            </div>
            <div>
              <ul className="service-item">marketing design</ul>
              <ul className="service-item">photo editing</ul>
              <ul className="service-item">video editing</ul>
            </div>
            <div></div>
          </div>
        </div>

        <div className="about-inline service-list">
          <p className="resume-title">{capitalizeText("Tools")}</p>
          <hr className="half-line" />
          <div className="skills-list">
            <div>
              <ul className="service-item">Adobe CC</ul>
              <ul className="service-item">Rhino</ul>
              <ul className="service-item">OnShape</ul>

              <ul className="service-item"> Maya</ul>
            </div>
            <div>
              <ul className="service-item">Figma</ul>
              <ul className="service-item">HTML</ul>
              <ul className="service-item">CSS</ul>{" "}
              <ul className="service-item">JS</ul>{" "}
            </div>{" "}
            <div>
              <ul className="service-item">Java</ul>
              <ul className="service-item">Python</ul>{" "}
              <ul className="service-item">React</ul>
            </div>{" "}
            <div></div>
          </div>
        </div>
      </div>
      <div className=" resume-container">
        <div>
          <p className="resume-title">{capitalizeText("currently")}</p>
          <hr className="half-line" />
          <div>
            <p className="resume-spacing">
              {capitalizeText("B.Sc. Interactive Arts & Technology")}
            </p>
            <p className="company">Simon Faser University</p>
            <p className="company date">
              {capitalizeText("(Sept 2020 - present)")}
            </p>
          </div>
        </div>

        <div>
          <p className="resume-title">{capitalizeText("previously")}</p>
          <hr className="half-line" />
          <div>
            <p className="resume-spacing">{capitalizeText("digital artist")}</p>
            <p className="company">Eastside Games</p>
            <p className="company date">
              {capitalizeText(" (JAN 2022 - NOV 2022)")}
            </p>
            <p className="resume-spacing">
              {capitalizeText("designer, developer")}
            </p>
            <p className="company">UBC NwHacks</p>
            <p className="company date">
              {capitalizeText(" (jan 2022, mar 2023)")}
            </p>
            <p className="resume-spacing">{capitalizeText("designer")}</p>
            <p className="company">UBC cmd-f</p>
            <p className="company date">{capitalizeText(" (mar 2022)")}</p>
            <p className="resume-spacing">{capitalizeText("designer")}</p>
            <p className="company">SFU Stormhacks</p>
            <p className="company date">{capitalizeText(" (feb 2022)")}</p>
            <p className="resume-spacing">
              {capitalizeText("freelance videographer")}
            </p>
            <p className="company">UBC</p>
            <p className="company date">
              {capitalizeText(" (feb 2021 - aug 2022)")}
            </p>
          </div>
        </div>
      </div>

      {/* <div className="gallery-wrapper">
        {photos.map((img, index) => (
          <div key={index} className="galleryImages">
            <img src={img} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div> */}
    </div>
  );
}

function capitalizeText(text) {
  return text.toUpperCase();
}
