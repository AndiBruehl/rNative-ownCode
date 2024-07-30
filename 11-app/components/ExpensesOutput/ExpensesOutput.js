import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

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
    date: new Date("2024-12-23"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.primary700,
  },
  sum: {
    fontSize: 16,
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
