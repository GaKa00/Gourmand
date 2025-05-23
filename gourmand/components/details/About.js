import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const GOOGLE_API_KEY = Constants.expoConfig.extra.googleApiKey;

const googleRestaurantInfo = [
  {
    name: "Burger King",
    rating: 4.1,
    price_level: 2,
    user_ratings_total: 1178,
    formatted_address: "1600 Amphitheatre Parkway, Mountain View, CA",
    formatted_phone_number: "(650) 253-0000",
    types: ["restaurant", "fast_food"],
    photos: [
      {
        photo_reference: "Aap_uECWcFz...", 
      },
    ],
  },
];

const ItemImage = ({ image }) => (
  <Image source={{ uri: image }} style={styles.image} />
);

const ItemTitle = ({ title }) => <Text style={styles.title}>{title}</Text>;

const Label = ({ label, value }) => (
  <Text style={styles.detail}>
    <Text style={styles.label}>{label}</Text>
    {value}
  </Text>
);

export default function About(props) {
  const item = props.route.params;


  const imageUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${item.photos[0].photo_reference}&key=${GOOGLE_API_KEY}`;

  const price = "$".repeat(item.price_level);
  const categories = item.types.join(", ");

  return (
    <ScrollView style={styles.container}>
      <ItemImage image={imageUrl} />
      <ItemTitle title={item.name} />

      <View style={styles.infoBlock}>
        <Label label="Address: " value={item.formatted_address} />
        <Label label="Phone: " value={item.formatted_phone_number} />
        <Label
          label="Rating: "
          value={`${item.rating} ⭐ (${item.user_ratings_total} reviews)`}
        />
        <Label label="Price: " value={price} />
        <Label label="Categories: " value={categories} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
    marginHorizontal: 16,
    color: "#222",
  },
  infoBlock: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  detail: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },
  label: {
    fontWeight: "bold",
    color: "#000",
  },
});
