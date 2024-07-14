import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from './atoms/Button';
import AntDesign from 'react-native-vector-icons/AntDesign'

const btns = [
  {id: 'forYou', title: 'For You'},
  {id: 'nearBy', title: 'Nearby'}
];
const HomeHeader = ({ navigation }) => {
  const [activeButton, setActiveButton] = useState('forYou');
  const handleOnActionButton = (id: string) => {
    setActiveButton(id);
  };

  const onBtnPress = () => {
    navigation.toggleDrawer()
  }
  const openScreen = (screen) => {
    navigation.navigate(screen)
  }
  return (
    <>
      <View style={styles.container}>
        {/* <View>
          <Button title="Kicchi" onPress={onBtnPress} />
        </View> */}
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
        <View style={styles.containerLeft}>
          <Button Icon={<AntDesign name='message1' color={'white'} size={16} />} onPress={() => openScreen('Chats')} />
          <Button  Icon={<AntDesign name='bells' color={'white'} size={16} />} onPress={() => openScreen('Notifications')} />
          <Button  Icon={<AntDesign name='user' color={'white'} size={16} />} onPress={() => openScreen('Profile')} />
        </View>
      </View>
    </>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    // paddingTop: 10,
    justifyContent: 'space-between',
  },
  containerLeft: {
    flexDirection: 'row',
    gap: 10,
  },
});
