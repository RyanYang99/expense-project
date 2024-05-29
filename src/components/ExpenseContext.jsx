import { createContext, useState, useEffect } from "react";
import fakeData from "../data/fakeData.json";

const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [expenseData, setExpenseData] = useState(() => {
    const savedData = window.localStorage.getItem("expenseData");
    return savedData ? JSON.parse(savedData) : fakeData;
  });

  useEffect(() => {
    window.localStorage.setItem("expenseData", JSON.stringify(expenseData));
  }, [expenseData]);

  return (
    <ExpenseContext.Provider value={{ expenseData, setExpenseData }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseContext;
