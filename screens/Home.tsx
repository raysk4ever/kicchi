import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import HomeHeader from '../components/HomeHeader';
import FeedSwiper from '../components/FeedSwiper';
import MyStack from '../components/MyStack';
import HomeLayout from '../Layouts/HomeLayout';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../Context/AuthContext';

type Props = {};

export const HomeStack = () => {
  return <MyStack />;
};
export const HomeScreen = ({navigation}: any) => {
  const {navigate} = useNavigation();
  const {isLoggedIn} = useAuth();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('Login');
    }
  }, [isLoggedIn, navigate]);
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
