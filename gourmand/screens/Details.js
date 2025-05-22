import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/details/About'
import MenuItems from '../components/details/MenuItem'

export default function Details() {
  return (
  <View>
    <About/>
    <Divider width={1} />
    <MenuItems/>
  </View>
  )
}
