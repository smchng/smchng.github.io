// import logo from './logo.svg';
import "./App.css";
import NavBar from "./NavBar.js";
import Home from "./Pages/Home.js";
import Pavilion from "./Pages/Projects/Pavilion.js";
import About from "./Pages/About.js";
import Gallery from "./Pages/Gallery.js";
import Footer from "./Footer.js";
import Error from "./Error.js";
import Cursor from "./Pages/Projects/Cursor/Cursor";
import { CursorProvider } from "./Pages/Projects/Cursor/CursorContext";
import { Route, Routes } from "react-router-dom";
import "animate.css";

function App() {
  return (
    <>
      <CursorProvider>
        <NavBar />
        <Cursor />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Pavilion" element={<Pavilion />} />
            <Route path="/About" element={<About />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </CursorProvider>
    </>
  );
}

export default App;
