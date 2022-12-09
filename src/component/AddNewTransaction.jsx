import { useContext, useRef } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const AddNewTransaction = () => {
  const textEl = useRef();
  const amountEl = useRef();
  const { myFunction } = useContext(GlobalContext);

  function handleSubmit(e) {
    e.preventDefault();
    const NewData = {
      text: textEl.current.value,
      amount: amountEl.current.value,
    };
    myFunction({ type: "Add", newData: NewData });
  }
  return (
    <form className="form-group" onSubmit={handleSubmit}>
      <h4>Add New Transaction</h4>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="text">Text</label>
        <input type="text" id="text" placeholder="Enter Text..." ref={textEl} />
      </div>
      <div>
        <label htmlFor="amount">
          Amount(negative-expense, positive-income)
        </label>
        <input
          type="number"
          id="amount"
          placeholder="Enter Amount..."
          ref={amountEl}
        />
      </div>
      <button className="btn">Add Transaction</button>
    </form>
  );
};
