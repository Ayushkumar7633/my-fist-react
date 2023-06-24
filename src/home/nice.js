import styles from "./nice.module.css";
export default function nice() {
  return (
    <div>
      <div className={styles["furnish"]}>
        <img src="https://www.tavolisedie.com/modules/ph_simpleblog/featured/173.jpg"></img>
        <div className={styles["furnish1"]}>
          <h1>YOUR HOME,</h1>
          <h2>WITH LOVE</h2>
          <h4>FURNISH IN STYLE</h4>
          <p>+ &nbsp;EXPLORE</p>
        </div>
      </div>
      <div className={styles["see"]}>
        <h4>NICE TO SEE YOU, COME ON IN!</h4>
      </div>
      <div className={styles["bed"]}>
        <img src="https://m.media-amazon.com/images/I/51XFMwDcEYL._AC_UF894,1000_QL80_.jpg"></img>
        <h4>Bed Lines</h4>
        <img src="https://www.re-thinkingthefuture.com/wp-content/uploads/2021/04/A3848-How-to-enhance-Soft-Furnishing-Aesthetics-in-your-house.jpg"></img>
        <h4>Furnishings</h4>
      </div>
      <div className={styles["bed"]}>
        <img src="https://www.thespruce.com/thmb/WS_-YTuVWrZjUai8yT4c1CVo51E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/decorating-in-art-deco-style-1976535-03-6a40998a14ef49e38cbbe0ca4ed7cdf9.jpg"></img>
        <h4>Art & Decor</h4>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2O71-hPONYehFljIc5aKQxpcB4dSmR8iSh87o6pUbopFlSHw6FNgQuJOfr4aDz6X5n04&usqp=CAU"></img>
        <h4>Lamps & Lighting</h4>
      </div>
      <div className={styles["bed"]}>
        <img src="https://www.thespruce.com/thmb/xIzyfrp-eWD3aCt5_l4r08iS3JM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/small-dining-room-ideas-5194506-hero-4925b02521e14904893178839e9a3ea9.jpg"></img>
        <h4>Art & Decor</h4>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvOklS8aXdbIZGdR32G96TqVRInGvs5Gudg&usqp=CAU"></img>
        <h4>Lamps & Lighting</h4>
      </div>
      <div className={styles["set"]}>
        <h1>Set Inspired..</h1>
        <h2 className={styles["take"]}>Trends to Take Home</h2>
      </div>
    </div>
  );
}
