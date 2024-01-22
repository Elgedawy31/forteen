import React from "react";
import "./Catalog.css";
import { ProductsCard } from "../../constants/Products";
import Card from "../../components/card/Card";
function Catalog() {
  return (
    <div className="catalog container">
      <h1>Products</h1>
      <div className="heading">
        <p>choose hoddie</p>
        <p>{ProductsCard.length} product</p>
      </div>
      <div className="products">
        {ProductsCard.map((e) => (
          <Card img={e.img} name={e.name} price={e.price} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
