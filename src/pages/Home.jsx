import { useContext } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import ExpenseList from "../components/ExpenseList";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseContext from "../components/ExpenseContext";
import { addExpense } from "../store/expenseSlice";
import { useDispatch } from "react-redux";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

function Home({ currentMonth, onChangeMonth }) {
  const { setExpenseData } = useContext(ExpenseContext);
  const dispatch = useDispatch();

  const handleAddExpense = (newExpense) => {
    setExpenseData((prevData) => [...prevData, newExpense]);
    dispatch(addExpense(newExpense));
  };

  return (
    <Container>
      <Header currentMonth={currentMonth} onChangeMonth={onChangeMonth} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList currentMonth={currentMonth} />
    </Container>
  );
}

export default Home;
