import { View, Text, Image } from "react-native";

function MealItem({ title, imageUrl }) {
  return (
    <View>
      <Text>{title}</Text>
      <Image source={imageUrl} />
    </View>
  );
}

export default MealItem;
