import "./AccountTypes.scss";
import Carousel from "../Carousel/Carousel";
import { useState } from "react";

function AccountTypes() {
  const [borderColor, setBorderColor] = useState("light-green");
  return (
    <section className="accounts">
      <h2 className="accounts__title">Account Types</h2>
      <Carousel borderColor={borderColor} />
    </section>
  );
}

export default AccountTypes;
