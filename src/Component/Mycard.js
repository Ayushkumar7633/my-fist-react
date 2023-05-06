import React from "react";
import "./Mycard.css";
const Mycard = ({ image, title }) => {
  let width,
    box = document.querySelector(".product_container");

  if (box) {
    width = box.clientWidth;
  } else {
    width = window.innerWidth;
  }

  return (
    <div className="mycard" style={{ minWidth: width + "px" }}>
      <div className="ayush">
        <img src={image}></img>
      </div>
    </div>
  );
};
export default Mycard;
