import React from 'react'
import { StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export const withAppLayout = (Component: React.FC, props: any) => {
  return (
    <SafeAreaView style={styles.main}>
    <LinearGradient
      colors={['#2a1b2d', '#4c0e4b', '#4c0e4b', '#2a1b2d']}
      style={styles.linearGradient}>
        <Component {...props}/>
    </LinearGradient>
  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  main: {
    backgroundColor: '#2a1b2d',
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
});
