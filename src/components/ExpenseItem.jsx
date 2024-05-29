import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ItemWrapper = styled.div`
  display: inline-block;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  background-color: #f9f9f9;

  &:hover {
    background-color: #f0f0f0;
  }

  .date {
    margin-right: 15px;
  }

  .itemName {
    margin-right: 15px;
  }

  .amount {
    margin-right: 15px;
  }
`;

const Description = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  margin-right: 10px;
  color: #666;
`;

function ExpenseItem({ item }) {
  const navigate = useNavigate();
  const { id, date, item: itemName, amount, description } = item;

  const handleClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <ItemWrapper onClick={handleClick}>
      <p className="date">{date}</p>
      <p className="itemName">{itemName}</p>
      <p className="amount">{amount.toLocaleString()}원</p>
      <Description>비고: {description}</Description>
    </ItemWrapper>
  );
}

export default ExpenseItem;
