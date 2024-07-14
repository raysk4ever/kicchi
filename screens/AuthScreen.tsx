import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, } from "react-native";
import HomeLayout from "../Layouts/HomeLayout";
import { Colors } from "../Theme/Colors";
import Button from "../components/atoms/Button";
import { useState } from "react";
import CountryCode from "../components/CountryCode";
import GrowAnimation from "../animate/grow";
import { useAuth } from "../Context/AuthContext";
// import { useNavigation } from "@react-navigation/native";
import Toast from 'react-native-toast-message';
// import MaskShadow from "../components/MaskShadow";
import  Marquee  from '../components/Marquee';

import AssetCard from "../components/AssetCard";



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

const handleLogin = ({ phone, code }: { phone: string, code: string }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (phone === '123' && code === '123')
        return resolve('Login Successfully')
      return reject('Invalid Login')
    }, 1000)
  })
}
const CommonImage = ({ source }) => {
  return <Image style={{
    width: 100,
    height: 200,
    backgroundColor: 'gray',
    resizeMode: 'cover',
    borderRadius: 10
  }}
    source={source} />
}


export default function AuthScreen({ route }: any) {
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [codeSent, setCodeSent] = useState(false)
  const { isLoggedIn, isLoading, setIsLoading } = useAuth()
  // const { navigate } = useNavigation()
  const { setUser } = route.params;
  const handleOnChangeText: (text: string) => void = (text) => {
    setPhone(text)
  }

  const handleOnCodeTextChange: (text: string) => void = (text) => {
    setCode(text)
  }

  const handleOnPress = async () => {
    if (!codeSent) {
      setCodeSent(crr => !crr)
      return
    }
    try {
      setIsLoading(true)
      const result = await handleLogin({ phone, code })
      setUser({ name: 'ravi' })
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
              <Text style={styles.header}>Login to Kicchi ❤️</Text>
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
    marginBottom: 20,
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
  },
  // codeInput: {
  //   paddingVertical: 20
  // }
})