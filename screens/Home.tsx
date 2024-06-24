import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HomeHeader from '../components/HomeHeader';
// import MyStack from '../components/MyStack';

type Props = {};
export const HomeScreen = ({}: Props) => {
  return (
    <>
      <SafeAreaView style={styles.main}>
        <LinearGradient
          colors={['#2a1b2d', '#4c0e4b', '#4c0e4b', '#2a1b2d']}
          style={styles.linearGradient}>
          <HomeHeader />
          {/* <MyStack /> */}
        </LinearGradient>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#2a1b2d',
    flex: 1,
  },
  linearGradient: {
    flex: 1,
  },
});
