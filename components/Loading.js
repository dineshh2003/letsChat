import React from 'react'
import { View , Text } from 'react-native'
import LottieView from 'lottie-react-native';

export default function Loading({size}) {
  return (
    <View style={{height: size, aspectRatio: 1}}>
        <LottieView style={{flex: 1}} source={require('../assets/Animation.json')} autoPlay loop/>
    </View>
  )
}
