import React from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native-web";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 32 }}>
      <View style={{ marginTop: 12, padding: 16, backgroundColor: "white" }}>
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
}

const RestaurantImage = () => (
  <>
    <Image
      source={{
        uri: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = () => (
  <View>
    <Text style={{ fontSize: 16, fontWeight: "900" }}>Restaurant</Text>
    <Text style={{ fontSize: 10, color: "#eee" }}>Delivery time</Text>
    <View
      style={{
        backgroundColor: "white",
        height: 32,
        width: 32,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,
      }}
    >
      <Text>Rating</Text>
    </View>
  </View>
);
