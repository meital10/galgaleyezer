import React from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  TouchableHighlight,
  View,
} from 'react-native';
import { COLORS, MEASUREMENTS } from '../styles/styles.config';
import AppText from './AppText';

const AppButton = ({ loading, style, children, disabled, ...props }) => {
  return (
    <View>
      <TouchableHighlight
        onPress={() => alert('Pressed!')}
        style={disabled ? styles.disabledButton : styles.button}
        disabled={disabled}
        {...props}
      >
        <AppText style={styles.label}>{children}</AppText>
      </TouchableHighlight>
    </View>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    backgroundColor: COLORS.green,
    width: 290,
    borderRadius: MEASUREMENTS.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    height: MEASUREMENTS.fontSize * 2.8,
    color: '#ff00ff',
  },
  disabledButton: {
    marginTop: 40,
    backgroundColor: '#96db9b',
    width: 290,
    borderRadius: MEASUREMENTS.borderRadius,
    justifyContent: 'center',
    alignItems: 'center',
    height: MEASUREMENTS.fontSize * 2.8,
    color: '#ff00ff',
  },
  label: { color: '#fff', fontSize: MEASUREMENTS.fontSize },
});
