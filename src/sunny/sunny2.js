import Sunny1 from "./sunny1";
import "./sunny1.css";
function Sunny2() {
  const shop = [
    {
      imageSrc:
        "https://img.freepik.com/free-vector/invitation-with-decorative-pattern_1048-3694.jpg?w=740&t=st=1682947300~exp=1682947900~hmac=9231405e21c4d6373dbba49e9c61cb92ce8b2d935eeac3b15bccd749390bec2c",
      image1Src:
        "https://rukminim1.flixcart.com/image/832/832/l2urv680/shoe/o/i/2/6-5555-xtoon-white-original-image34eajjz4bpg.jpeg",
      mrp: "Casual Shoes",
      title: "UNDER",
      item: "1499",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-vector/invitation-with-decorative-pattern_1048-3694.jpg?w=740&t=st=1682947300~exp=1682947900~hmac=9231405e21c4d6373dbba49e9c61cb92ce8b2d935eeac3b15bccd749390bec2c",
      image1Src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuBCJTSDr7GZZ6byvpSbZeeDXUGiFdLR5zuA&usqp=CAU",
      mrp: "Dresses",
      title: "UNDER",
      item: "699",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-vector/invitation-with-decorative-pattern_1048-3694.jpg?w=740&t=st=1682947300~exp=1682947900~hmac=9231405e21c4d6373dbba49e9c61cb92ce8b2d935eeac3b15bccd749390bec2c",
      image1Src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3p0LNCGxOGdY6zSmU2_cPL-d-PxYGIJyyrw&usqp=CAU",
      mrp: "Flats & Heels",
      title: "UNDER",
      item: "1299",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-vector/invitation-with-decorative-pattern_1048-3694.jpg?w=740&t=st=1682947300~exp=1682947900~hmac=9231405e21c4d6373dbba49e9c61cb92ce8b2d935eeac3b15bccd749390bec2c",
      image1Src:
        "https://m.media-amazon.com/images/I/51CMVjp0HUL._AC_SY580_.jpg",
      mrp: "Flip-Flops",
      title: "UNDER",
      item: "200",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-vector/invitation-with-decorative-pattern_1048-3694.jpg?w=740&t=st=1682947300~exp=1682947900~hmac=9231405e21c4d6373dbba49e9c61cb92ce8b2d935eeac3b15bccd749390bec2c",
      image1Src:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/jean/z/7/d/30-shi-b0212-stade-wh3000-fur-button-veneto-brooks-original-imaghczxzmceuhzq.jpeg?q=70",
      mrp: "Jeans",
      title: "UNDER",
      item: "899",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-vector/invitation-with-decorative-pattern_1048-3694.jpg?w=740&t=st=1682947300~exp=1682947900~hmac=9231405e21c4d6373dbba49e9c61cb92ce8b2d935eeac3b15bccd749390bec2c",
      image1Src:
        "https://p16.resso.me/img/tos-alisg-i-0000/6b6577f46046459abf2fcea8cdcd54aa~c5_500x500.jpg",
      mrp: "Jeans",
      title: "UNDER",
      item: "899",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-vector/invitation-with-decorative-pattern_1048-3694.jpg?w=740&t=st=1682947300~exp=1682947900~hmac=9231405e21c4d6373dbba49e9c61cb92ce8b2d935eeac3b15bccd749390bec2c",
      image1Src:
        "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/1/tr:w-270,/c1b0104AUREL00000555_1.jpg?rnd=20200526195200",
      mrp: "Kurta Sets",
      title: "UNDER",
      item: "999",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-vector/invitation-with-decorative-pattern_1048-3694.jpg?w=740&t=st=1682947300~exp=1682947900~hmac=9231405e21c4d6373dbba49e9c61cb92ce8b2d935eeac3b15bccd749390bec2c",
      image1Src:
        "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/1/6/tr:w-270,/1603104AUREL00000554_1.jpg?rnd=20200526195200",
      mrp: "Kurtas",
      title: "UNDER",
      item: "599",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-vector/invitation-with-decorative-pattern_1048-3694.jpg?w=740&t=st=1682947300~exp=1682947900~hmac=9231405e21c4d6373dbba49e9c61cb92ce8b2d935eeac3b15bccd749390bec2c",
      image1Src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUaLQaslUg8kQeyj31q54Vj1-Fau64Rd3FTdKkkIUiucy-0YvbVNm0Hk3Vn9m-h5pCSPM&usqp=CAU",
      mrp: "Shirts",
      title: "UNDER",
      item: "599",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-vector/invitation-with-decorative-pattern_1048-3694.jpg?w=740&t=st=1682947300~exp=1682947900~hmac=9231405e21c4d6373dbba49e9c61cb92ce8b2d935eeac3b15bccd749390bec2c",
      image1Src:
        "https://rukminim1.flixcart.com/image/832/832/xif0q/kids-shoe/8/b/s/3c-new-ld-foot-led-yl-12-18-months-prattle-foot-original-imagj846gr8f6gyc.jpeg?q=70",
      mrp: "Sports Shoes",
      title: "UNDER",
      item: "1499",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-vector/invitation-with-decorative-pattern_1048-3694.jpg?w=740&t=st=1682947300~exp=1682947900~hmac=9231405e21c4d6373dbba49e9c61cb92ce8b2d935eeac3b15bccd749390bec2c",
      image1Src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6UbmhOosZJxoIUDPnaUfIKMGG9i52dq2rNvhCPFDxdLO3hsjpiFoINLbFjmFVz97Aig&usqp=CAU",
      mrp: "Tops & Tees",
      title: "UNDER",
      item: "599",
    },
    {
      imageSrc:
        "https://img.freepik.com/free-vector/invitation-with-decorative-pattern_1048-3694.jpg?w=740&t=st=1682947300~exp=1682947900~hmac=9231405e21c4d6373dbba49e9c61cb92ce8b2d935eeac3b15bccd749390bec2c",
      image1Src:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwp7OavnBJb4DRgNkMCGJCqs98cCMkucsY9Q5ynWgXjh174qipNDqbvgjNi4W9QlmX84M&usqp=CAU",
      mrp: "T-Shirts",
      title: "UNDER",
      item: "399",
    },
  ];

  return (
    <div>
      <div className="center">
        <h2>BUDGET BUYS</h2>
        <p>
          <em>Sunny Smiles Guaranteed</em>
        </p>
      </div>
      <div className="red">
        {shop.map((o) => (
          <Sunny1
            imageSrc={o.imageSrc}
            image1Src={o.image1Src}
            title={o.title}
            mrp={o.mrp}
            price={o.price}
            item={o.item}
          />
        ))}
      </div>
    </div>
  );
}
export default Sunny2;
