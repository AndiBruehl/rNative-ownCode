import { View } from "react-native";
import Input from "./Input";

function ExpenseForm() {
  function amountChangedHandler() {}
  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label="Date"
        textInputConfig={{
          keyboardType: "number-pad",
          placeholder: "YYYY-MM-DD",
          maxLength: 10,
          onChange: () => {},
        }}
      />
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
        }}
      />
    </View>
  );
}

export default ExpenseForm;
