import Take_look from "./take_look";
import "./take_look.css";
function Takea_look() {
  const test = [
    {
      thereSrc:
        "https://play-lh.googleusercontent.com/e8ypcKd8xhGO0W1D7meYYs9UFmXNRLgQHVFziX6jDU9lcobSoIjZ1PtoyOgBeUitI5Q=w526-h296-rw",
      title: "",
    },
    {
      thereSrc:
        "https://play-lh.googleusercontent.com/e8ypcKd8xhGO0W1D7meYYs9UFmXNRLgQHVFziX6jDU9lcobSoIjZ1PtoyOgBeUitI5Q=w526-h296-rw",
      title: "",
    },
    {
      thereSrc:
        "https://play-lh.googleusercontent.com/e8ypcKd8xhGO0W1D7meYYs9UFmXNRLgQHVFziX6jDU9lcobSoIjZ1PtoyOgBeUitI5Q=w526-h296-rw",
      title: "",
    },
    {
      thereSrc:
        "https://play-lh.googleusercontent.com/e8ypcKd8xhGO0W1D7meYYs9UFmXNRLgQHVFziX6jDU9lcobSoIjZ1PtoyOgBeUitI5Q=w526-h296-rw",
      title: "",
    },
    {
      thereSrc:
        "https://play-lh.googleusercontent.com/e8ypcKd8xhGO0W1D7meYYs9UFmXNRLgQHVFziX6jDU9lcobSoIjZ1PtoyOgBeUitI5Q=w526-h296-rw",
      title: "",
    },
    {
      thereSrc:
        "https://play-lh.googleusercontent.com/e8ypcKd8xhGO0W1D7meYYs9UFmXNRLgQHVFziX6jDU9lcobSoIjZ1PtoyOgBeUitI5Q=w526-h296-rw",
      title: "",
    },
    {
      thereSrc:
        "https://play-lh.googleusercontent.com/e8ypcKd8xhGO0W1D7meYYs9UFmXNRLgQHVFziX6jDU9lcobSoIjZ1PtoyOgBeUitI5Q=w526-h296-rw",
      title: "",
    },
    {
      thereSrc:
        "https://play-lh.googleusercontent.com/e8ypcKd8xhGO0W1D7meYYs9UFmXNRLgQHVFziX6jDU9lcobSoIjZ1PtoyOgBeUitI5Q=w526-h296-rw",
      title: "",
    },
    {
      thereSrc:
        "https://play-lh.googleusercontent.com/e8ypcKd8xhGO0W1D7meYYs9UFmXNRLgQHVFziX6jDU9lcobSoIjZ1PtoyOgBeUitI5Q=w526-h296-rw",
      title: "",
    },
    {
      thereSrc:
        "https://play-lh.googleusercontent.com/e8ypcKd8xhGO0W1D7meYYs9UFmXNRLgQHVFziX6jDU9lcobSoIjZ1PtoyOgBeUitI5Q=w526-h296-rw",
      title: "",
    },
  ];
  return (
    <div>
      <div className="black">
        {test.map((o) => (
          <Take_look thereSrc={o.thereSrc} />
        ))}
      </div>
      <div className="dots">
        {test.map((o) => (
          <div className="dot" onclick="kumar"></div>
        ))}
      </div>
    </div>
  );
}
export default Takea_look;
