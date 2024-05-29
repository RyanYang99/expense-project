import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: inline-block;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  background-color: #4285f4;
  color: #fff;
  padding: 50px;
  border-radius: 5px;

  h1 {
    font-size: 40px;
    text-align: center;
  }
`;

const MonthTab = styled.ul`
  display: flex;
  margin-top: 20px;
  gap: 10px;
`;

const MonthItem = styled.li`
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: ${({ $active }) => ($active ? "#fff" : "transparent")};
  color: ${({ $active }) => ($active ? "#4285f4" : "#fff")};
`;

function Header({ currentMonth, onChangeMonth }) {
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <HeaderWrapper>
      <h1>My Budget Flow</h1>
      <MonthTab>
        {months.map((month) => (
          <MonthItem
            key={month}
            $active={currentMonth === month}
            onClick={() => onChangeMonth(month)}
          >
            {month}월
          </MonthItem>
        ))}
      </MonthTab>
    </HeaderWrapper>
  );
}

export default Header;
