import React, {useContext, useEffect, useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import {AppContext} from '../Context';
import {VolumeButton} from './AppButton';

import {Platform, Dimensions} from 'react-native';

export const isIOS = Platform.OS === 'ios';

export const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  videoView: {
    width,
    opacity: 1,
  },
  videoOuter: {
    width,
    // ...CommonStyle.center,
  },
});

const VideoComponent = ({post, isVisible, isNext}) => {
  const {displayHeight} = useContext(AppContext);
  const {isMute} = useContext(AppContext);
  const videoRef = useRef(null);
  const {url} = post;
  const {videoOuter, videoView} = styles;

  useEffect(() => {
    if (!isVisible && isNext && videoRef) {
      // videoRef.current.seek(0);
    }
  }, [isVisible, isNext]);

  const videoError = error => {
    // Manage error here
  };

  return (
    <View style={[videoOuter, {height: displayHeight}]}>
      <Video
        ref={videoRef}
        fullscreenAutorotate={true}
        source={url}
        autoPlay={true}
        repeat={true}
        onError={videoError}
        resizeMode={'cover'}
        muted={(!isVisible && true) || isMute}
        style={[videoView, {height: displayHeight}]}
        playInBackground={false}
        paused={!isVisible}
        ignoreSilentSwitch={'ignore'}
      />
      {/* <VolumeButton /> */}
    </View>
  );
};

export {VideoComponent};
