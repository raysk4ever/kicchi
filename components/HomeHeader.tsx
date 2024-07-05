import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './atoms/Button';
import AntDesign from 'react-native-vector-icons/AntDesign'

const btns = [
  {id: 'forYou', title: 'For You'},
  {id: 'nearBy', title: 'Nearby'},
];
const HomeHeader = ({ navigation }) => {
  const [activeButton, setActiveButton] = useState('forYou');
  const handleOnActionButton = (id: string) => {
    setActiveButton(id);
  };

  const onBtnPress = () => {
    navigation.toggleDrawer()
  }
  return (
    <>
      <View style={styles.container}>
        <View>
          <Button title="Kicchi" onPress={onBtnPress} />
        </View>
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
      </View>
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
