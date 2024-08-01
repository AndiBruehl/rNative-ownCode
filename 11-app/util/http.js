import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://expensetracker-35743-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
    expenseData
  );
}
