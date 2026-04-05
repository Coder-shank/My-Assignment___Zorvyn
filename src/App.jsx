import Dashboard from "./components/Dashboard";
import Transactions from "./components/Transactions";
import Insights from "./components/Insights";
import RoleSwitcher from "./components/RoleSwitcher";

function App() {
  return (
    <div>
      <h1 id="FinanceDashboardHeading">Finance Dashboard</h1>

      <RoleSwitcher />

      <Dashboard />
      <Transactions />
      <Insights />
    </div>
  );
}

export default App;