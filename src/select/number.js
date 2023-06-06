import styles from "./number.module.css";
function Number() {
  return (
    <div className={styles["number"]}>
      <ul>
        <li>
          <span className={styles["close"]}>&times;</span>
        </li>
      </ul>
      <div className={styles["select"]}>
        <p>Select Quantity</p>
        <div className={styles["border"]}></div>
      </div>
      <div className={styles["number2"]}>
        <input type="text" className={styles["red"]} value="1" disabled></input>
        <input type="text" className={styles["red"]} value="2" disabled></input>
        <input type="text" className={styles["red"]} value="3" disabled></input>
        <input type="text" className={styles["red"]} value="4" disabled></input>
        <input type="text" className={styles["red"]} value="5" disabled></input>
        <div className={styles["number1"]}>
          <input
            type="text"
            className={styles["red"]}
            value="6"
            disabled
          ></input>
          <input
            type="text"
            className={styles["red"]}
            value="7"
            disabled
          ></input>
          <input
            type="text"
            className={styles["red"]}
            value="8"
            disabled
          ></input>
          <input
            type="text"
            className={styles["red"]}
            value="9"
            disabled
          ></input>
          <input
            type="text"
            className={styles["red"]}
            value="10"
            disabled
          ></input>
        </div>
      </div>
      <button className={styles["button"]}>
        <p>DONE</p>
      </button>
    </div>
  );
}

export default Number;
