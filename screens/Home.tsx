import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HomeHeader from '../components/HomeHeader';
import FeedSwiper from '../components/FeedSwiper';
import MyStack from '../components/MyStack';
import HomeLayout from '../Layouts/HomeLayout';

type Props = {};

export const HomeStack = () => {
  return (
    <MyStack />
  )
}
export const HomeScreen = ({ navigation }: Props) => {
  return (
    <>
      <HomeLayout>
        <HomeHeader navigation={navigation} />
        <FeedSwiper />
      </HomeLayout>
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
