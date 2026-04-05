import { useState, useRef } from "react";
import { useApp } from "../context/AppContext";

const Transactions = () => {
  const { transactions, role, setTransactions } = useApp();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // 🔥 Ref for scrolling
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    amount: "",
    category: "",
    type: "expense",
  });

  // 🔍 Search
  const filtered = transactions
    .filter((t) => {
      const query = search.toLowerCase();
      return (
        t.category.toLowerCase().includes(query) ||
        t.type.toLowerCase().includes(query) ||
        t.date.toLowerCase().includes(query) ||
        t.amount.toString().includes(query)
      );
    })
    .filter((t) => (filter === "all" ? true : t.type === filter));

  // 📝 Handle input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 💾 Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      const updated = transactions.map((t) =>
        t.id === editingId
          ? { ...t, ...formData, amount: Number(formData.amount) }
          : t
      );
      setTransactions(updated);
    } else {
      const newTx = {
        id: Date.now(),
        ...formData,
        amount: Number(formData.amount),
      };
      setTransactions([...transactions, newTx]);
    }

    // reset
    setFormData({
      date: new Date().toISOString().split("T")[0],
      amount: "",
      category: "",
      type: "expense",
    });

    setEditingId(null);
    setShowForm(false);
  };

  // ✏️ Edit click
  const handleEdit = (tx) => {
    setFormData(tx);
    setEditingId(tx.id);
    setShowForm(true);

    // 🔥 scroll to form
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div>
      <h2>Transactions</h2>

      {/* 🔍 Search */}
      <input
        placeholder="Search by amount, category, type, date..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🔽 Filter */}
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      {/* ➕ Add button */}
      {role === "admin" && (
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingId(null);
          }}
        >
          {showForm ? "Close Form" : "Add Transaction"}
        </button>
      )}

      {/* 📝 FORM */}
      {showForm && (
        <form ref={formRef} onSubmit={handleSubmit} className="form">

          <h3>{editingId ? "Update Transaction" : "Add Transaction"}</h3>

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            max={new Date().toISOString().split("T")[0]}
            required
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
          />

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>

          <button type="submit">
            {editingId ? "Update" : "Save"}
          </button>
        </form>
      )}

      {/* 📊 Table */}
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount (₹)</th>
            <th>Category</th>
            <th>Type</th>
            {role === "admin" && <th>Action</th>}
          </tr>
        </thead>

        <tbody>
          {filtered.length > 0 ? (
            filtered.map((t) => (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td>₹{t.amount}</td>
                <td>{t.category}</td>
                <td>{t.type}</td>

                {role === "admin" && (
                  <td>
                    <button onClick={() => handleEdit(t)}>Edit</button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No transactions found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
