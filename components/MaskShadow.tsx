import React from 'react'
import LinearGradient, { LinearGradientProps } from "react-native-linear-gradient";

// type TMaskShadow = {
//   colors?: (string | number)[]
// }

export default function MaskShadow({colors, ...props}: any) {
  return (
    <LinearGradient
      style={{ zIndex: 1, position: 'absolute', width: '100%', height: '100%' }}
      colors={colors ?? ['transparent', 'transparent', '#000']}
      {...props}
    />
  )
}