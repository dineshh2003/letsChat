import React, {  useEffect, useState } from 'react'
import { View , Text, Pressable, StatusBar, ActivityIndicator} from 'react-native'
// import { Button } from 'react-native'
import { useAuth } from '../../context/authContext'
import ChatList from '../../components/ChatList';
import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Loading from '../../components/Loading';
import { getDocs, query, where } from 'firebase/firestore';
import { userRef } from '../../firebaseConfig';


export default function home() {
    const {logout, user} = useAuth();
    const [users, setUsers] = useState([]);
    
    useEffect(()=>{
        if(user?.uid)
            getUser();
    }, [])

    const getUser = async () =>{
      // fetch all the users except the one who is logged in
      const q = query(userRef , where('userId', '!=', user?.uid));

      const querySnapshot = await getDocs(q);
      let data = [];
      querySnapshot.forEach(doc =>{
        data.push({...doc.data()});
      })

      // console.log('users :', data);

      setUsers(data);
    }  
   

    // const handleLogout = async ()=> {
    //     await logout();
    // }
    // console.log('user data :',user);
  return (
   <View className="flex-1  bg-white">
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
