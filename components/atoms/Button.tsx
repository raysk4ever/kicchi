import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  title: string;
  active?: boolean;
};

const Button = ({title = '', active = false, ...props}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.actionButton, active && styles.activeActionButton]}
      {...props}>
      <Text style={[styles.btnText, active && styles.activeBtnText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  actionButton: {
    backgroundColor: '#4f3d5090',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    cursor: 'pointer',
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
