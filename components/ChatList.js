import React from 'react';
import { View, FlatList } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ChatItem from './ChatItem';
import { useRouter } from 'expo-router';

export default function ChatList({ users }) {
    const router = useRouter();
  return (
    <GestureHandlerRootView>
      <View style={{ flex: 1 }}>
        <FlatList
          data={users}
          contentContainerStyle={{ flexGrow: 1, paddingVertical: 25 }}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => <ChatItem
           item={item}
           index={index}
           router={router}

        />}
        />
      </View>
    </GestureHandlerRootView>
  );
}
