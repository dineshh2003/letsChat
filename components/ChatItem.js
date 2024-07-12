import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const blurhash =
"|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";


export default function ChatItem({ item, router }) {

    const openChatRoom = () =>{
        router.push({pathname : '/chatRoom' , params: item});
    }
    

  return (
    <TouchableOpacity 
        onPress={openChatRoom}
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
        source={{uri : item?.profileUrl}} 
        style={{
          height: hp(6),
          aspectRatio: 1,
          borderRadius: hp(3),
        }}
        placeholder={blurhash}
          contentFit="cover"
          transition={500}
      />
      <View style={{ flex: 1, gap: 4 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text 
            style={{
              fontSize: hp(1.8),
              fontWeight: '700',
              color: '#9ca3af'
            }}
          >
           {item?.username}
          </Text>
        </View>
        <Text className="font-light text-neutral-400 ">last message </Text>
      </View>
    </TouchableOpacity>
  );
}
