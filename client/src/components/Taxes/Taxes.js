import "./Taxes.scss";
import Carousel from "../Carousel/Carousel";
import { useState } from "react";

function Taxes() {
  const [borderColor, setBorderColor] = useState("purple");

  return (
    <section className="taxes">
      <h2 className="taxes__title">Taxes</h2>
      <Carousel borderColor={borderColor} />
    </section>
  );
}

export default Taxes;
