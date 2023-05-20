import React from "react";

const Error = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: "3rem",
          color: "#28282a",
          fontFamily: "Kepler-std, serif",
          margin: "3rem 0 0 38px",
        }}
      >
        OOPS! 404 - PAGE NOT FOUND
      </h1>
      <p
        style={{
          color: "#28282a",
          fontFamily: "Kepler-std, serif",
          margin: "1rem 0 0 38px",
        }}
      >
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default Error;
