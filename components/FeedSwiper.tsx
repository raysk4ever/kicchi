import React, {useCallback, useRef} from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  type ImageSourcePropType,
  Text,
} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// import { AntDesign } from '@expo/vector-icons';
import {Swiper, type SwiperCardRefType} from 'rn-swiper-list';

// import { ActionButton } from '../components';

const IMAGES: ImageSourcePropType[] = [
  require('../assets/image.png'),
  require('../assets/image.png'),
  require('../assets/image.png'),
  require('../assets/image.png'),
];

const FeedSwiper = () => {
  const ref = useRef<SwiperCardRefType>();

  const renderCard = useCallback((image: ImageSourcePropType) => {
    return (
      <View style={styles.renderCardContainer}>
        <Image
          source={image}
          style={styles.renderCardImage}
          resizeMode="cover"
        />
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
            backgroundColor: 'blue',
          },
        ]}
      />
    );
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.subContainer}>
        <Swiper
          ref={ref}
          cardStyle={styles.cardStyle}
          data={IMAGES}
          renderCard={renderCard}
          onSwipeRight={cardIndex => {
            console.log('cardIndex', cardIndex);
          }}
          onSwipedAll={() => {
            console.log('onSwipedAll');
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
      </View>

      <View style={styles.buttonsContainer}>
        <ActionButton
          style={styles.button}
          onTap={() => {
            ref.current?.swipeLeft();
          }}>
          <Text>left</Text>
          {/* <AntDesign name="close" size={32} color="white" /> */}
        </ActionButton>
        <ActionButton
          style={[styles.button, {height: 60, marginHorizontal: 10}]}
          onTap={() => {
            ref.current?.swipeBack();
          }}>
          <Text>back</Text>
          {/* <AntDesign name="reload1" size={24} color="white" /> */}
        </ActionButton>
        <ActionButton
          style={styles.button}
          onTap={() => {
            ref.current?.swipeTop();
          }}>
          <Text>top</Text>
          {/* <AntDesign name="arrowup" size={32} color="white" /> */}
        </ActionButton>
        <ActionButton
          style={styles.button}
          onTap={() => {
            ref.current?.swipeRight();
          }}>
          <Text>right</Text>
          {/* <AntDesign name="heart" size={32} color="white" /> */}
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
    bottom: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 80,
    borderRadius: 40,
    marginHorizontal: 20,
    aspectRatio: 1,
    backgroundColor: '#3A3D45',
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
    width: '95%',
    height: '95%',
    borderRadius: 15,
    marginVertical: 20,
  },
  renderCardContainer: {
    flex: 1,
    borderRadius: 15,
    height: '75%',
    width: '100%',
  },
  renderCardImage: {
    height: '100%',
    width: '100%',
    borderRadius: 15,
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlayLabelContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
});

type ActionButtonProps = TouchableOpacity['props'] & {
  onTap?: () => void;
};

const ActionButton = React.memo(
  ({onTap, style, children, ...rest}: ActionButtonProps) => {
    return (
      <TouchableOpacity onPress={onTap} {...rest} style={style}>
        {children}
      </TouchableOpacity>
    );
  },
);
