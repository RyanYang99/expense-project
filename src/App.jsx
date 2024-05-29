import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home";
import ExpenseDetail from "./pages/ExpenseDetail";
import { ExpenseProvider } from "./components/ExpenseContext";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);

  return (
    <Provider store={store}>
      <ExpenseProvider>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  currentMonth={currentMonth}
                  onChangeMonth={setCurrentMonth}
                />
              }
            />
            <Route path="/detail/:id" element={<ExpenseDetail />} />
          </Routes>
        </Router>
      </ExpenseProvider>
    </Provider>
  );
}

export default App;
