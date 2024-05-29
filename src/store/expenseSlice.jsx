import { createSlice } from "@reduxjs/toolkit";
import fakeData from "../data/fakeData.json";

const expenseSlice = createSlice({
  name: "expense",
  initialState: fakeData,
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    updateExpense: (state, action) => {
      const { id, date, category, amount, description } = action.payload;
      const expense = state.find((item) => item.id === id);
      if (expense) {
        expense.date = date;
        expense.category = category;
        expense.amount = amount;
        expense.description = description;
      }
    },
    deleteExpense: (state, action) => {
      const id = action.payload;
      return state.filter((item) => item.id !== id);
    },
  },
});

export const { addExpense, updateExpense, deleteExpense } =
  expenseSlice.actions;

export default expenseSlice.reducer;
