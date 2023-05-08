import React from "react";
function Latest({ thelaSrc, thereSrc, title, price, mrp }) {
  console.log(title);

  return (
    <div className="box">
      <div
        className="ayush"
        style={{ backgroundImage: "url(" + thereSrc + ")" }}
      ></div>
      <div className="and">
        <img src={thelaSrc} />
        <p className="keep">{price}</p>
        <div className="shop">
          <p>{mrp}</p>
        </div>
      </div>
    </div>
  );
}
export default Latest;
