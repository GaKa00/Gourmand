import { View } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import { SafeAreaView } from "react-native-web";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItem from "../components/RestaurantItem";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "gray", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
      <RestaurantItem />
    </SafeAreaView>
  );
}
