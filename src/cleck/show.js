import styles from "./container.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faGreaterThan,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";
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
        <div className={styles["class"]}>
          <FontAwesomeIcon
            icon={faSnowflake}
            className={styles["ayushkumar"]}
          />
          <p>Available Offers</p>
        </div>
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
        <div className={styles["yay"]}>
          <p>Yay!</p>
          <span>No convenience fee</span>
          <p>on this order.</p>
        </div>
      </div>
      <div className={styles["chackbox"]}>
        <div className={styles["are"]}>
          <input type="checkbox" className={styles["box"]} />
          <span className={styles["chack"]}>2/2 ITEMS SELECT</span>
        </div>
        <div className={styles["are1"]}>
          <p className={styles["price"]}>REMOVE</p>
          <p className={styles["const"]}>MOVE TO WISHLIST</p>
        </div>
      </div>
      <div className={styles["and"]}>
        <div className={styles["live"]}>
          <input type="checkbox" className={styles["part"]} />
          <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/19851008/2022/11/3/2a497631-607e-4e6c-8bbd-2689345811d81667468790432-DREAM-WEAVERZ-Black-Leather-Covered-Stainless-Steel-Paper-Bi-1.jpg"></img>
        </div>
        <div className={styles["good"]}>
          <ul>
            <li>
              <span className={styles["close"]}>&times;</span>
            </li>
          </ul>
          <p className={styles["dream"]}>DREAM WEAVERZ</p>
          <p className={styles["paper"]}>
            Black Leather Covered Stainless Steel Paper Bin
          </p>
          <p className={styles["sold"]}>Sold by:Dream Weaverz</p>

          <div className={styles["size"]}>
            <div className={styles["last"]}>
              <button className={styles["men"]}>
                Size:Onesize
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
            </div>
            <div className={styles["fast"]}>
              <button className={styles["work"]}>
                Qty:1
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
            </div>
          </div>
          <div className={styles["game"]}>
            <div className={styles["set"]}>
              <p>₹749</p>
            </div>
            <div className={styles["number"]}>
              <span className={styles["mad"]}>
                &nbsp; &nbsp;
                <del>₹1,499</del>
                &nbsp;
              </span>
              &nbsp;&nbsp;
              <span className={styles["land"]}>50% OFF</span>
            </div>
          </div>
          <div className={styles["small"]}>
            <div className={styles["return"]}>
              <span>14 days</span>
            </div>
            &nbsp;
            <p className={styles["space"]}>return available</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Show;
