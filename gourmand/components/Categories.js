import React from "react";
import { ScrollView, View } from "react-native-web";

const items = [
  {
    image: require("../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-Up",
  },
  {
    image: require("../assets/images/bread.png"),
    text: "Bakery items",
  },
  {
    image: require("../assets/images/fast-food.png"),
    text: "Fast food",
  },

  {
    image: require("../assets/images/coffee.png"),
    text: "Cafes",
  },
  {
    image: require("../assets/images/desserts.png"),
    text: "Desserts",
  },
];
export default function Categories() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        marginTop: 8,
        backgroundColor: "white",
        paddingVertical: 8,
        paddingLeft: 20,
      }}
    >
      {items.map((item, index) => (
        <View
          key={index}
          style={{
            paddingHorizontal: 20,
            paddingVertical: 12,
            alignItems: "center",
          }}
        >
          <Image
            source={item.image}
            style={{ width: 50, height: 50, resizeMode: "contain" }}
          />
          <Text style={{ fontSize: 18, fontWeight: "900" }}>{item.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
