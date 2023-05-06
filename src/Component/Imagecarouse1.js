import React, { useEffect, useState } from "react";
import Mycard from "./Mycard.js";
import "./Imagecarouse1.css";
const Imagecarouse1 = () => {
  let [activeCard, setActiveCard] = useState(0);
  let [timer, setTimer] = useState(0);

  const shop = [
    {
      image:
        "https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg",
      title: "",
    },
    {
      image: "https://wallpaperaccess.com/full/1622642.jpg",
      title: "",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnfVd491u7tI08brXe27xGKZSD6UhmDW3XQ&usqp=CAU",
      title: "",
    },
    {
      image:
        "https://webneel.com/daily/sites/default/files/images/daily/09-2013/22-most-amazing-photos-sunrise.preview.jpg",
      title: "",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuwF105_z4KSOLmY6eY4Hue09P0c9szbAHR8LTpYDgjszqBe6ZydVwMz5cAUPS3KRmQDc&usqp=CAU",
      title: "",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRwVWy3JAgWVAdF6yV5fB7mtxMLb-LwVsycfu5Hogi40thbKZXdIDPFH6oMXOws2uB3lQ&usqp=CAU",
      title: "",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzR88cNo9DQ4YqWy_nOZf3MrpbAdi177-2TIiYSnMB2dQJ32DO-DJaWxU-R99uCC3Sbjo&usqp=CAU",
      title: "",
    },
    {
      image:
        "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",
      title: "",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxN_-5v3Uk6gqsbNmATxXBJB6ZhX3js4aQ6aH-dqeYV7x5HNvV8j_0Vmj5nC85xEjWfg&usqp=CAU",
      title: "",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1MJE8e4WC1bXffvA0EwW9K_5ZkQZYvfzdSl2mg1_a6nDJXU_YmoEe7DHat56xNwF08JE&usqp=CAU",
      title: "",
    },
  ];

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        if (activeCard == shop.length - 1) {
          btnpressdot(0);
        } else {
          btnpressdot(activeCard + 1);
        }
      }, 5000)
    );
    return () => setTimer(null);
  }, [activeCard]);

  const btnpressdot = (dotNo) => {
    let box = document.querySelector(".product_container");
    let width = box.clientWidth;
    box.scrollLeft = width * dotNo;
    setActiveCard(dotNo);
  };

  const btnpressprev = () => {
    let box = document.querySelector(".product_container");
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };

  const btnpressnext = () => {
    let box = document.querySelector(".product_container");
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };
  return (
    <div>
      <div className="product_carouse1">
        <div className="product_container">
          {shop.map((o) => (
            <Mycard image={o.image} title={o.title} />
          ))}
        </div>
      </div>
      <div className="dots">
        {shop.map((o, index) => (
          <div
            className={`dot ${index == activeCard ? "active" : ""}`}
            onClick={() => btnpressdot(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default Imagecarouse1;
