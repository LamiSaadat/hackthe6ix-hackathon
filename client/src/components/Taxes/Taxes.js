import "./Taxes.scss";
import Carousel from "../Carousel/Carousel";
import { useState, useEffect } from "react";
import axios from "axios";
import "aos/dist/aos.css";
import Aos from "aos";

function Taxes() {
  const [borderColor, setBorderColor] = useState("purple");
  const [taxData, setTaxData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:8080/taxes").then((response) => {
        setTaxData(response.data);
      });
    };
    fetchData();
    Aos.init({ duration: 600 });
  }, []);
  return (
    <>
      <a id="taxes"></a>
      <section className="taxes" data-aos="fade-up">
        <h2 className="taxes__title">Taxes</h2>
        <Carousel borderColor={borderColor} data={taxData} />
      </section>
    </>
  );
}

export default Taxes;
