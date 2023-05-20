import React, { useState, useContext, useEffect } from "react";
import { CursorContext } from "./CursorContext";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { isHovered } = useContext(CursorContext);

  const updatePosition = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", updatePosition);
    return () => {
      document.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none",
        backgroundImage: "none",
        backgroundColor: "transparent",
        margin: 0,
        padding: 0,
      }}
    >
      <svg
        width={isHovered ? "100" : "60"}
        height={isHovered ? "100" : "60"}
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          left: position.x,
          top: position.y,
          transform: "translate(-50%, -50%)",
          backgroundImage: "none",
          backgroundColor: "transparent",
          transition: "fill 0.3s, width 0.3s, height 0.3s",
        }}
      >
        <circle
          cx={25}
          cy={25}
          r={12}
          stroke="rgb(159, 157, 164)"
          fill={isHovered ? "#28282a" : "none"}
          opacity={isHovered ? "35%" : "100%"}
        />
      </svg>
    </div>
  );
};

export default Cursor;
