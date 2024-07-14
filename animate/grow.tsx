import React, { PropsWithChildren, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from 'react-native-reanimated';

const GrowAnimation = ({ children, styles = {} }: PropsWithChildren & any) => {
  const scale = useSharedValue(10);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: scale.value }],
    };
  });

  useEffect(() => {
    startAnimation()
  }, [])

  const startAnimation = () => {
    scale.value = withTiming(0, {
      duration: 100,
      easing: Easing.inOut(Easing.ease),
    });
  };

  return (
    <Animated.View style={[styles.container, animatedStyle, styles ]}>
      {children}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  }
});

export default GrowAnimation;
