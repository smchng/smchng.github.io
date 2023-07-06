import React, { useState, useContext } from "react";
import { CursorContext } from "./Projects/Cursor//CursorContext.js";

import "./Gallery.css";
import "./main.css";
import Carousel from "./CarouselClass";
import Static from "./StaticClass";
import Video from "./VideoClass";

import esg from "./galleryImgs/esg.png";
import ESG1 from "./galleryImgs/ESG 1.png";
import ESG2 from "./galleryImgs/ESG 2.png";
import ESG3 from "./galleryImgs/ESG 3.png";
import ESG4 from "./galleryImgs/ESG 4.png";
import ESG5 from "./galleryImgs/ESG 5.png";
import ESG6 from "./galleryImgs/ESG 6.png";
import ESG7 from "./galleryImgs/ESG 7.png";
import ESG8 from "./galleryImgs/ESG 8.png";
import ESG9 from "./galleryImgs/ESG 9.png";

import kaenine from "./galleryImgs/kaenine.png";
import kaenine1 from "./galleryImgs/kaenine 1.png";
import kaenine2 from "./galleryImgs/kaenine 2.png";

import GoalD from "./galleryImgs/Goal'D.png";
import GoalD1 from "./galleryImgs/GoalD 1.png";
import GoalD2 from "./galleryImgs/GoalD 2.png";
import GoalD3 from "./galleryImgs/GoalD 3.png";

import reCap from "./galleryImgs/reCap.png";
import reCap1 from "./galleryImgs/reCap 1.png";
import reCap2 from "./galleryImgs/reCap 2.png";

import hotel from "./galleryImgs/hotel.png";
import hotel1 from "./galleryImgs/hotel 1.png";
import hotel2 from "./galleryImgs/hotel 2.png";

import TKD from "./galleryImgs/TKD.png";
import TKD1 from "./galleryImgs/Board.jpg";

import agenda from "./galleryImgs/2018 Agenda.jpg";
import agenda1 from "./galleryImgs/2020 Agenda.jpg";

import music from "./galleryImgs/music.png";
import music1 from "./galleryImgs/music_blank.png";

import aloe from "./galleryImgs/aloe.png";
import minari from "./galleryImgs/Minari.png";
//Mexico
import photo1 from "./galleryImgs/DSC02534.jpg";
import photo2 from "./galleryImgs/DSC02600.jpg";
import photo3 from "./galleryImgs/DSC02636.jpg";
import photo4 from "./galleryImgs/DSC03138.jpg";
import photo5 from "./galleryImgs/DSC03399.jpg";
import photo6 from "./galleryImgs/DSC03409.jpg";
//Korea
import photo7 from "./galleryImgs/DSC_0057.jpg";
import photo8 from "./galleryImgs/DSC_0206.jpg";
import photo9 from "./galleryImgs/DSC_0212.jpg";
import photo10 from "./galleryImgs/DSC_0387.jpg";
import photo11 from "./galleryImgs/DSC_0441.jpg";
import photo12 from "./galleryImgs/DSC_0673.jpg";

import P03 from "./galleryImgs/P03 Kinetic Typography Final.mp4";
import chair from "./galleryImgs/chair.mp4";
import box from "./galleryImgs/box.mp4";
import study from "./galleryImgs/study.mp4";
import ubc from "./galleryImgs/ubc.mp4";

const esgImgs = [esg, ESG1, ESG2, ESG3, ESG4, ESG5, ESG6, ESG7, ESG8, ESG9];
const kaenineImgs = [kaenine, kaenine1, kaenine2];
const GoalDImgs = [GoalD, GoalD1, GoalD2, GoalD3];
const reCapImgs = [reCap, reCap1, reCap2];
const hotelImgs = [hotel, hotel1, hotel2];
const TKDImgs = [TKD, TKD1];
const agendaImgs = [agenda, agenda1];
const musicImgs = [music, music1];

