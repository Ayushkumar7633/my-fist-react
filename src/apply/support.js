import React from "react";
import styles from "./know.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
function Support() {
  return (
    <div className={styles["body"]}>
      <div className={styles["box"]}>
        <FontAwesomeIcon icon={faTag} />
        <p>Apply Coupons</p>
        <button className={styles["shop"]}>
          <h4>Apply</h4>
        </button>
      </div>
      <div className={styles["ayush"]}></div>
      <div className={styles["blue"]}></div>
      <div className={styles["click-button"]}>
        <p>
          <a>Login</a>
          &nbsp;to get upto ₹300 OFF on first order
        </p>
      </div>
      <div className={styles["mark"]}>
        <p>Support TRANSFORMATIVE SOCIAL WORK IN INDIA</p>
      </div>
      <div className={styles["checkbox"]}>
        <input type="checkbox" className={styles["checkbox"]}></input>
        <p>Support</p>
      </div>
      <div className={styles["radius"]}>
        <input
          type="text"
          className={styles["red"]}
          value="₹10"
          disabled
        ></input>
        <input
          type="text"
          className={styles["keep"]}
          value="₹50"
          disabled
        ></input>
        <input
          type="text"
          className={styles["pink"]}
          value="₹100"
          disabled
        ></input>
      </div>
      <div className={styles["center"]}>
        <a href="https://www.google.com/search?q=rupee+symbol&oq=r&aqs=chrome.0.69i59j69i57j35i39i650j69i60l5.1167j1j7&sourceid=chrome&ie=UTF-8">
          Know More
        </a>
      </div>
      <div className={styles["item"]}>
        <p>PRICE DETAILS(1 Item)</p>
      </div>
      <div className={styles["total"]}>
        <p>Total MRP</p>
        <p>₹1,499</p>
      </div>
      <div className={styles["discount"]}>
        <p>Discount on MRP</p>
        <p>-₹1750/</p>
      </div>
      <div className={styles["coupon"]}>
        <p>Coupon Discount</p>
        <a href="">Apply Coupon</a>
      </div>
      <div className={styles["fee"]}>
        <p>
          Convenience Fee <a href="https://www.google.com/">Know More</a>
        </p>
        <p>₹99</p>
      </div>
      <div className={styles["kumar"]}>
        <p>Total Amount</p>
        <p>₹848</p>
      </div>
      <button className={styles["button"]}>
        <p>PLACE ORDER</p>
      </button>
    </div>
  );
}

export default Support;
