import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HomeHeader from '../components/HomeHeader';
import FeedSwiper from '../components/FeedSwiper';
import MyStack from '../components/MyStack';
import Button from '../components/atoms/Button';

type Props = {};
export const HomeWithStack = () => {
  return (
    <>
      <MyStack />
    </>
  )
}

export const HomeScreen = ({ navigation }: Props) => {
  return (
    <>
      <HomeHeader navigation={navigation} />
      <FeedSwiper />
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
