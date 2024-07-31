import { StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

function ExpensesOutput({
  expenses,
  expensesPeriod,
  fallbackText = "No expenses found.",
}) {
  // Validate props
  if (!Array.isArray(expenses)) {
    console.error("Expenses prop is not an array");
    return <Text style={styles.infoText}>Error: Invalid expenses data</Text>;
  }

  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    // Ensure ExpensesList is properly handling an empty array
    content = <ExpensesList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      {/* Ensure ExpensesSummary handles empty or undefined expenses gracefully */}
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {content}
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
  infoText: {
    color: "white",
    textAlign: "center",
    marginTop: 32,
  },
});
