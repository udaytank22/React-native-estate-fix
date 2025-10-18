import React, { useEffect, useRef } from 'react';
import {
  TouchableOpacity,
  Animated,
  StyleSheet,
  ViewStyle,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale } from 'react-native-size-matters';

interface CustomSwitchProps {
  value: boolean;
  onChange: (val: boolean) => void;
  style?: ViewStyle;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({
  value,
  onChange,
  style,
}) => {
  const translateX = useRef(
    new Animated.Value(value ? moderateScale(30) : 0),
  ).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: value ? moderateScale(30) : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [value]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onChange(!value)}
      style={[styles.container, style]}
    >
      <LinearGradient
        colors={value ? ['#003973', '#00c6ff'] : ['#ccc', '#ccc']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.switchBackground}
      >
        <Animated.View style={[styles.knob, { transform: [{ translateX }] }]} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomSwitch;

const styles = StyleSheet.create({
  container: {
    // padding: 5,
  },
  switchBackground: {
    width: moderateScale(50),
    height: moderateScale(20),
    borderRadius: moderateScale(15),
    justifyContent: 'center',
    padding: Platform.OS === 'ios' ? 0 : 2,
  },
  knob: {
    width: moderateScale(17),
    height: moderateScale(17),
    borderRadius: moderateScale(20),
    backgroundColor: '#fff',
    elevation: 2,
  },
});
