import React from "react";
import Masonry from "react-responsive-masonry";

const images = [
  "https://fourteen-eg.com/cdn/shop/files/B24112A8-3B69-4A94-A89D-4340B718B907.jpg?v=1699629415&width=823",
  "https://fourteen-eg.com/cdn/shop/files/96A73565-D638-41F1-81B3-000B22BA509D.jpg?v=1699629416&width=823",
  "https://fourteen-eg.com/cdn/shop/files/EA6BCCC8-9178-4032-8C53-7A56A0143686.jpg?v=1699629415&width=823",
];

function ImageViewer() {
  return (
    <Masonry columnsCount={2} gutter="10px">
      {images.map((image, i) => (
        <img key={i} src={image} style={{ width: "100%", display: "block" }} />
      ))}
    </Masonry>
  );
}

export default ImageViewer;
