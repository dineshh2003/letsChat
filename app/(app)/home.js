import React from 'react'
import { View , Text, Pressable} from 'react-native'
// import { Button } from 'react-native'
import { useAuth } from '../../context/authContext'

export default function home() {
    const {logout, user} = useAuth();
    const handleLogout = async ()=> {
        await logout();
    }
    console.log('user data :',user);
  return (
   <View>
        <Text>home</Text>
        {/* <Button title='sign Out' onPress={handleLogout}></Button> */}
        <Pressable onPress={handleLogout}>
                <Text>sign Out</Text>
        </Pressable>
   </View>
  )
}
