import "./Investing.scss";
import Carousel from "../Carousel/Carousel";
import { useState } from "react";
import axios from "axios";

function Investing() {
  const [borderColor, setBorderColor] = useState("green");

  return (
    <section className="investing">
      <h2 className="investing__title">Investing 101</h2>
      <Carousel borderColor={borderColor} />
    </section>
  );
}

export default Investing;
