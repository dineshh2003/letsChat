import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import ChatRoomHeader from '../../components/ChatRoomHeader';
import { StatusBar } from 'expo-status-bar';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MessageList from '../../components/MessageList';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export default function ChatRoom() {
  const item = useLocalSearchParams();
  const router = useRouter();
  const [messages, setMessages] = useState([]);


  

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View className="flex-1 bg-gray-100">
        <StatusBar style="light" />
        <ChatRoomHeader user={item} router={router} />
        <View className="flex-1 justify-between overflow-visible">
          <View className="flex-1">
            <MessageList messages={messages} />
          </View>
          <View style={{ marginBottom: hp(1.7) }} className="pt-2">
            <View className="flex-row justify-between items-center mx-3">
              <View className="flex-row justify-between bg-white border p-2 border-neutral-300 rounded-full pl-5">
                <TextInput
                  placeholder="type your text here"
                  style={{ fontSize: hp(1.5) }}
                  className="flex-1 mr-2"
                />
                <TouchableOpacity className="bg-gray-200 p-3 mr-3 rounded-full">
                  <Feather name="send" size={hp(2.7)} color="#737373" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}
