import React, { useCallback, useRef, useState } from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  type ImageSourcePropType,
  Text,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Video, { ReactVideoSource } from 'react-native-video';
import { Swiper, type SwiperCardRefType } from 'rn-swiper-list';

// import { ActionButton } from '../components';
type TAsset = {
  uri: ImageSourcePropType | ReactVideoSource,
  isVideo?: boolean,
}
type TSlide = {
  name: string;
  age: number;
  assets: TAsset[]
}

const IMAGES: TSlide[] = [
  {
    assets: [
      { uri: require('../assets/video1.mp4'), isVideo: true },
      { uri: require('../assets/video1.mp4'), isVideo: true },
      { uri: require('../assets/video1.mp4'), isVideo: true }
    ], name: 'Clyde', age: 69
  },
  {
    assets: [
      { uri: require('../assets/image.png') }
    ], name: 'Norman', age: 69
  },
  {
    assets: [
      { uri: require('../assets/image2.jpg') }
    ], name: 'Leon', age: 32
  },
  {
    assets: [
      { uri: require('../assets/image3.jpg') }
    ], name: 'Bess', age: 64
  },
  {
    assets: [
      { uri: require('../assets/image4.jpg') }
    ], name: 'Rose', age: 29
  },
  {
    assets: [
      { uri: require('../assets/image5.jpg') }
    ], name: 'Jonathan', age: 58
  },
];

const FeedSwiper = () => {
  const ref = useRef<SwiperCardRefType>();
  const [viewedAll, setViewedAll] = useState(false)

  const renderInnerCard = (item: TAsset) => {
    return (
      <View style={styles.renderCardContainer}>
      {item.isVideo ? (
          <Video
            source={item.uri as ReactVideoSource}
            style={styles.renderCardImage}
            resizeMode="cover"
            repeat={true}
          />
        ) : <Image
          source={item.uri as ImageSourcePropType}
          style={styles.renderCardImage}
          resizeMode="cover"
        />}
      {/* <View style={styles.infoOverlayContainer}>
        <Text style={styles.username}>{item.name}</Text>
        <Text style={[styles.username, styles.age]}>{item.age}</Text>
        <View style={styles.icon}>
          <AntDesign name='star' size={22} color={'white'} />
        </View>
      </View> */}
    </View>
    )
  }
  

  const renderCard = useCallback((item: TSlide) => {
    const asset = item.assets[0]
    return (
      <View style={styles.renderCardContainer}>
        {asset.isVideo ? (
            <Video
              source={asset.uri as ReactVideoSource}
              style={styles.renderCardImage}
              resizeMode="cover"
              repeat={true}
            />
          ) : <Image
            source={asset.uri as ImageSourcePropType}
            style={styles.renderCardImage}
            resizeMode="cover"
          />}
        <View style={styles.infoOverlayContainer}>
          <Text style={styles.username}>{item.name}</Text>
          <Text style={[styles.username, styles.age]}>{item.age}</Text>
          <View style={styles.icon}>
            <AntDesign name='star' size={22} color={'white'} />
          </View>
        </View>
      </View>
    );
  }, []);
  const OverlayLabelRight = useCallback(() => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: 'green',
          },
        ]}
      />
    );
  }, []);
  const OverlayLabelLeft = useCallback(() => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: 'red',
          },
        ]}
      />
    );
  }, []);
  const OverlayLabelTop = useCallback(() => {
    return (
      <View
        style={[
          styles.overlayLabelContainer,
          {
            backgroundColor: 'pink',
          },
        ]}
      >
        <AntDesign name='heart' size={40} color={'white'} />
        <Text style={{ color: 'white', fontSize: 40 }}>Super Like</Text>
      </View>
    );
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.subContainer}>
        <Swiper ref={ref}
          cardStyle={styles.cardStyle}
          data={IMAGES}
          disableLeftSwipe
          disableRightSwipe
          renderCard={renderCard}
          onSwipeRight={cardIndex => {
            console.log('cardIndex', cardIndex);
          }}
          onSwipedAll={() => {
            console.log('onSwipedAll');
            setViewedAll(true)
          }}
          onSwipeLeft={cardIndex => {
            console.log('onSwipeLeft', cardIndex);
          }}
          onSwipeTop={cardIndex => {
            console.log('onSwipeTop', cardIndex);
          }}
          OverlayLabelRight={OverlayLabelRight}
          OverlayLabelLeft={OverlayLabelLeft}
          OverlayLabelTop={OverlayLabelTop}
          onSwipeActive={() => {
            console.log('onSwipeActive');
          }}
          onSwipeStart={() => {
            console.log('onSwipeStart');
          }}
          onSwipeEnd={() => {
            console.log('onSwipeEnd');
          }}
        />
        {viewedAll && (
          <View>
            <Text>Hi you saw all</Text>
          </View>
        )}
      </View>

      <View style={styles.buttonsContainer}>
        <ActionButton
          style={[styles.button, { backgroundColor: 'white' }]}
          onTap={() => {
            ref.current?.swipeLeft();
          }}>
          {/* <Text>Skip</Text> */}
          <AntDesign name="forward" size={32} color="#fc3763" />
        </ActionButton>
        {/* <ActionButton
          style={[styles.button, {height: 60, marginHorizontal: 10}]}
          onTap={() => {
            ref.current?.swipeBack();
          }}>
          <Text>Undo</Text>
          <AntDesign name="reload1" size={24} color="white" />
        </ActionButton> */}
        {/* <ActionButton
          style={styles.button}
          onTap={() => {
            ref.current?.swipeTop();
          }}>
          <Text>Super Like</Text>
          <AntDesign name="arrowup" size={32} color="white" />
        </ActionButton> */}
        <ActionButton
          style={[styles.button]}
          onTap={() => {
            ref.current?.swipeRight();
          }}>
          {/* <Text>Like</Text> */}
          <AntDesign name="heart" size={32} color="white" />
        </ActionButton>
      </View>
    </GestureHandlerRootView>
  );
};

export default FeedSwiper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    bottom: 20,
    // position: 'absolute',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4f3d50',
    borderRadius: 20,
    padding: 5,
    paddingVertical: 10
  },
  button: {
    height: 60,
    aspectRatio: 1,
    borderRadius: 40,
    marginHorizontal: 20,
    backgroundColor: '#fc3763',
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    marginVertical: 20,
  },
  renderCardContainer: {
    flex: 1,
    borderRadius: 15,
    height: '75%',
    width: '100%',
    backgroundColor: 'gray',
    overflow: 'hidden'
  },
  renderCardImage: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
  },
  subContainer: {
    flex: 1,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: '96%',
    height: '95%',
    padding: 10
  },
  overlayLabelContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoOverlayContainer: {
    position: 'absolute',
    zIndex: 1,
    bottom: 30,
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    gap: 10
    // -moz-box-shadow: inset 0 -10px 10px -10px #000000;
    // -webkit-box-shadow: inset 0 -10px 10px -10px #000000;
  },
  username: {
    color: 'white',
    fontSize: 35,
    fontWeight: '800',
    textShadowColor: 'black',
    textShadowRadius: 9,
    textShadowOffset: {
      width: 1,
      height: 1
    },
  },
  age: {
    fontWeight: '400',
  },
  icon: {
    backgroundColor: '#fc3763',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35
  }
});

type ActionButtonProps = TouchableOpacity['props'] & {
  onTap?: () => void;
};

const ActionButton = React.memo(
  ({ onTap, style, children, ...rest }: ActionButtonProps) => {
    return (
      <TouchableOpacity onPress={onTap} {...rest} style={style}>
        {children}
      </TouchableOpacity>
    );
  },
);
