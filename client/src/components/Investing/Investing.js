import "./Investing.scss";
import Carousel from "../Carousel/Carousel";
import { useState, useEffect } from "react";
import axios from "axios";

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
  }, []);

  return (
    <section className="investing">
      <h2 className="investing__title">Investing 101</h2>
      <Carousel borderColor={borderColor} data={investingData} />
    </section>
  );
}

export default Investing;
