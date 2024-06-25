import React, {useState, useRef, useContext} from 'react';
import {View, Animated, Text} from 'react-native';
import {FeedRow} from './FeedRow';
import {AppContext} from '../Context';
import CommonStyle from '../Theme/CommonStyle';
import {height, isIOS} from '../Utils/Constant';

const FeedList = () => {
  const {displayHeight, setDisplayHeight} = useContext(AppContext);
  const refFlatList = useRef();
  const [scrollY] = useState(new Animated.Value(0));
  const [scrollInfo, setScrollInfo] = useState({isViewable: true, index: 0});

  const viewabilityConfig = {viewAreaCoveragePercentThreshold: 80};
  const onViewableItemsChanged = useRef(viewableItems => {
    const info = {
      isViewable: viewableItems.changed[0].isViewable,
      index: viewableItems.changed[0].index,
    };
    setScrollInfo(info);
  });

  const transitionAnimation = index => {
    const rowHeight = displayHeight * index;
    return {
      opacity: scrollY.interpolate({
        inputRange: [
          rowHeight,
          rowHeight + displayHeight / 2,
          rowHeight + displayHeight,
        ],
        outputRange: [1, 0.2, 0],
        useNativeDriver: true,
        extrapolate: 'clamp',
      }),
    };
  };

  const getItemLayout = (item, index) => ({
    length: displayHeight,
    offset: displayHeight * index,
    index,
  });

  const onLayout = ({nativeEvent}) => {
    setDisplayHeight((isIOS && nativeEvent.layout.height) || height);
  };

  const onEndReached = () => {
    // make api call here
  };

  const keyExtractor = (item, index) => {
    return `${item.id}`;
  };

  const renderItem = ({item, index}) => {
    const scrollIndex = scrollInfo?.index || 0;
    const isNext = index >= scrollIndex - 1 && index <= scrollIndex + 1;
    return (
      <FeedRow
        item={item}
        isNext={isNext}
        index={index}
        transitionAnimation={transitionAnimation}
        visible={scrollInfo}
        isVisible={scrollIndex === index}
      />
    );
  };

  return (
    <View style={CommonStyle.flexContainer} onLayout={onLayout}>
      <Animated.FlatList
        pagingEnabled
        showsVerticalScrollIndicator={false}
        ref={refFlatList}
        automaticallyAdjustContentInsets={true}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {y: scrollY}},
            },
          ],
          {
            useNativeDriver: false,
          },
        )}
        data={data}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        keyExtractor={keyExtractor}
        onEndReachedThreshold={20}
        onEndReached={onEndReached}
        removeClippedSubviews={true}
      />
    </View>
  );
};

export default FeedList;

export const data = [
  {
    id: 1,
    post: {
      url: require('../assets/video1.mov'),
    },
    user: {
      userId: 1,
      name: 'Kalki Patel',
      isFollowing: false,
    },
    comment: 101,
    like: '121.3 k',
    likeStatus: true,
    postText: 'React Native reels with actions shown in this project',
  },
  {
    id: 2,
    post: {
      url: require('../assets/video2.mov'),
    },
    user: {
      userId: 2,
      name: 'Kajol Patel',
      isFollowing: true,
    },
    comment: 100,
    like: '10.3 k',
    likeStatus: false,
    postText: 'React Native reels with actions shown in this project',
  },
  {
    id: 3,
    post: {
      url: require('../assets/video3.mov'),
    },
    user: {
      userId: 3,
      name: 'Kalki Patel',
      isFollowing: false,
    },
    comment: 10,
    like: '121',
    likeStatus: true,
    postText: 'React Native reels with actions shown in this project',
  },
  {
    id: 4,
    post: {
      url: require('../assets/video4.mov'),
    },
    user: {
      userId: 4,
      name: 'Kajol Patel',
      isFollowing: true,
    },
    comment: 300,
    like: '150.3 k',
    likeStatus: false,
    postText: 'React Native reels with actions shown in this project',
  },
  {
    id: 5,
    post: {
      url: require('../assets/video5.mov'),
    },
    user: {
      userId: 5,
      name: 'Kalki Patel',
      isFollowing: false,
    },
    comment: 320,
    like: '121.3 k',
    likeStatus: true,
    postText: 'React Native reels with actions shown in this project',
  },
];
