import React from "react";
function sunny1({ imageSrc, image1Src, title, mrp, price, item }) {
  return (
    <div>
      <div className="ayush1">
        <img src={imageSrc} />
      </div>
      <div className="ayush2">
        <img src={image1Src}></img>
        <div className="tall">
          {price}
          <div className="kit">
            <p>
              <em>{mrp}</em>
            </p>
            <h1>
              <p className="ten">
                {title}
                <sup>₹</sup>
                {item}
              </p>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
export default sunny1;
