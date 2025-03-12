import { useCallback, useState } from 'react';
import { SharedValue, useAnimatedReaction } from 'react-native-reanimated';

export function useSharedValueSafe<T>(sharedValue: SharedValue<T>): T {
  const [safeValue, setSafeValue] = useState<T>(sharedValue.value);

  useAnimatedReaction(
    () => sharedValue.value,
    (currentValue) => {
      setSafeValue(currentValue);
    },
    [sharedValue]
  );

  return safeValue;
}
