import React from 'react';
import { View, FlatList } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import ChatItem from './ChatItem';

export default function ChatList({ users }) {
  return (
    <GestureHandlerRootView>
      <View style={{ flex: 1 }}>
        <FlatList
          data={users}
          contentContainerStyle={{ flexGrow: 1, paddingVertical: 25 }}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => <ChatItem item={item} />}
        />
      </View>
    </GestureHandlerRootView>
  );
}
