import React, { createContext, useState } from "react";

export const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverExit = () => {
    setIsHovered(false);
  };

  return (
    <CursorContext.Provider value={{ isHovered, handleHover, handleHoverExit }}>
      {children}
    </CursorContext.Provider>
  );
};
