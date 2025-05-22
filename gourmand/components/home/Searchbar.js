import React from "react";
import { Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Constants from "expo-constants";

const GOOGLE_API_KEY = Constants.expoConfig.extra.googleApiKey;

export default function Searchbar({setCity}) {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        query={{
          key: GOOGLE_API_KEY, //
          language: "en",
        }}
        onPress={(data,details = null) =>  {
 const city = data.description.split(",")[0];
 setCity(city);
        }}
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 8,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} color="black" />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              marginRight: 10,
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 30,
              backgroundColor: "white",
              padding: 9,
            }}
          >
            <AntDesign
              name="clockcircle"
              size={16}
              color="black"
              marginRight={8}
            />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}
