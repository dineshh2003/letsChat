import React from "react";
import { Platform, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image }from "expo-image";
import { useAuth } from "../context/authContext";



import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { MenuItem } from "./CustomMenu";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
const ios = Platform.OS == "ios";
export default function HomeHeader() {
  const { user, logout } = useAuth();
  
  const { top } = useSafeAreaInsets();


    const handleLogout = async () =>{
        await logout();
    }


  const handleProfile = () => {

  }
  return (
    <View
      style={{ paddingTop: ios ? top : top + 10 }}
      className="flex-row justify-between px-5  bg-indigo-400  pb-6 rounded-b-3xl shadow-lg"
    >
      <View>
        <Text
          style={{ fontSize: hp(3) }}
          className="font-medium  text-white"
        >
          Let's Chat
        </Text>
      </View>
      <View>

      <Menu>
        <MenuTrigger customStyles={{
            triggerWrapper:{
                
            }
        }}>
        <Image
          style={{ height: hp(5.0), aspectRatio: 1, borderRadius: 100 }}
          source={user?.profileUrl}
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
        />
        </MenuTrigger>
        <MenuOptions>
          {/* <MenuOption onSelect={() => alert(`Save`)} text="Save" />
          <MenuOption onSelect={() => alert(`Delete`)}>
            <Text style={{ color: "red" }}>Delete</Text>
          </MenuOption>
          <MenuOption
            onSelect={() => alert(`Not called`)}
            disabled={true}
            text="Disabled"
          /> */}
            <MenuItem 
                text="profile"
                action={handleProfile}
                value={null}
                icon={<Feather name="user" size={hp(2.5)} color="#737373" />}
            >
            </MenuItem>
            <MenuItem 
                text="Sign Out"
                action={handleLogout}
                value={null}
                icon={<MaterialIcons name="logout" size={hp(2.5)} color="#737373" />}
            >
            </MenuItem>
        </MenuOptions>
      </Menu>           
      </View>
    </View>
  );
}
