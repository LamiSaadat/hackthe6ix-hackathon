import "./Info.scss";

import PersonalFinance from "../../components/PersonalFinance/PersonalFinance";
import FinanceDefinition from "../../components/FinanceDefinition/FinanceDefinition";
import Options from "../../components/Options/Options";
import Investing from "../../components/Investing/Investing";
import AccountTypes from "../../components/AccountTypes/AccountTypes";
import InvestmentTypes from "../../components/InvestmentTypes/InvestmentTypes";
import Taxes from "../../components/Taxes/Taxes";

function Info() {
  return (
    <>
      <PersonalFinance />
      <FinanceDefinition />
      <Options />
      {/* <Investing /> */}
      <AccountTypes />
      <InvestmentTypes />
      {/* <Taxes /> */}
    </>
  );
}

export default Info;
