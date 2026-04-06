import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import Insights from "./components/Insights";
import RoleSwitcher from "./components/RoleSwitcher";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  }, []);

  // toggle theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div>
      <h1 id="FinanceDashboardHeading">Finance Dashboard</h1>

      {/* 🌙 Dark Mode Button */}
      <div style={{ textAlign: "center", marginBottom: "15px" }}>
        <button onClick={toggleTheme}>
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <RoleSwitcher />

      <Dashboard />
      <Transactions />
      <Insights />
    </div>
  );
}

export default App;
