import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function ChatItem({ item }) {
  return (
    <TouchableOpacity 
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        alignItems: 'center',
        gap: 8,
        marginBottom: 16,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#f5f5f5'
      }}
    >
      <Image 
        source={require('../assets/images/shinchan.jpg')} 
        style={{
          height: hp(6),
          aspectRatio: 1,
          borderRadius: hp(3),
        }}
      />
      <View style={{ flex: 1, gap: 4 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text 
            style={{
              fontSize: hp(1.8),
              fontWeight: '600',
              color: '#9ca3af'
            }}
          >
            Shin chan
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
