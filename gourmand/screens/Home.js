import React from 'react'
import { View } from 'react-native'
import HeaderTabs from '../components/HeaderTabs'
import { SafeAreaView } from 'react-native-web'

export default function Home() {
  return (
   <SafeAreaView>
    <HeaderTabs/>
   </SafeAreaView>
  )
}
