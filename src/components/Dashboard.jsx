import { useApp } from "../context/AppContext";
import {
  Line,
  Pie
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);


const Dashboard = () => {
  const { transactions } = useApp();

  // Income, Expense, Balance
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  // 📈 Line Chart Data (Balance Trend)
  const lineData = {
    labels: transactions.map(t => t.date),
    datasets: [
      {
        label: "Amount ₹",
        data: transactions.map(t => t.amount),
        borderColor: "blue",
        tension: 0.3
      }
    ]
  };

  // 🥧 Pie Chart Data (Category Breakdown)
  const categories = [...new Set(transactions.map(t => t.category))];

  const pieData = {
    labels: categories,
    datasets: [
      {
        data: categories.map(cat =>
          transactions
            .filter(t => t.category === cat)
            .reduce((a, b) => a + b.amount, 0)
        ),
        backgroundColor: ["green", "blue", "orange", "red"]
      }
    ]
  };

  return (

    
    <div>
      <h2>Dashboard</h2>
        

      
      <div className="cards">
        <div className="card">Balance: ₹{balance}</div>
        <div className="card">Income: ₹{income}</div>
        <div className="card">Expenses: ₹{expense}</div>
      </div>

      {/* Line Chart */}
      <h3>Balance Trend</h3>
      <Line data={lineData} />

      {/* Pie Chart */}
      <h3>Spending Breakdown</h3>
      <Pie data={pieData} />
    </div>
  );
};

export default Dashboard;
