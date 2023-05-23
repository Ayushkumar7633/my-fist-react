import React from "react";
import styles from "./container.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
function Show() {
  return (
    <div className={styles["black"]}>
      <div className={styles["make"]}>
        <p>Check delivery time & services</p>
        <button className={styles["click-button"]}>
          <span>ENTER PIN CODE</span>
        </button>
      </div>
      <div className={styles["login-input"]}>
        <FontAwesomeIcon icon={faSnowflake} className={styles["ayushkumar"]} />
        <p>Available Offers</p>
        <li>
          <span>
            10% Instant Discount on SBI Credit Cards on a min spend of Rs 3,000.
            TCA
          </span>
        </li>
        <button className={styles["container_ayush"]}>
          <a href="">Show More</a>
        </button>
      </div>
      <div className={styles["center"]}>
        <img src="https://constant.myntassets.com/checkout/assets/img/ship-free.webp"></img>
        <p>Yay!</p>
        <span>No convenience fee</span>
        <p>on this order.</p>
      </div>
      <div className={styles["chackbox"]}>
        <input type="checkbox" className={styles["box"]} />
        <span>2/2 ITEMS SELECTED</span>
        <p>REMOVE</p>
        <p>MOVE TO WISHLIST</p>
      </div>
    </div>
  );
}

export default Show;
