import React, { useRef, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Octicons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useRouter } from 'expo-router';
import Loading from '../components/Loading'; // Ensure the correct path
import { useAuth} from '../context/authContext'
// Import the login function from its correct path
// import { login } from '../services/authService'; // Ensure the correct path

export default function SignIn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {login} = useAuth();  
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = async () => {
    if (!emailRef.current || !passwordRef.current) {
      Alert.alert('Sign In', "Please fill all the fields");
      return;
    }

    setLoading(true);
    const response = await login(emailRef.current, passwordRef.current); // Ensure response is correctly assigned
    setLoading(false);
    console.log('Sign in response:', response);
    if (!response.success) {
      Alert.alert('Sign In', response.msg);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <View style={{ paddingTop: hp(8), paddingHorizontal: wp(5), flex: 1 }}>
        <View style={{ alignItems: 'center' }}>
          <Image
            style={{ height: hp(25), width: wp(60) }}
            resizeMethod='contain'
            source={require('../assets/images/bg-2.jpg')}
          />
        </View>
        <View style={{ marginTop: hp(5) }}>
          <Text style={{ fontSize: hp(4), fontWeight: '800', letterSpacing: 1, textAlign: 'center', color: '#2D3748' }}>
            Sign In
          </Text>
          {/* Form */}
          <View style={{ marginTop: hp(2) }}>
            <View style={{ height: hp(7), flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7FAFC', borderRadius: 15, paddingHorizontal: 16, marginBottom: hp(2), gap: 4 }}>
              <Octicons name="mail" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={value => emailRef.current = value}
                style={{ fontSize: hp(2), flex: 1, fontWeight: '600', color: '#4A5568' }}
                placeholder='Email address'
                placeholderTextColor={'gray'}
              />
            </View>
            <View style={{ height: hp(7), flexDirection: 'row', alignItems: 'center', backgroundColor: '#F7FAFC', borderRadius: 15, paddingHorizontal: 16, gap: 4 }}>
              <Octicons name="lock" size={hp(2.7)} color="gray" />
              <TextInput
                onChangeText={value => passwordRef.current = value} // Correct the handler
                style={{ fontSize: hp(2), flex: 1, fontWeight: '600', color: '#4A5568' }}
                placeholder='Password'
                placeholderTextColor={'gray'}
                secureTextEntry
              />
            </View>
            <Text style={{ fontSize: hp(1.8), textAlign: 'right', color: '#3B82F6', fontWeight: '600', marginTop: hp(1) }}>
              Forgot Password?
            </Text>
          </View>

          <View>
            {
              loading ? (
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <Loading size={hp(16)} />
                </View>
              ) : (
                <TouchableOpacity onPress={handleLogin} style={{ height: hp(6.5), backgroundColor: '#6366F1', borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginTop: hp(2) }}>
                  <Text style={{ fontSize: hp(1.8), color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>
                    Sign In
                  </Text>
                </TouchableOpacity>
              )
            }
          </View>

          {/* Sign Up text */}
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: hp(2) }}>
            <Text>Don't have an account?</Text>
            <Pressable onPress={() => router.push('signUp')}>
              <Text style={{ color: '#3B82F6', fontWeight: '600' }}> Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
