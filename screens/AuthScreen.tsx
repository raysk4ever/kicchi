import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, View, } from "react-native";
import HomeLayout from "../Layouts/HomeLayout";
import { Colors } from "../Theme/Colors";
import Button from "../components/atoms/Button";
import { useState } from "react";
import { Picker, onOpen } from 'react-native-actions-sheet-picker';
import CountryCode from "../components/CountryCode";

export default function AuthScreen() {
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [codeSent, setCodeSent] = useState(true)

  const handleOnChangeText: (text: string) => void = (text) => {
    setPhone(text)
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

  // const handleOnCountryChange = (item) => {
  //   console.log('item', item)
  // }

  const btnText = codeSent ? "Login" : 'Send OTP'

  return (
    <HomeLayout>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <View style={styles.form}>
          <Text style={styles.header}>Login</Text>
          <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
            <CountryCode />
            <TextInput value={phone} onChangeText={handleOnChangeText}  placeholder="Enter Phone XXXXXXXX" keyboardType="phone-pad" style={styles.input} placeholderTextColor={'gray'} />
          </View>
          {
            codeSent && <TextInput value={code} onChangeText={handleOnChangeText}  placeholder="Enter OTP" keyboardType="phone-pad" style={[styles.input, styles.codeInput]} placeholderTextColor={'gray'} />
          }
          <Button title={btnText} active textStyle={{ textAlign: 'center', width: '100%' }} />
        </View>
      </KeyboardAvoidingView>
    </HomeLayout>
  )
}

const styles = StyleSheet.create({
  form: {
    gap: 20,
    marginTop: 'auto',
    marginBottom: 20
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
    flex: 1
  },
  codeInput: {
    paddingVertical: 20
  }
})