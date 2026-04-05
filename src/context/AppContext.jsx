import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [role, setRole] = useState("viewer");

  const [transactions, setTransactions] = useState([
    { id: 1, date: "2026-04-01", amount: 20000, category: "Salary", type: "income" },
    { id: 2, date: "2026-04-02", amount: 5000, category: "Rent", type: "expense" },
    { id: 3, date: "2026-04-03", amount: 2000, category: "Food", type: "expense" },
    { id: 4, date: "2026-04-04", amount: 3000, category: "Freelance", type: "income" },
  ]);

  return (
    <AppContext.Provider value={{ role, setRole, transactions, setTransactions }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);