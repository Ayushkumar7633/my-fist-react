import "./brands.css";
import BrandCard from "./card/brand-card";
function Brands() {
  const cards = [
    {
      thumbSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKMgKWZKZfP5NT9f_KiBZYK924FNKpV2FXMQ&usqp=CAU",
      brandSrc: "https://image3.mouthshut.com/images/imagesp/925738386s.jpg",
      title: "Kurta Scts",
      mrp: "1299",
      price: "499",
    },
    {
      thumbSrc:
        "https://fashionistaloves.com/wp-content/uploads/2019/05/Street-style-LFW-2018.jpg",
      brandSrc: "https://image3.mouthshut.com/images/imagesp/925738386s.png",
      title: "Kurtas",
      mrp: "699",
      price: "299",
    },
    {
      thumbSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgbs0oZmAnbajSsgcUG60ZAF7pDK713ckrTw&usqp=CAU",
      brandSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiKWJkmUfS2clN0gmTV6FrIOsiR_O6d40rqrncIaDYqeBegC3VNkQhyviO9BS-a7YSt7I&usqp=CAU",
      title: "Tops",
      mrp: "1299",
      price: "499",
    },
    {
      thumbSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QAVBtmJd3U8tWE3uzRMcS0m25k-8HBf0Fw&usqp=CAU",
      brandSrc:
        "https://m.thaiticketmajor.com/imgUpload/images/Untitled-1(108).jpg",
      title: "Dresses",
      mrp: "1499",
      price: "599",
    },
    {
      thumbSrc:
        "https://filmfare.wwmindia.com/content/2022/apr/karanjohar31650014232.jpg",
      brandSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKZdM6huCu-q8n8r0TUJYQTWKeLxvVtRaLyUiWVALtYq2EAuvoefyItgE9tti4FsCzsTI&usqp=CAU",
      title: "T-Shirts",
      mrp: "499",
      price: "199",
    },
    {
      thumbSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVMWNl2BTjYnOiTJCj7GICAEIzhDG4sd2YFEJvabrAUc9HXbglG1jSpOJE18kAuhrYnns&usqp=CAU",
      brandSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpwKU9yXg9QGHrvIKJZIOfd4RBwZFrxLnEfyKIWbTfiVceqXtO6pKe1jFOfkBmt0-kSpA&usqp=CAU",
      title: "Smart T-Shirts",
      mrp: "699",
      price: "299",
    },
    {
      thumbSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqbwrb5WYpweyLzF79Jtg2YZcI9IQXLpXwBZuvukWpUWDGGIR-VQ5o0o4Pm-h3E5xXnv4&usqp=CAU",
      brandSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GN8ReAEdq3KEraNEHdnw7YML5_JeDQ6klvx0rRgITQe6u5UiaQaNIovCbOU1juhUBV0&usqp=CAU",
      title: "Stylish T-Shirts",
      mrp: "699",
      price: "299",
    },
    {
      thumbSrc:
        "https://static.toiimg.com/thumb/msid-95529458,width-400,resizemode-4/95529458.jpg",
      brandSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2Mg5LHmF_s9_KOfBUuW9hGKSOSu5f_uXwIGeEDua0PpNfg0yuk9wDqOV8l01JVJd4ME&usqp=CAU",
      title: "Stylish Shirts",
      mrp: "1799",
      price: "699",
    },
    {
      thumbSrc:
        "https://static.tnn.in/thumb/msid-90559540,width-1280,height-720,resizemode-75/90559540.jpg",
      brandSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlosVNpPZkpV5Oi3OtT7R0OLmR5VIixkYB1KI-3PBy75pgAkknFIUEqdvC7R6qyVPVX_4&usqp=CAU",
      title: "Track Pants",
      mrp: "1499",
      price: "599",
    },
    {
      thumbSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVajFf55gjGS59rEszl7V6IdL7ReronW5qDQ&usqp=CAU",
      brandSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5RX9oBqBzIRveKO0N0ld4wTaSCiKvVSXuyPcw6DotQF6PUtvShuWIyMOK9kE7DyKycNY&usqp=CAU",
      title: "Lougewear",
      mrp: "599",
      price: "249",
    },
    {
      thumbSrc:
        "https://www.insidesport.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-31-at-4.38.20-PM.jpeg",
      brandSrc:
        "https://cdn.imgbin.com/5/7/13/imgbin-beach-volleyball-2017-logo-sport-volleyball-x1cun1BqScUgNe5qAXXDENKeW.jpg",
      title: "Jeans",
      mrp: "1699",
      price: "699",
    },
    {
      thumbSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ-_RUNOKa-spxCeVXcBuMHDWwTUAl1hQYTxkzmJ8snQvzzB4w3Ox1IgI-0b-xTP-N7wQ&usqp=CAU",
      brandSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKbVwbGYloTl8Uuvp24PODRtuN9bwVucZF37UN18ABnGvI1yqDPPa6SEPf4gO4STSzR_g&usqp=CAU",
      title: "Activewcar",
      mrp: "899",
      price: "399",
    },
    {
      thumbSrc:
        "https://cricreads.com/wp-content/uploads/2023/04/images-13.jpeg",
      brandSrc:
        "https://img.favpng.com/25/10/23/2018-fivb-beach-volleyball-world-tour-fivb-volleyball-men-s-world-championship-2013-fivb-beach-volleyball-world-tour-f-d-ration-internationale-de-volleyball-png-favpng-E9RN20n7zUiq7zB5s2FRZRQhZ.jpg",
      title: "Kurtas & Scts",
      mrp: "1299",
      price: "599",
    },
    {
      thumbSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBTwLLbC0vShA7npDbdn_z_1H25_cNEEts9Q&usqp=CAU",
      brandSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIbcZyu913EkWz4w-mGAG8oD_U8xsUrVon_OJ1kpLeVgN8XkC8XQuFiPrCWPN6PuZC8s8&usqp=CAU",
      title: "Trendy Jcans",
      mrp: "1499",
      price: "599",
    },
    {
      thumbSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpuzyCTYmmZBDNfU1GYDw9IUCfHSd89dklzw&usqp=CAU",
      brandSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdFEc0TTReBpK4NnAAUWn4w8ptcPZMw8MCrElaLMAKavaez96jLcidjQ3jmDTDLc88E8E&usqp=CAU",
      title: "aysuh",
      mrp: "499",
      price: "299",
    },
    {
      thumbSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM-x39ZHRWtTfzGQgTkuWqKC6sZxo3mHcdEQ&usqp=CAU",
      brandSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCiqbOU5LKkiCNfBGi-FHdRxr1J3EoHW5IwS3lVXAb52TRTRMzzB34qPwsNDrzaTybuTM&usqp=CAU",
      title: "kumar",
      mrp: "999",
      price: "599",
    },
  ];

  return (
    <div>
      <div className="top">
        <h2>BEST OF MYNTRA EXCLUSLVE BRANDS</h2>
      </div>
      <div className="black">
        {cards.map((o) => (
          <BrandCard
            thumbSrc={o.thumbSrc}
            brandSrc={o.brandSrc}
            title={o.title}
            mrp={o.mrp}
            price={o.price}
          />
        ))}
      </div>
    </div>
  );
}
export default Brands;
