import React from "react";
import styles from "./termes.module.css";
function Login() {
  console.log(Login);
  return (
    <div className={styles["ayush"]}>
      <div className={styles["black"]}>
        <h3>
          Login <a>or</a> Signup
        </h3>
      </div>
      <div className={styles["blue"]}>
        <p>
          +91 |{" "}
          <input
            type="text"
            placeholder="mobile number"
            className={styles["login-input"]}
          ></input>
        </p>
      </div>
      <div className={styles["are"]}>
        <p>
          By continuing,I agree to the
          <a href="https://www.w3schools.com">Termes of Use</a>&nbsp;&&nbsp;
          <a href="https://www.w3schools.com">Privacy Policy</a>
        </p>
      </div>
      <button className={styles["click-button"]}>
        <p>CONTINUE</p>
      </button>
      <div className={styles["content"]}>
        <p>
          Have trouble logging in?{" "}
          <a href="https://www.youtube.com/">Get help</a>
        </p>
      </div>
    </div>
  );
}
export default Login;
