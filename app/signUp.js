import React, { useState, useRef } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Feather, Octicons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import Loading from '../components/Loading';
import CustomKeyboard from '../components/CustomKeyboard.js';
import { useAuth } from '../context/authContext.js';


const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);  
    const {register} = useAuth();

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const usernameRef = useRef("");
  const profileRef = useRef("");

  const handleRegister = async () => {
    if (!emailRef.current || !passwordRef.current || !usernameRef.current || !profileRef.current) {
      Alert.alert('Sign Up', 'Please fill all the fields!');
      return;
    }

    // Handle the registration logic here
    setLoading(true);

    let response = await register(emailRef.current, passwordRef.current, usernameRef.current, profileRef.current);
    // After registration logic
    setLoading(false);

    console.log('results:', response);
    if(!response.success){
            Alert.alert('Sign Up', response.msg);
    }

  };

  return (
    <CustomKeyboard>
      <StatusBar style="dark" />
      <View style={{ paddingTop: hp(8), paddingHorizontal: wp(5), flex: 1 }}>
        <View style={{ alignItems: 'center' }}>
          <Image
            style={{ height: hp(20), width: wp(60) }}
            resizeMethod='contain'
            source={require('../assets/images/signUp.jpg')}
          />
        </View>
        <View style={{ marginTop: hp(5) }}>
          <Text style={{ fontSize: hp(4), fontWeight: '800', letterSpacing: 1, textAlign: 'center', color: '#2D3748' }}>
            Sign Up
          </Text>
          <View style={{ marginTop: hp(2) }}>
            <View style={{ height: hp(7), flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7FAFC', borderRadius: 15, paddingHorizontal: 16, marginBottom: hp(2) }}>
              <Octicons name="mail" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={value => emailRef.current = value}
                style={{ fontSize: hp(2), flex: 1, fontWeight: '600', color: '#4A5568' }}
                placeholder='Email address'
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{ height: hp(7), flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7FAFC', borderRadius: 15, paddingHorizontal: 16, marginBottom: hp(2) }}>
              <Octicons name="lock" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={value => passwordRef.current = value}
                style={{ fontSize: hp(2), flex: 1, fontWeight: '600', color: '#4A5568' }}
                placeholder='Password'
                placeholderTextColor={'gray'}
                secureTextEntry={true}
              />
            </View>
            <View style={{ height: hp(7), flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7FAFC', borderRadius: 15, paddingHorizontal: 16, marginBottom: hp(2) }}>
              <Octicons name="person" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={value => usernameRef.current = value}
                style={{ fontSize: hp(2), flex: 1, fontWeight: '600', color: '#4A5568' }}
                placeholder='User Name'
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{ height: hp(7), flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7FAFC', borderRadius: 15, paddingHorizontal: 16, marginBottom: hp(2) }}>
              <Feather name="user" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={value => profileRef.current = value}
                style={{ fontSize: hp(2), flex: 1, fontWeight: '600', color: '#4A5568' }}
                placeholder='Profile Name'
                placeholderTextColor={'gray'}
              />
            </View>
          </View>

          {loading ? (
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Loading size={hp(16)} />
            </View>
          ) : (
            <TouchableOpacity onPress={handleRegister} style={{ height: hp(6.5), backgroundColor: '#6366F1', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginTop: hp(2) }}>
              <Text style={{ fontSize: hp(1.8), color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          )}

          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: hp(2) }}>
            <Text>Already have an account? </Text>
            <Pressable onPress={() => router.push('signIn')}>
              <Text style={{ color: '#3B82F6', fontWeight: '600' }}>Login</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </CustomKeyboard>
  );
};

export default SignUp;
