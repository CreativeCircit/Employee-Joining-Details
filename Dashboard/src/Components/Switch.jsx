import React, { useState, useEffect } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { useAuth } from "../Contexts/AuthContext";

function ModeSwitch() {
  const {mode, setMode}=useAuth()
  

  useEffect(() => {
    localStorage.setItem("appMode", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === "corporate" ? "creative" : "corporate"));
  };

  return (
    <button
      onClick={toggleMode}
      className={`
        fixed   rounded-2xl text-3xl  shadow-xl transition-all duration-500 z-50
        flex items-center justify-center gap-2
        ${mode === "corporate" 
          ? "bg-slate-100 p-3 border-2 text-black bottom-6 right-6 border-slate-700 hover:text-white hover:bg-slate-800" // Professional style
          : " text-[#7e7e7e]  top-6 right-6 border-white " // Fun style
        }
      `}
    >
      <CiLocationArrow1 />
    </button>
  );
}

export default ModeSwitch;