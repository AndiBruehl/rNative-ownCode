import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../constants/colors";

function OutlinedButton({ children, icon, onPress }) {
  if (!icon) {
    console.error("OutlinedButton: Missing required 'icon' prop.");
    return null; // Return early if icon is not provided to prevent crashes
  }

  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons
        name={icon}
        size={18}
        color={Colors.primary500}
        style={styles.icon}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default OutlinedButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 4,
    borderWidth: 1,
    borderColor: Colors.primary500,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: Colors.primary500,
  },
  icon: {
    marginRight: 6,
  },
});
