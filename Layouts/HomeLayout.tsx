import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeLayout({children}: PropsWithChildren) {
  return (
    <LinearGradient
      colors={['#2a1b2d', '#4c0e4b', '#4c0e4b', '#2a1b2d']}
      style={styles.linearGradient}>
        <View style={styles.mainContent}>
          {children}
        </View>
    </LinearGradient>
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
  mainContent: {
    padding: 10,
    flex: 1,
  }
});