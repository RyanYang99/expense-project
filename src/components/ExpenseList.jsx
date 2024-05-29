import { useSelector } from "react-redux";
import styled from "styled-components";
import ExpenseItem from "./ExpenseItem";

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function ExpenseList({ currentMonth }) {
  const expenseData = useSelector((state) => state.expense);
  const filteredData = expenseData.filter(
    (item) => new Date(item.date).getMonth() + 1 === currentMonth
  );

  return (
    <ListWrapper>
      {filteredData.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </ListWrapper>
  );
}

export default ExpenseList;
