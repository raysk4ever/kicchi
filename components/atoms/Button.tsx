import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  title?: string;
  active?: boolean;
  Icon?: any
};

const Button = ({title = '', active = false, Icon, ...props}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.actionButton, active && styles.activeActionButton]}
      {...props}>
        {Icon}
        {title && (
          <Text style={[styles.btnText, active && styles.activeBtnText]}>
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
    alignItems: 'center'
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
