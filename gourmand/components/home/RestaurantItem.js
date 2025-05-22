
import { TouchableOpacity, Image, Text, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RestaurantItem(props) {
  return (
    <>
      {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={1}
          style={{ marginBottom: 32 }}
        >
          <View
            style={{ marginTop: 12, padding: 16, backgroundColor: "white" }}
          >
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image
      source={{ uri: props.image }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 8,
    }}
  >
    <View>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>{props.name}</Text>
      <Text style={{ fontSize: 12, color: "gray" }}>Delivery time</Text>
    </View>
    <View
      style={{
        backgroundColor: "#eee",
        height: 32,
        width: 32,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,
      }}
    >
      <Text>{props.rating}</Text>
    </View>
  </View>
);
