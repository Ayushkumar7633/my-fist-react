import React, { memo } from "react";

function Offer() {
  return (
    <div className={styles["your"]}>
      <div className={styles["offer"]}>
        <div className={styles["bag"]}>
          <img src="https://constant.myntassets.com/checkout/assets/img/additional-offer.webp"></img>
          <button>
            <p>4 Offers On Your Bag</p>
          </button>
          <div className={styles["tag"]}>
            <FontAwesomeIcon icon={faGreaterThan} />
          </div>
        </div>
      </div>
      <div className={styles["click12"]}>
        <ul>
          <li>
            <span className={styles["ayush"]}>&times;</span>
          </li>
        </ul>
        <div className={styles["click"]}>
          <div className={styles["click13"]}>
            <p className={styles["click2"]}>Offers on your bag</p>
            <p className={styles["click6"]}>0/4 Offers Applied</p>
          </div>
          <div className={styles["borderradius"]}></div>
          <div className={styles["border18"]}>
            <div className={styles["border8"]}>
              <img src="https://gumlet.assettype.com/afaqs%2F2021-01%2F15f5f827-8e29-4520-af8d-a0f353b8da17%2Fimages.png?auto=format%2Ccompress&w=1200"></img>
              <p className={styles["key"]}>10% off upto ₹150</p>
              <p className={styles["key1"]}>
                Buy from selected catalogue to get additional off
              </p>
              <a href="" className={styles["keys"]}>
                VIEW ITEMS
              </a>
            </div>
            <div className={styles["border8"]}>
              <img src="https://gumlet.assettype.com/afaqs%2F2021-01%2F15f5f827-8e29-4520-af8d-a0f353b8da17%2Fimages.png?auto=format%2Ccompress&w=1200"></img>
              <p className={styles["key"]}>10% off upto ₹150</p>
              <p className={styles["key1"]}>
                Buy from selected catalogue to get additional off
              </p>
              <a href="" className={styles["keys"]}>
                VIEW ITEMS
              </a>
            </div>
            <div className={styles["border8"]}>
              <img src="https://gumlet.assettype.com/afaqs%2F2021-01%2F15f5f827-8e29-4520-af8d-a0f353b8da17%2Fimages.png?auto=format%2Ccompress&w=1200"></img>
              <p className={styles["key"]}>10% off upto ₹150</p>
              <p className={styles["key1"]}>
                Buy from selected catalogue to get additional off
              </p>
              <a href="" className={styles["keys"]}>
                VIEW ITEMS
              </a>
            </div>
            <div className={styles["border8"]}>
              <img src="https://gumlet.assettype.com/afaqs%2F2021-01%2F15f5f827-8e29-4520-af8d-a0f353b8da17%2Fimages.png?auto=format%2Ccompress&w=1200"></img>
              <p className={styles["key"]}>10% off upto ₹150</p>
              <p className={styles["key1"]}>
                Buy from selected catalogue to get additional off
              </p>
              <a href="" className={styles["keys"]}>
                VIEW ITEMS
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Offer);
