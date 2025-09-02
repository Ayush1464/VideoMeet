import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VideoRoom from "./pages/VideoRoom";
import Navbar from "./pages/NavBar";
import Ayush from "./pages/Ayush";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:roomID" element={<VideoRoom />} />
        <Route path="/ayush" element={<Ayush />} />
      </Routes>
    </div>
  );
};

export default App;
