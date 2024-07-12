import React, {  useEffect, useState } from 'react'
import { View , Text, Pressable, StatusBar, ActivityIndicator} from 'react-native'
// import { Button } from 'react-native'
import { useAuth } from '../../context/authContext'
import ChatList from '../../components/ChatList';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Loading from '../../components/Loading';


export default function home() {
    const {logout, user} = useAuth();
    const [users, setUsers] = useState([1,2]);
    
    useEffect(()=>{
        if(user?.uid)
            getUser();
    }, [])

    const getUser = async () =>{
      // fetch
    } 
   

    // const handleLogout = async ()=> {
    //     await logout();
    // }
    // console.log('user data :',user);
  return (
   <View className="flex-1 bg-white">
        {/* <Text>home</Text> */}
        {/* <Button title='sign Out' onPress={handleLogout}></Button> */}
        {/* <Pressable onPress={handleLogout}>
                <Text>sign Out</Text>
        </Pressable> */}
        <StatusBar style="light"/>
              {
                users.length > 0 ? (
                    <ChatList users={users}/>
                ): (
                    <View className="flex items-center" style={{top:hp(30)}}>
                        {/* <ActivityIndicator size="larger"/> */}
                        <Loading size={hp(25)}/>
                    </View>   
                )
              }
   </View>
  )
}
