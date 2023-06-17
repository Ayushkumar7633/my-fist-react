import { useState, useEffect } from "react";
import React, { useRef } from "react";
import styles from "./content.module.css";
function Container() {
  const [count, setCount] = useState(30);
  useEffect(() => {
    setTimeout(() => {
      if (count > 0) {
        setCount((count) => count - 1);
      }
    }, 1000);
  });
  const size = 4;
  const [otp, setOtp] = useState([]);

  const onOtpChange = (e, currentIndex) => {
    const value = Number(e.target.value?.trim());
    if (value >= 0 && value <= 9) {
      setOtp((o) => {
        o[currentIndex] = value;
        if (currentIndex < size - 1) {
          o[currentIndex + 1] = "";
        }
        return Array.from(o);
      });
      if (currentIndex < size - 1) {
        Array.from(e.target.parentElement.children)[currentIndex + 1].focus();
      }
    } else {
      setOtp((o) => {
        o[currentIndex] = "";
        return Array.from(o);
      });
    }
  };

  const onOtpFocus = (e, currentIndex) => {
    setOtp((o) => {
      o[currentIndex] = "";
      return Array.from(o);
    });
  };

  console.log(otp);
  return (
    <div className={styles["shop"]}>
      <div className={styles["kumar"]}>
        <img src="https://constant.myntassets.com/pwa/assets/img/3a438cb4-c9bf-4316-b60c-c63e40a1a96d1548071106233-mobile-verification.jpg"></img>
      </div>
      <div className={styles["ayush"]}>
        <h2>Verify with OTP</h2>
        <p>Sent to 7633862291</p>
      </div>
      <div className={styles["black"]}>
        {Array.from(Array(size).keys()).map((i) => (
          <input
            max={1}
            min={1}
            type="text"
            className={styles["login-input"]}
            onChange={(e) => onOtpChange(e, i)}
            value={otp[i]}
            onFocus={(e) => onOtpFocus(e, i)}
          ></input>
        ))}
      </div>
      <div className={styles["rasandtime"]}>
        <span>Resend OTP in:</span>
        00:{count}
      </div>
      <div className={styles["button"]}>
        <p>
          Log in using
          <a href="https://www.myntra.com/login/password?referer=https%3A%2F%2Fwww.myntra.com%2F%3Futm_source%3">
            Password
          </a>
        </p>
      </div>
      <div className={styles["get"]}>
        <p>
          Having trouble logging?
          <a href="https://www.myntra.com/recovery?referer=https%3A%2F%2Fwww.myntra.com%2F%3Futm_source%3Ddms_google&show=true">
            Get help
          </a>
        </p>
      </div>
    </div>
  );
}
export default Container;
