import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
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
export const HomeScreen = ({ navigation }: any) => {
  return (
    <>
    <SafeAreaView style={styles.main}>
        <HomeLayout>
          <HomeHeader navigation={navigation} />
          <FeedSwiper navigation={navigation} />
        </HomeLayout>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#2a1b2d',
  },
});
