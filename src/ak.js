import React, { useState } from "react";
import "./ak.css";
function Ak() {
  const [count, setCount] = useState(0);
  return (
    <div className="blue">
      {Array.from(Array(count).keys()).map(() => (
        <div className="black"></div>
      ))}
      <button onClick={() => setCount(count + 1)}>add</button>
    </div>
  );
}

export default Ak;
