import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
  View
} from 'react-native';

type ButtonProps = TouchableOpacityProps & {
  title?: string;
  active?: boolean;
  shrink?: boolean
  loading?: boolean;
  Icon?: any,
  textStyle?: StyleProp<TextStyle>
  badge?: any
};

const Button = ({ title = '', active = false, shrink = false, loading = false, Icon, textStyle, badge, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.actionButton,
        active && styles.activeActionButton,
        // shrink && { width: '' }
      ]}
      disabled={loading}
      {...props}>
      {badge && <Badge badge={badge} />}
      {
        loading ? (
          <ActivityIndicator color={'white'} />
        ) : (
          <>
            {Icon}
            {title && (
              <Text style={[styles.btnText, active && styles.activeBtnText, textStyle]}>
                {title}
              </Text>
            )}</>
        )
      }
    </TouchableOpacity>
  );
};

export default Button;

const Badge = ({ badge = 10 }) => {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{badge}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: 'red',
    position: 'absolute',
    zIndex: 1,
    padding: 2,
    width: 20,
    borderRadius: 50,
    height: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    right: -5,
    top: -3
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '700'
  },
  actionButton: {
    backgroundColor: '#4f3d5090',
    paddingVertical: 12,
    paddingHorizontal: 13,
    borderRadius: 20,
    cursor: 'pointer',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    maxHeight: 50,
    justifyContent: 'center'
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
