import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/details/About'
import MenuItems from '../components/details/MenuItem'
import ViewCart from '../components/details/ViewCart'

export default function Details({route, navigation}) {
  return (
  <View>
    <About route={route}/>
    <Divider width={1} />
    <MenuItems/>
    <ViewCart navigation={navigation} restaurantName={route.params.name}/>
  </View>
  )
}
