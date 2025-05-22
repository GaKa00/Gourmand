import React from "react";
import { View } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const tabs = [
    
    {
      name: "home",
      text: "Home",
      onPress: () => console.log("Home"),
    },
    {
      name: "search",
      text: "Browse",
      onPress: () => console.log("Search"),
    },
    {
      name: "shopping-bag",
      text: "Groceries",
      onPress: () => console.log("Groceries"),
    },
    {
      name: "receipt",
      text: "Orders",
      onPress: () => console.log("Orders"),
    },
    {
      name: "user",
      text: "Account",
      onPress: () => console.log("Account"),
    },
]

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        padding: 12,
      }}
    >
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          onPress={tab.onPress}
        >
            <Icon name={tab.name} text={tab.text} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const Icon = () => (
    <FontAwesome5
      name={props.name}
      size={22}
      style={{ marginBottom: 3, alignSelf: "center" }}
    />
)