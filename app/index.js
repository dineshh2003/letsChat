import React from 'react'
import {View, Text, ActivityIndicator} from 'react-native'


export default function StartPage() {
  return (
    // style={{paddingTop: 40}}
    <View  className="flex-1 justify-center items-center">
            <ActivityIndicator size="large" color="gray"/>
    </View>

  )
}
