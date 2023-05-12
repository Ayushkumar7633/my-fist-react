import React from "react";
import styles from "./Philips.module.css";
function Latest({ thelaSrc, thereSrc, title, price, mrp, kumar, blue }) {
  console.log(title);
  return (
    <div className={styles["box"]}>
      <div
        className={styles["ayush"]}
        style={{ backgroundImage: "url(" + thereSrc + ")" }}
      ></div>
      <div className={styles["and"]}>
        <img src={thelaSrc} />
        <p className={styles.keep}>{price}</p>
        <div className={styles["larg"]}>
          <p>{blue}</p>
        </div>
        <div className={styles["shop"]}>
          <p>{mrp}</p>
        </div>
        <div className={styles["man"]}>
          <p>{kumar}</p>
        </div>
      </div>
    </div>
  );
}
export default Latest;
