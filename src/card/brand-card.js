import React from "react";
function BrandCard({ thumbSrc, brandSrc, title, mrp, price }) {
  return (
    <div>
      <div className="ayusha">
        <img src={thumbSrc} />
      </div>
      <div className="ayush1">
        <img src={brandSrc}></img>
        <h1>
          <p>{title}</p>
          <sup>₹</sup>
          <del>{mrp}</del>
          <sup>₹</sup>
          {price}
        </h1>
      </div>
    </div>
  );
}
export default BrandCard;
