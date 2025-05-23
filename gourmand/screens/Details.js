import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../components/details/About'
import MenuItems from '../components/details/MenuItem'

export default function Details({route}) {
  return (
  <View>
    <About route={route}/>
    <Divider width={1} />
    <MenuItems/>
  </View>
  )
}
