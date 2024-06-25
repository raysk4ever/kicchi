import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './atoms/Button';
// import FeedSwiper from './FeedSwiper';
import FeedList from './FeedList';

const btns = [
  {id: 'forYou', title: 'For You'},
  {id: 'nearBy', title: 'Nearby'},
];
const HomeHeader = () => {
  const [activeButton, setActiveButton] = useState('forYou');
  const handleOnActionButton = (id: string) => {
    setActiveButton(id);
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerLeft}>
          {btns.map(b => (
            <Button
              key={b.id}
              onPress={() => handleOnActionButton(b.id)}
              title={b.title}
              active={activeButton === b.id}
            />
          ))}
        </View>
        <View>
          <Button title="..." />
        </View>
      </View>
      {/* <FeedSwiper /> */}
      <FeedList />
    </>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  containerLeft: {
    flexDirection: 'row',
    gap: 10,
  },
});
