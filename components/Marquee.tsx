import React, { PropsWithChildren } from 'react'

import { Marquee as AniMarquee } from '@animatereactnative/marquee';
import { ViewStyle } from 'react-native';

type TMarquee = PropsWithChildren & {
  rtl?: boolean;
}

export default function Marquree({children, rtl = false}: TMarquee) {
  return (
    <AniMarquee spacing={10} speed={.3} style={[
      { marginBottom: 10 },
      rtl && {transform: [{ scaleX: -1 }]}
    ] as ViewStyle}>
      {children}
    </AniMarquee>
  )
}