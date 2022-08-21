import "./Taxes.scss";
import Carousel from "../Carousel/Carousel";
import { useState, useEffect } from "react";
import axios from "axios";

function Taxes() {
  const [borderColor, setBorderColor] = useState("purple");
  const [taxData, setTaxData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:8080/accounts").then((response) => {
        setTaxData(response.data);
      });
    };
    fetchData();
  }, []);
  return (
    <section className="taxes">
      <h2 className="taxes__title">Taxes</h2>
      <Carousel borderColor={borderColor} data={taxData} />
    </section>
  );
}

export default Taxes;
