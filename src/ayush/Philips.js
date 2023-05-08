import Latest from "./Latest";
import "./Philips.css";
function Philips() {
  const keep = [
    {
      thereSrc:
        "https://images.unsplash.com/photo-1597459904558-4d0770ba4f54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlJTIwcG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80",
      price: "Beauty & Grooming Essentials Up To 30% Off",
      mrp: "Appliances Range To Flaunt Your Look In Style",
      thelaSrc: "https://logo-logos.com/2016/11/Philips_logo.png",
    },
    {
      thereSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWqPD-cYKD9lL9B5_uIe6JHIBrJ-GdgoCdCKVG62kxDrNNlQtCAR0W5PULkbLpYCtCIZA&usqp=CAU",
      price: "Beauty & Grooming Up To 30% Off",
      mrp: "Appliances Range To Flaunt YOur Look In Style",
      thelaSrc:
        "https://assets.weforum.org/organization/image/AEcrjHdylzSqxsV24NWG_7Hhpe8_d82W4b8CPybPPPE.jpg",
    },
    {
      thereSrc: "https://wallpaperaccess.com/full/2896886.jpg",
      price: "Beauty & Grooming Up To 30% Off",
      mrp: "Appliances Range To Flaunt YOur Look In Style",
      thelaSrc:
        "https://assets.weforum.org/organization/image/AEcrjHdylzSqxsV24NWG_7Hhpe8_d82W4b8CPybPPPE.jpg",
    },
    {
      thereSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBJa3PQKcyMRM0AwMiJG-7TdkzhrkISugfBKgDmm7BWYlzvIt3ns_BccC6YOI1Mh8Q-eo&usqp=CAU",
      price: "Beauty & Grooming Up To 30% Off",
      mrp: "Appliances Range To Flaunt YOur Look In Style",
      thelaSrc:
        "https://assets.weforum.org/organization/image/AEcrjHdylzSqxsV24NWG_7Hhpe8_d82W4b8CPybPPPE.jpg",
    },
  ];
  return (
    <div>
      <div className="top">
        <h2>LETEST IN BEAUTY & GROOMING</h2>
      </div>
      <div className="black">
        {keep.map((i) => (
          <Latest
            thereSrc={i.thereSrc}
            thelaSrc={i.thelaSrc}
            price={i.price}
            mrp={i.mrp}
          />
        ))}
      </div>
    </div>
  );
}
export default Philips;