function Gallery() {
  const { handleHover, handleHoverExit } = useContext(CursorContext);
  return (
    <div className="gallery-container">
      <div className="title">{capitalizeText("Gallery")}</div>

      <div className="filters">
        <div className="filters-name">VIEW ALL</div>
        <p className="inline slash">/</p>
        <div className="filters-name">{`Graphic Design`.toUpperCase()}</div>
        <p className="inline slash">/</p>
        <div className="filters-name">{`3D Modelling`.toUpperCase()}</div>
        <p className="inline slash">/</p>
        <div className="filters-name">{`VideoGraphy`.toUpperCase()}</div>
        <p className="inline slash">/</p>
        <div className="filters-name">{`wireframing`.toUpperCase()}</div>
        <p className="inline slash">/</p>
        <div className="filters-name">{`more`.toUpperCase()}</div>
      </div>

      {/* <div className="half-line">
        <hr />
      </div> */}
      {/* <div className="desc">
        View more work by me. Ranging from Photography, 3D modelling, VFX, and
        graphic design
      </div> */}
      {/* <div className="gallery-wrapper">
        {imgList.map((img, index) => (
          <div key={index} className="galleryImages">
            <img src={img} alt={`Image ${index + 1}`} />
            <div key={index}>{img}</div>
          </div>
        ))}
      </div> */}
      <div className="gallery-wrapper">
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Static imgs={photo5} projectNames={capitalizeText("Photography")} />
        </div>
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Video imgs={chair} projectNames={capitalizeText("Sculpture")} />
        </div>
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Static imgs={photo7} projectNames={capitalizeText("Photography")} />
        </div>
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Carousel
            imgs={esgImgs}
            projectNames={capitalizeText("ESG Ad Creatives")}
          />
        </div>

        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Static imgs={photo1} projectNames={capitalizeText("Photography")} />
        </div>
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Static imgs={photo12} projectNames={capitalizeText("Photography")} />
        </div>
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Static imgs={minari} projectNames={capitalizeText("Poster")} />
        </div>
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Static imgs={photo8} projectNames={capitalizeText("Photography")} />
        </div>
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Carousel
            imgs={musicImgs}
            projectNames={capitalizeText("Music Covers")}
          />
        </div>
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Video imgs={study} projectNames={capitalizeText("study space")} />
        </div>
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Carousel
            imgs={TKDImgs}
            projectNames={capitalizeText("Sandwich Board")}
          />
        </div>
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Static imgs={photo2} projectNames={capitalizeText("Photography")} />
        </div>
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Static imgs={photo11} projectNames={capitalizeText("Photography")} />
        </div>
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Carousel
            imgs={hotelImgs}
            projectNames={capitalizeText("The Grand Budapest Hotel Poster")}
          />
        </div>
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Video imgs={ubc} projectNames={capitalizeText("Banner Video")} />
        </div>
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Carousel
            imgs={reCapImgs}
            projectNames={capitalizeText("Wireframe")}
          />
        </div>

        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Static imgs={photo3} projectNames={capitalizeText("Photography")} />
        </div>
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Static imgs={photo6} projectNames={capitalizeText("Photography")} />
        </div>
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Video imgs={P03} projectNames={capitalizeText("lyric Video")} />
        </div>
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Static imgs={photo9} projectNames={capitalizeText("Photography")} />
        </div>
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Static imgs={photo10} projectNames={capitalizeText("Photography")} />
        </div>
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Static imgs={aloe} projectNames={capitalizeText("Poster")} />
        </div>

        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Carousel
            imgs={kaenineImgs}
            projectNames={capitalizeText("Brochure")}
          />
        </div>
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Carousel
            imgs={GoalDImgs}
            projectNames={capitalizeText("Wireframe")}
          />
        </div>
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Static imgs={photo4} projectNames={capitalizeText("Photography")} />
        </div>
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Video imgs={box} projectNames={capitalizeText("puzzle box")} />
        </div>
        <div
          className="galleryImages"
          onMouseEnter={handleHover}
          onMouseLeave={handleHoverExit}
        >
          <Carousel
            imgs={agendaImgs}
            projectNames={capitalizeText("agenda cover")}
          />
        </div>
      </div>
    </div>
  );
}

function capitalizeText(text) {
  return text.toUpperCase();
}

export default Gallery;
