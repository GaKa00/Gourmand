import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function MenuItems() {
  return (
    <ScrollView  showsVerticalScrollIndicator={false}  style={styles.MenuItemStyle}>
      {foodItem.map((Item, index) => (
        <>
        <BouncyCheckbox key={index}  iconStyle={{ borderColor: "black", borderRadius: 0 , fillColor: "green" }}/>
          <MenuItemInfo key={index} foodItem={Item} />
          <MenuItemImage key={index} foodImage={Item} />
          <Divider width={0.5} orientation="vertical"  />
        </>
      ))}
    </ScrollView>
  );
}

const MenuItemInfo = (props) => {
  return (
    <View style={{ width: 200, justifyContent: "space-evenly" }}>
      <View>
        <Text style={styles.titleStyle}>{props.foodItem.title}</Text>
        <Text>{props.foodItem.description}</Text>
        <Text>{props.foodItem.price}</Text>
      </View>
    </View>
  );
};

const MenuItemImage = (props) => {
  return (
    <View>
      <Image style={styles.imageStyle} source={props.foodItem.image} />
    </View>
  );
};

const foodItem = [
  {
    title: "Fast food",
    description: "Fast food",
    price: "199 kr",
    image: require("../../assets/images/fast-food.png"),
  },
  {
    title: "Fast food",
    description: "Fast food",
    price: "199 kr",
    image: require("../../assets/images/fast-food.png"),
  },
  {
    title: "Fast food",
    description: "Fast food",
    price: "199 kr",
    image: require("../../assets/images/fast-food.png"),
  },
];

const styles = StyleSheet.create({
  MenuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginBottom: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});
