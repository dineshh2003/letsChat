import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ChatRoomHeader({ user, router }) {
  return (
    <Stack.Screen
      options={{
        title: "",
        headerShadowVisible: false,
        headerLeft: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: wp(4) }}>
            <TouchableOpacity onPress={() => router.back()}>
              <Image
                source={user?.profileUrl}
                style={{ height: hp(4.5), aspectRatio: 1, borderRadius: 100 }}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: hp(2), fontWeight: 'bold', color: '#4A5568' }}>
              {user?.username}
            </Text>
          </View>
        ),
        headerRight: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: wp(8) }}>
            <Ionicons name="call" size={hp(2.8)} color="#737373" />
            <Ionicons name="videocam" size={hp(2.8)} color="#737373" />
          </View>
        ),
      }}
    />
  );
}
