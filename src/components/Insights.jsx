 const Insights = () => {
  return (
    <div>
      <h2>Insights</h2>

      {/* Insight Cards */}
      <div className="insight-cards">
        <div className="insight-card">
          <h4>Highest Spending</h4>
          <p>Food</p>
          <span>₹12,000</span>
        </div>

        <div className="insight-card">
          <h4>Total Expenses</h4>
          <p>This Month</p>
          <span>₹30,000</span>
        </div>

        <div className="insight-card">
          <h4>Net Savings</h4>
          <p>Income - Expense</p>
          <span>₹50,000</span>
        </div>
      </div>

      {/* Category Comparison */}
      <div className="bars">
        <h3>Spending Comparison</h3>

        <div className="bar">
          <label>Food</label>
          <div className="progress food-bar" style={{ width: "40%" }}>
            40%
          </div>
        </div>

        <div className="bar">
          <label>Rent</label>
          <div className="progress rent-bar" style={{ width: "30%" }}>
            30%
          </div>
        </div>

        <div className="bar">
          <label>Other</label>
          <div className="progress other-bar" style={{ width: "30%" }}>
            30%
          </div>
        </div>
      </div>

      {/* Monthly Comparison */}
      <div className="monthly">
        <h3>Monthly Comparison</h3>

        <div className="month-row">
          <span>March</span>
          <div className="month-bar march" style={{ width: "70%" }}>
            ₹28k
          </div>
        </div>

        <div className="month-row">
          <span>April</span>
          <div className="month-bar april" style={{ width: "80%" }}>
            ₹30k
          </div>
        </div>

        <p className="increase">▲ Expenses increased by 7%</p>
      </div>

      {/* Observations */}
      <div className="observations">
        <p>• Food accounts for the highest spending (40%).</p>
        <p>• Expenses increased compared to last month.</p>
        <p>• Savings are still positive.</p>
      </div>
    </div>
  );
};

export default Insights;
