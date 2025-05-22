// screens/Home.js
import { View } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import { SafeAreaView } from "react-native";
import Categories from "../components/Categories";
import RestaurantItem from "../components/RestaurantItem";
import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import getRestaurants from "../api/getRestaurants"; 
import BottomTabs from "../components/BottomTabs";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const [city, setCity] = useState("Stockholm");
const [activeTab, setActiveTab] = useState("Delivery");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRestaurants(city, activeTab);
      setRestaurants(data);
    };

    fetchData();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "gray", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <Searchbar setCity={setCity} />
      </View>
      <Categories />
      <RestaurantItem restaurantData={restaurants} />
      <Divider width={1} />
      <BottomTabs/>
    </SafeAreaView>
  );
}
