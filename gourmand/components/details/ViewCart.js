import React from 'react'
import { Touchable } from 'react-native'

export default function ViewCart() {
  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center", flexDirection: "row", position: "absolute", zIndex: 999,  bottom:110}}>

   <View style={{flexDirection: "row", justifyContent: "center",  width: "100%"}}>
    <TouchableOpacity style={{marginRight: 20, backgroundColor: "#000", padding: 16, alignItems: "center", borderRadius: 30, position: "relative"}}>
        <Text style={{color: "#fff" , fontSize: 16 }}>View Cart</Text>

    </TouchableOpacity>

   </View>
    </View>
  )
}
