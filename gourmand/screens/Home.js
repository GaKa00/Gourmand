// screens/Home.js
import { View } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import { SafeAreaView } from "react-native";
import Categories from "../components/Categories";
import RestaurantItem from "../components/RestaurantItem";
import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import getRestaurants from "../api/getRestaurants"; // adjust path

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [city, setCity] = useState("Stockholm");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRestaurants(city);
      setRestaurants(data);
    };

    fetchData();
  }, [city]);

  return (
    <SafeAreaView style={{ backgroundColor: "gray", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <Searchbar setCity={setCity} />
      </View>
      <Categories />
      <RestaurantItem restaurantData={restaurants} />
    </SafeAreaView>
  );
}
