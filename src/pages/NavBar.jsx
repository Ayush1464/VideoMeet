import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-black/80 border-b border-green-500/30 backdrop-blur-lg shadow-lg py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-400 drop-shadow-lg">
          VideoMeet 
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
