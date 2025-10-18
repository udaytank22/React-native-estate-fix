import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View, Image } from 'react-native';

const SplashScreen = ({ navigation }: any) => {
  const logoScale = useRef(new Animated.Value(0.5)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;

  const circle1Scale = useRef(new Animated.Value(0)).current;
  const circle2Scale = useRef(new Animated.Value(0)).current;
  const circle3Scale = useRef(new Animated.Value(0)).current;

  const circle1Opacity = useRef(new Animated.Value(0.5)).current;
  const circle2Opacity = useRef(new Animated.Value(0.5)).current;
  const circle3Opacity = useRef(new Animated.Value(0.5)).current;

  useEffect(() => {
    // Animate logo (zoom + fade)
    Animated.parallel([
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    // Ripple effect with delays
    Animated.stagger(300, [
      Animated.parallel([
        Animated.timing(circle1Scale, {
          toValue: 2.5,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(circle1Opacity, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(circle2Scale, {
          toValue: 2.5,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(circle2Opacity, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(circle3Scale, {
          toValue: 2.5,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(circle3Opacity, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {});
  }, []);

  return (
    <View style={styles.container}>
      {/* Ripple Circles - Behind Logo */}
      <View style={styles.circleContainer}>
        <Animated.View
          style={[
            styles.circle,
            {
              transform: [{ scale: circle1Scale }],
              opacity: circle1Opacity,
            },
          ]}
        />
      </View>

      {/* Logo in front */}
      <Animated.Image
        source={require('../../Assets/Images/Logo/Splashscreen.png')}
        style={[
          styles.logo,
          { transform: [{ scale: logoScale }], opacity: logoOpacity },
        ]}
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f9ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: '#00a2ff33', // transparent blue
  },
  logo: {
    width: 180,
    height: 180,
    zIndex: 10, // ensures logo is on top
  },
});
