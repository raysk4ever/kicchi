import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  title?: string;
  active?: boolean;
  shrink?: boolean
  Icon?: any,
  textStyle?: StyleProp<TextStyle>
};

const Button = ({title = '', active = false, shrink = false, Icon, textStyle, ...props}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
          styles.actionButton,
          active && styles.activeActionButton,
          // shrink && { width: '' }
        ]}
      {...props}>
        {Icon}
        {title && (
          <Text style={[styles.btnText, active && styles.activeBtnText, textStyle]}>
            {title}
          </Text>
        )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  actionButton: {
    backgroundColor: '#4f3d5090',
    paddingVertical: 12,
    paddingHorizontal: 13,
    borderRadius: 20,
    cursor: 'pointer',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    // justifyContent: 'flex-start'
  },
  activeActionButton: {
    backgroundColor: '#fc3763',
  },
  btnText: {
    color: 'white',
    fontWeight: '800',
  },
  activeBtnText: {
    fontWeight: '800',
  },
});
