import "./InvestmentTypes.scss";
import Carousel from "../Carousel/Carousel";
import { useState } from "react";

function InvestmentTypes() {
  const [borderColor, setBorderColor] = useState("blue");
  return (
    <section className="investments">
      <h2 className="investments__title">Investment Types</h2>
      <Carousel borderColor={borderColor} />
    </section>
  );
}

export default InvestmentTypes;
