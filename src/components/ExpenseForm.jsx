import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;

  input {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    padding: 5px 10px;
    border: none;
    background-color: #4285f4;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  }
`;

function ExpenseForm({ onAddExpense }) {
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      id: uuidv4(),
      date,
      item,
      amount: parseInt(amount),
      description,
    };

    onAddExpense(newExpense);

    setDate("");
    setItem("");
    setAmount("");
    setDescription("");
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        required
        placeholder="항목"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
        placeholder="금액"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="내용"
      />
      <button type="submit">저장</button>
    </FormWrapper>
  );
}

export default ExpenseForm;
