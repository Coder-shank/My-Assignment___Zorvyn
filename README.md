**Finance Dashboard**

A simple React-based web application that allows users to track, visualize, and analyze their financial activity through a clean and interactive interface.

**Features**

1. Summary Cards
   Displays Total Balance, Income, and Expenses.

2. Time-Based Visualization
   Shows balance trend over time (e.g., monthly).

3. Categorical Visualization
   Displays spending breakdown by categories (e.g., Food, Rent, Other).

4. Transactions Section
   Displays a list of transactions with:

* Date
* Amount
* Category
* Type (Income / Expense)

Includes:

* Search across all fields
* Filtering (Income / Expense)
* Sorting
* Add and Edit functionality

5. Basic Role-Based UI
   Simulated frontend roles:

* Viewer: Can only view data
* Admin: Can add and edit transactions
  Role can be switched using a dropdown.

6. Insights Section
   Provides:

* Highest spending category
* Monthly comparison
* Spending distribution
* Observations based on data

7. State Management

* Transactions data handled globally
* Filters handled locally
* Role handled globally
  Implemented using React Context API and useState.

8. UI and UX

* Clean and readable design
* Works on different screen sizes
* Handles empty or no data cases gracefully

**Extra Features**

* Responsive design
* Dark mode support

**Project Structure**

src/
components/
Dashboard.jsx
Transactions.jsx
Insights.jsx

context/
AppContext.jsx

App.jsx
main.jsx
index.css

**Tech Stack**

React (Vite), JavaScript (ES6+), CSS, Context API

**How It Works**

Users manually add transactions, and the dashboard updates balance, visualizations, and insights based on the entered data.

**Conclusion**

This project demonstrates component-based architecture, state management, role-based UI, and financial data visualization.
