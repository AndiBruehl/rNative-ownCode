import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2024-05-19"),
  },
  {
    id: "e2",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2024-06-19"),
  },
  {
    id: "e3",
    description: "A pair of glasses",
    amount: 259.99,
    date: new Date("2024-07-29"),
  },
  {
    id: "e4",
    description: "A LEGO Set",
    amount: 89.99,
    date: new Date("2024-07-28"),
  },
  {
    id: "e5",
    description: "A Book",
    amount: 29.99,
    date: new Date("2024-07-23"),
  },
  {
    id: "e6",
    description: "A pair of trousers",
    amount: 89.29,
    date: new Date("2024-06-19"),
  },
  {
    id: "e7",
    description: "A pair of glasses",
    amount: 259.99,
    date: new Date("2024-07-29"),
  },
  {
    id: "e8",
    description: "A LEGO Set",
    amount: 89.99,
    date: new Date("2024-07-28"),
  },
  {
    id: "e9",
    description: "A Book",
    amount: 29.99,
    date: new Date("2023-12-23"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString;
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state(updatableExpenseIndex);
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
    default:
      return state.filter((expense) => expense.id !== action.payload);
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }
  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
