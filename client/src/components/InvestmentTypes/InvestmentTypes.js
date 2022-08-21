import "./InvestmentTypes.scss";
import Carousel from "../Carousel/Carousel";
import { useState, useEffect } from "react";
import axios from "axios";
import "aos/dist/aos.css";
import Aos from "aos";

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
    Aos.init({ duration: 600 });
  }, []);
  return (
    <section className="investments" id="investment-types" data-aos="fade-up">
      <h2 className="investments__title">Investment Types</h2>
      <Carousel borderColor={borderColor} data={investmentsData} />
    </section>
  );
}

export default InvestmentTypes;
