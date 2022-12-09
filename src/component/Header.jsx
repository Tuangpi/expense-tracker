import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const Header = () => {
  const { data } = useContext(GlobalContext);
  const income = data.reduce((result, item) => (result += item.amount), 0);
  return (
    <div>
      <h4 className="header-expense">Expense Tracker</h4>
      <div className="balance">Your Balance</div>
      <div className="dollar-md">$0.00</div>
      <div className="head-container">
        <div className="right">
          <div>Income</div>
          <div>{income}</div>
        </div>
        <div className="divider"></div>
        <div className="left">
          <div>Expense</div>
          <div>$0.00</div>
        </div>
      </div>
    </div>
  );
};
