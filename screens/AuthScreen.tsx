import React, { useState } from "react";
import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, } from "react-native";
import HomeLayout from "../Layouts/HomeLayout";
import { Colors } from "../Theme/Colors";
import Button from "../components/atoms/Button";
import CountryCode from "../components/CountryCode";
import GrowAnimation from "../animate/grow";
import { useAuth } from "../Context/AuthContext";
// import { useNavigation } from "@react-navigation/native";
import Toast from 'react-native-toast-message';
// import MaskShadow from "../components/MaskShadow";
import Marquee from '../components/Marquee';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import GradientText from "../components/GradientText";
import axios from "axios";
import { axiosInstance } from "../Utils/axios";
// import AssetCard from "../components/AssetCard";



const showToast = () => {
  Toast.show({
    type: 'error',
    text1: 'Invalid Login 🤞',
    text2: 'Please enter valid Phone/Code.'
  });
}

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const handleLogin = async ({ phone, code }: { phone: string, code: string }) => {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     if (phone !== '' && code === '123')
  //       return resolve('Login Successfully')
  //     return reject('Invalid Login')
  //   }, 1000)
  // })
  const response = await axiosInstance.post('/auth/sign-up', { phone, code, type: 'phone' })
  return response.data
  
}
const CommonImage = ({ source }: any) => {
  return <Image style={{
    width: 100,
    height: 200,
    backgroundColor: 'gray',
    resizeMode: 'cover',
    borderRadius: 10
  }}
    source={source} />
}

type AuthScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Auth'>;

export default function AuthScreen({ route, navigation }: { route: any, navigation: AuthScreenNavigationProp }) {
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [codeSent, setCodeSent] = useState(false)
  const { isLoggedIn, isLoading, setIsLoading, setUser, setIsLoggedIn } = useAuth()
  const { navigate } = useNavigation()
  // const { setUser, setIsLoggedIn } = route.params;
  const handleOnChangeText: (text: string) => void = (text) => {
    setPhone(text)
  }

  const handleOnCodeTextChange: (text: string) => void = (text) => {
    setCode(text)
  }

  const handleOnPress = async () => {
    const result = await handleLogin({ phone: '6396180310', code: '123' })
    console.log('result', result)
    setUser({...result.user, token: result.token})
    if (!codeSent) {
      setCodeSent(crr => !crr)
      return
    }
    try {
      setIsLoading(true)
      const result = await handleLogin({ phone, code })
      console.log('result', result)
      setUser({...result.user, token: result.token})
      setIsLoggedIn(true)
      navigate('Home' as never)
    } catch (error) {
      showToast()
      // console.error('error', error)
    } finally {
      setIsLoading(false)
    }
    // navigate('Kicchi')

  }
  const btnText = codeSent ? "Login" : 'Send OTP'


  return (
    <>
      <HomeLayout>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={{ flex: 1 }}
        >
          <View style={{ flex: 1, overflow: "hidden", justifyContent: 'center' }}>
            <Marquee rtl>
              <View style={{ flexDirection: 'row', gap: 15 }}>
                <CommonImage source={require('../assets/image.png')} />
                <CommonImage source={require('../assets/image5.jpg')} />
                <CommonImage source={require('../assets/image2.jpg')} />
              </View>
            </Marquee>
            <Marquee>
              <View style={{ flexDirection: 'row', gap: 15 }}>
                <CommonImage source={require('../assets/image4.jpg')} />
                <CommonImage source={require('../assets/image.png')} />
                <CommonImage source={require('../assets/image3.jpg')} />
              </View>
            </Marquee>
            {/* <Marquee rtl>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <CommonImage source={require('../assets/image5.jpg')} />
                <CommonImage source={require('../assets/image.png')} />
                <CommonImage source={require('../assets/image2.jpg')} />
              </View>
            </Marquee> */}
          </View>
          <GrowAnimation styles={{ marginTop: 'auto' }}>
            <View style={styles.form}>
              <View style={styles.brandName}>
              <Text style={styles.header}>Login to Kicchi ❤️</Text>
              {/* <GradientText colors={['#cc2b5e', '#753a88']} style={styles.text}>Kichhi</GradientText> */}
              </View>
              <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                <CountryCode />
                <TextInput value={phone} onChangeText={handleOnChangeText} placeholder="Enter Phone XXXXXXXX" keyboardType="phone-pad" style={[styles.input, { flex: 1 }]} placeholderTextColor={'gray'} />
              </View>
              {
                codeSent && (
                  <GrowAnimation>
                    <TextInput value={code} onChangeText={handleOnCodeTextChange} placeholder="Enter OTP" keyboardType="phone-pad" style={[styles.input]} placeholderTextColor={'gray'} />
                  </GrowAnimation>
                )
              }
              <Button loading={isLoading} onPress={handleOnPress} title={btnText} active textStyle={{ textAlign: 'center', width: '100%' }} />
            </View>
          </GrowAnimation>
        </KeyboardAvoidingView>
      </HomeLayout>
    </>
  )
}

const styles = StyleSheet.create({
  form: {
    gap: 20,
    marginTop: 'auto',
    marginBottom: 50,
    paddingTop: 10,
    // position: 'absolute',
    // bottom: 0,
    // backgroundColor: Colors.white,
    paddingHorizontal: 10,
    // elevation: 2

  },
  header: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: Colors.grayBG,
    padding: 12,
    color: 'white',
    borderRadius: 30,
    fontSize: 20,
    fontWeight: 'bold'
  },
  // codeInput: {
  //   paddingVertical: 20
  // }
  text: {
    color: 'black',
    fontSize: 14,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  brandName: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})