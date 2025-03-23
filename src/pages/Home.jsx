import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleJoin = () => {
    if (input.trim()) {
      navigate(`/room/${input}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-6">
      {/* Outer Glowing Box */}
      <div className="relative bg-black/30 backdrop-blur-xl shadow-lg border border-green-400/40 rounded-3xl p-8 w-full max-w-lg transform transition-all duration-300 hover:scale-105 hover:shadow-green-500/30">
        
        {/* Neon Glowing Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-transparent to-green-500 opacity-20 blur-xl rounded-3xl"></div>

        {/* Main Content */}
        <h2 className="text-5xl font-extrabold text-green-400 text-center mb-6 drop-shadow-lg tracking-wide">
          Enter Room 🚀
        </h2>
        <p className="text-lg text-green-300 text-center mb-6 opacity-80">
          Connect instantly with your friends!
        </p>

        <div className="flex flex-col items-center space-y-6">
          {/* Input Field */}
          <input
            type="text"
            placeholder="Enter Room ID"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-3 text-lg bg-gray-900 text-green-300 placeholder-green-500 rounded-xl border border-green-400 focus:outline-none focus:ring-4 focus:ring-green-400 transition-all shadow-md shadow-green-500/20"
          />

          {/* Join Button */}
          <button
            onClick={handleJoin}
            className="w-full bg-gradient-to-r from-green-500 to-green-700 text-black font-bold py-3 rounded-xl text-lg shadow-lg shadow-green-500/30 hover:scale-110 transform transition-all duration-300 hover:shadow-green-400"
          >
            ✅ Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
