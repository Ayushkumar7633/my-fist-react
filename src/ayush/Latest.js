import React from "react";
function Latest({ thelaSrc, thereSrc, title, price, mrp }) {
  console.log(title);

  return (
    <div>
      <div className="ayush">
        <div className="and">
          <img src={thereSrc} />
          <div className="kumar">
            <img src={thelaSrc} />
          </div>
          <h3>{title}</h3>
          <p>{price}</p>
          <p>{mrp}</p>
        </div>
      </div>
    </div>
  );
}
export default Latest;
