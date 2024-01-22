import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
function Card({ img, name, price }) {
    const navigation = useNavigate()
  return (
    <div className="card">
      <img src={img} alt=""  onClick={() => navigation('/product')}/>
      <div className="name">{name}</div>
      <div className="price">le {price}.00 egy</div>
    </div>
  );
}

export default Card;
