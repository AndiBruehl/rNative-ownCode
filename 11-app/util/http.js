import axios from "axios";

const BACKEND_URL =
  "https://expensetracker-35743-default-rtdb.europe-west1.firebasedatabase.app";

export function storeExpense(expenseData) {
  axios.post(BACKEND_URL + "/expenses.json", expenseData);
}

export async function fetchExpense() {
  const response = await axios.get(BACKEND_URL + "/expenses.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObject = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObject);
  }
  return expenses;
}
