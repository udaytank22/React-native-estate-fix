import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { scale, verticalScale } from 'react-native-size-matters';

type ButtonComponentProps = {
  title: string;
  handleButtonPress?: () => void;
  button?: object;
};

export const MainButtonComponent = ({
  title,
  handleButtonPress,
  button,
}: ButtonComponentProps) => {
  const { width } = useWindowDimensions(); // ✅ move hook here

  return (
    <LinearGradient
      colors={['#034175', '#37B7FE']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[styles.button, button]}
    >
      <TouchableOpacity style={styles.buttonInner} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    minHeight: 48,
    justifyContent: 'center',
    width: '100%',
  },
  buttonInner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: scale(16),
    textAlign: 'center',
  },
});
