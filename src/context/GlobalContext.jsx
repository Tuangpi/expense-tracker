import React, { createContext, useReducer, useState } from "react";

const DATA = {
  transaction: [
    {
      text: "asdf",
      amount: 200,
    },
    {
      text: "ass",
      amount: 33,
    },
    {
      text: "dfdf",
      amount: 56,
    },
  ],
};

export const GlobalContext = createContext();

export const AppReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return {
        transaction: [...state.transaction, action.newData],
      };
    default:
      return state;
  }
};

export const TransactionContext = ({ children }) => {
  const [data, myFunction] = useReducer(AppReducer, DATA);
  return (
    <GlobalContext.Provider value={{ data: data.transaction, myFunction }}>
      {children}
    </GlobalContext.Provider>
  );
};
