import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
function Hero() {
  const navigate = useNavigate()
  return (
    <div className="hero">
      <button onClick={() => navigate('catalog')}>shop now</button>
    </div>
  );
}

export default Hero;
