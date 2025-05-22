import React from 'react'
import { View } from 'react-native'


const ItemImage = (props) => (
    <Image
        source={props.image}
        style={{ width: "100%", height: 180 }}
    />
);
const ItemTitle = (props) => (
  <Text
    style={{
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 8,
      marginHorizontal: 16,
    }}
  >
    {props.title}
  </Text>
);
const ItemDescription = (props) => (
    <Text style={{ fontSize: 16, color: "gray" }}>{props.description}</Text>
);


export default function About() {
  return (
   <View>
    <ItemImage image={item.image} />
    <ItemTitle title={item.title} />
    <ItemDescription description={item.description} />  
    

   </View>
  )
}

