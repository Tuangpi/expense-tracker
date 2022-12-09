import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const History = () => {
  const { data } = useContext(GlobalContext);
  return (
    <div className="history-container">
      <h4>History</h4>
      <ul>
        {data.map((transaction, index) => {
          return <li key={index}>{transaction.text}</li>;
        })}
      </ul>
    </div>
  );
};
