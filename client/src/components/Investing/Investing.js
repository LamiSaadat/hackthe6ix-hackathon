import "./Investing.scss";
import Carousel from "../Carousel/Carousel";
import { useState, useEffect } from "react";
import axios from "axios";
import "aos/dist/aos.css";
import Aos from "aos";

function Investing() {
  const [borderColor, setBorderColor] = useState("green");
  const [investingData, setInvestingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:8080/investing").then((response) => {
        setInvestingData(response.data);
      });
    };
    fetchData();
    Aos.init({ duration: 600 });
  }, []);

  return (
    <section className="investing" id="investing" data-aos="fade-up">
      <h2 className="investing__title">Investing 101</h2>
      <Carousel borderColor={borderColor} data={investingData} />
    </section>
  );
}

export default Investing;
