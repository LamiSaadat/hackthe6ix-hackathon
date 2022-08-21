import "./InvestmentTypes.scss";
import Carousel from "../Carousel/Carousel";
import { useState, useEffect } from "react";
import axios from "axios";

function InvestmentTypes() {
  const [borderColor, setBorderColor] = useState("blue");
  const [investmentsData, setInvestmentsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:8080/investments").then((response) => {
        setInvestmentsData(response.data);
      });
    };
    fetchData();
  }, []);
  return (
    <section className="investments">
      <h2 className="investments__title">Investment Types</h2>
      <Carousel borderColor={borderColor} data={investmentsData} />
    </section>
  );
}

export default InvestmentTypes;
