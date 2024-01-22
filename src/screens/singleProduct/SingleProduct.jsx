import React, { useState } from "react";
import "./SingleProduct.css";
import ImageViewer from "../../components/imageViewer/ImageViewer";
import { singleProductsCard } from "../../constants/Products";
import Card from "../../components/card/Card";

function SingleProduct() {
  const [activeSize, setActiveSize] = useState("m");
  const [count, setCount] = useState(1);

  return (
    <div className="container">
      <div className="singleProduct">
        <div className="viewer">
          <div className="img">
            <img
              src="https://fourteen-eg.com/cdn/shop/files/98E22F8E-2E0E-408A-B5DD-9BB18E49E5A6.jpg?v=1699629416&width=823"
              alt=""
            />
          </div>
          <ImageViewer />
        </div>
        <div className="details">
          <span>FOURTEEN.EG</span>
          <h4>14 hoddie white</h4>
          <h6>LE 750.00 EGP</h6>

          <span>size</span>
          <div className="size">
            <li
              style={{
                backgroundColor: activeSize === "s" && "white",
                color: "#777",
              }}
              onClick={() => setActiveSize("s")}
            >
              s
            </li>
            <li
              style={{
                backgroundColor: activeSize === "m" && "white",
                color: "#777",
              }}
              onClick={() => setActiveSize("m")}
            >
              m
            </li>
            <li
              style={{
                backgroundColor: activeSize === "l" && "white",
                color: "#777",
              }}
              onClick={() => setActiveSize("l")}
            >
              L
            </li>
            <li
              style={{
                backgroundColor: activeSize === "x" && "white",
                color: "#777",
              }}
              onClick={() => setActiveSize("x")}
            >
              Xl
            </li>
          </div>

          <span>Quantity</span>
          <div className="quantity">
            <p
              style={{
                cursor: count > 1 ? "pointer" : "not-allowed",
                color: count > 1 ? "white" : "#777",
              }}
              onClick={() => count > 1 && setCount((prev) => (prev -= 1))}
            >
              -
            </p>
            <p>{count}</p>
            <p
              style={{ cursor: "pointer" }}
              onClick={() => setCount((prev) => (prev += 1))}
            >
              +
            </p>
          </div>
          <div className="sold">Sold out</div>
          <div className="buy">Buy it now</div>
        </div>
      </div>
      <div className="also">
        <h1>You may also like </h1>
        <div className="products">
          {singleProductsCard.map((e) => (
            <Card img={e.img} name={e.name} price={e.price} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
