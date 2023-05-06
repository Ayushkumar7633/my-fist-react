import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./looking.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function Looking_image() {
  return (
    <div className="ayush">
      <div className="card">
        <h1 className="ak">03</h1>
        <div className="last">
          <h1 className="kumar">Review</h1>
          <div className="border"></div>
        </div>
      </div>
      <div className="ayush1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO-RXWYvZ16B8MoUeoWo1JF-rs6cZDZajOeTEBSt28VeePuasJLnQ8pfPy6IvUZ-Qnvzs&usqp=CAU"
          alt="a"
        />
        <div className="black">
          <div className="akkumar">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="store">
            <h1>80%</h1>
          </div>
        </div>
      </div>
      <div className="ayush2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAD1_1vt5RmCnArxYx-wwynH_Tzu9qlS9yI_3FjFuPWzn-VTAQzdm08Zg0vI5gmLUlrNw&usqp=CAU"
          alt="b"
        />
        <div className="shop">
          <div className="key">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="yellow">
            <h1>95%</h1>
          </div>
        </div>
      </div>
      <div className="ayush3">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqvPjeq1rAu2wjEINj-w_TfGNEOzFPr2fvNFxfxOOCBflO-v0F9D2A1xJi4KmDqq3V3ZI&usqp=CAU"
          alt="c"
        />
        <div className="grapes">
          <div className="guava">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="white">
            <h1>90%</h1>
          </div>
        </div>
      </div>
      <div className="ayush4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Qb5YUOnjOw0x3MJBJt0sY6LqHAs62EKtAzlP0eAlu453eP-i83BgmwVittlkFxt46v0&usqp=CAU"
          alt="e"
        />
        <div className="red">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div className="blue">
          <h1>95%</h1>
        </div>
      </div>
    </div>
  );
}
export default Looking_image;
