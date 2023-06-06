import styles from "./weaverz.module.css";
function Weaverz() {
  return (
    <div className={styles["us"]}>
      <ul>
        <li>
          <span className={styles["ayush"]}>&times;</span>
        </li>
      </ul>
      <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19851008/2022/11/3/2a497631-607e-4e6c-8bbd-2689345811d81667468790432-DREAM-WEAVERZ-Black-Leather-Covered-Stainless-Steel-Paper-Bi-1.jpg"></img>
      <div className={styles["bad"]}>
        <p className={styles["dream"]}>DREAM WEAVERZ</p>
        <p className={styles["paper1"]}>
          Black Leather Covered Stainless Steel Paper
          <p className={styles["paper2"]}>Bin</p>
        </p>
      </div>
      <div className={styles["number5"]}>
        <span className={styles["mad"]}>
          <p className={styles["top"]}>₹749 &nbsp;</p>
          <del>₹1,499</del>
        </span>
        &nbsp;&nbsp;
        <span className={styles["land"]}>50%OFF</span>
      </div>
      <div className={styles["number6"]}></div>
      <div className={styles["number7"]}>
        <h4>Select Size</h4>
      </div>
      <div className={styles["number8"]}>
        <input type="text" className={styles["number8"]} disabled></input>
        <div className={styles["Onesize"]}>
          <p>Onesize</p>
        </div>
        <div className={styles["seller"]}>
          <p className={styles["body"]}>Seller:</p>
          <p className={styles["title"]}>Dream&nbsp;Weaverz</p>
        </div>
        <button className={styles["done"]}>DONE</button>
      </div>
    </div>
  );
}

export default Weaverz;
