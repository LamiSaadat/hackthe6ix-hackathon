import "./AccountTypes.scss";
import Carousel from "../Carousel/Carousel";
import { useState, useEffect } from "react";
import axios from "axios";
import "aos/dist/aos.css";
import Aos from "aos";

function AccountTypes({ data }) {
  const [borderColor, setBorderColor] = useState("light-green");
  const [accountData, setAccountData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:8080/accounts").then((response) => {
        setAccountData(response.data);
      });
    };
    fetchData();
    Aos.init({ duration: 600 });
  }, []);

  return (
    <>
      <a id="account-types"></a>
      <section className="accounts" data-aos="fade-up">
        <h2 className="accounts__title">Account Types</h2>
        <Carousel borderColor={borderColor} data={accountData} />
      </section>
    </>
  );
}

export default AccountTypes;
