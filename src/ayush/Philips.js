import Latest from "./Latest";
import "./Philips.css";
function Philips() {
  const keep = [
    {
      thereSrc:
        "https://etimg.etb2bimg.com/thumb/msid-78248782,width-1200,resizemode-4/.jpg",
      price: "Beauty & Grooming Essentials Up To 30% Off",
      mrp: "Appliances Range To Flaunt YOur Look In Style",
      title: "",
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
            title={i.title}
            price={i.price}
            mrp={i.mrp}
          />
        ))}
      </div>
    </div>
  );
}
export default Philips;
