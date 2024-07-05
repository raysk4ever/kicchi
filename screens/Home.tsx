import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HomeHeader from '../components/HomeHeader';
import FeedSwiper from '../components/FeedSwiper';
// import MyStack from '../components/MyStack';

type Props = {};
export const HomeScreen = ({ navigation }: Props) => {
  return (
    <>
      <SafeAreaView style={styles.main}>
        <LinearGradient
          colors={['#2a1b2d', '#4c0e4b', '#4c0e4b', '#2a1b2d']}
          style={styles.linearGradient}>
          <HomeHeader navigation={navigation} />
          {/* <MyStack /> */}
          <FeedSwiper />
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
