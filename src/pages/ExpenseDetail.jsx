import { useRef, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import ExpenseContext from "../components/ExpenseContext";
import { updateExpense, deleteExpense } from "../store/expenseSlice";
import { useDispatch, useSelector } from "react-redux";

const DetailWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

function ExpenseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { setExpenseData } = useContext(ExpenseContext);
  const expenseData = useSelector((state) => state.expense);
  const expense = expenseData.find((item) => item.id === id);

  const dateRef = useRef();
  const categoryRef = useRef();
  const amountRef = useRef();
  const descriptionRef = useRef();

  const handleUpdate = () => {
    const updatedExpense = {
      id,
      date: dateRef.current.value,
      category: categoryRef.current.value,
      amount: parseInt(amountRef.current.value),
      description: descriptionRef.current.value,
    };

    setExpenseData((prevData) =>
      prevData.map((item) => (item.id === id ? updatedExpense : item))
    );
    dispatch(updateExpense(updatedExpense));
    navigate("/");
  };

  const handleDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      setExpenseData((prevData) => prevData.filter((item) => item.id !== id));
      dispatch(deleteExpense(id));
      navigate("/");
    }
  };

  return (
    <DetailWrapper>
      <h2>지출 상세 정보</h2>
      <input type="date" defaultValue={expense.date} ref={dateRef} />
      <input type="text" defaultValue={expense.category} ref={categoryRef} />
      <input type="number" defaultValue={expense.amount} ref={amountRef} />
      <input
        type="text"
        defaultValue={expense.description}
        ref={descriptionRef}
      />
      <button onClick={handleUpdate}>수정</button>
      <button onClick={handleDelete}>삭제</button>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </DetailWrapper>
  );
}

export default ExpenseDetail;
