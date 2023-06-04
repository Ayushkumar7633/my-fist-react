import React from "react";
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
                <del>₹1,499</del>
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
      <div className={styles["am"]}>
        <div className={styles["livemis"]}>
          <input type="checkbox" className={styles["livemise"]} />
          <img src="	https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/16071114/2022/12/11/0b3c8b51-c937-4b0f-b3d9-b28c869c3f1a1670740583113WLongWearPinkLipstick-PinkSync1.jpg"></img>
        </div>
        <div className={styles["goodli"]}>
          <ul>
            <li>
              <span className={styles["colose"]}>&times;</span>
            </li>
          </ul>
          <p className={styles["dream"]}>W</p>
          <p className={styles["paper"]}>
            Black Leather Covered Stainless Steel Paper Bin
          </p>
          <p className={styles["sold"]}>Long Wear Pink Lipstick - Pink Sync</p>

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
              <p>₹519</p>
            </div>
            <div className={styles["number"]}>
              <span className={styles["mad"]}>
                <del>₹649</del>
              </span>
              &nbsp;&nbsp;
              <span className={styles["land"]}>20% OFF</span>
            </div>
          </div>
          <div className={styles["small"]}>
            <div className={styles["return"]}>
              <span>Exchange Only</span>
            </div>
            &nbsp;
            <p className={styles["space"]}>return available</p>
          </div>
        </div>
      </div>
      <div className={styles["number0"]}>
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
          <input
            type="text"
            className={styles["red"]}
            value="1"
            disabled
          ></input>
          <input
            type="text"
            className={styles["red"]}
            value="2"
            disabled
          ></input>
          <input
            type="text"
            className={styles["red"]}
            value="3"
            disabled
          ></input>
          <input
            type="text"
            className={styles["red"]}
            value="4"
            disabled
          ></input>
          <input
            type="text"
            className={styles["red"]}
            value="5"
            disabled
          ></input>
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
export default Show;
