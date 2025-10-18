import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React, { useState } from 'react';
import TextInputComponent from '../../Components/FormComponent/TextInputComponent';
import { MainStyle } from '../../Assets/Style/MainStyle';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import { MainButtonComponent } from '../../Components/FormComponent/ButtonComponent';
import { useAuth } from '../../CustomHook/CustomHooks';
import { Logo, Whatsapp } from '../../Assets/Constant/Images';
import CustomSwitch from '../../Components/FormComponent/CustomSwitchButton';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const [loginOrRegister, setLoginOrRegister] = useState('login');

  const navigation = useNavigation();

  const LoginRegisterPress = () => {
    if (loginOrRegister === 'login') {
      setLoginOrRegister('register');
    } else {
      setLoginOrRegister('login');
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={MainStyle.MainContainer}>
        {/* Logo Section */}
        <View style={styles.logoWrapper}>
          <ImageBackground
            source={require('../../Assets/Images/Icons/IconWrapper.png')}
            style={{
              width: 282,
              height: 282,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Logo height={247} width={247} />
          </ImageBackground>
        </View>

        {/* Welcome Section */}
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.description}>
            Sign up in seconds. Get services in minutes.
          </Text>
        </View>

        {/* Input Section */}
        <View style={styles.inputSection}>
          <View style={styles.container}>
            <Text style={styles.title}>Mobile Number</Text>

            <View style={styles.rowContainer}>
              {/* Flag Dropdown */}
              <TouchableOpacity
                style={styles.countryContainer}
                onPress={() => setModalVisible(true)}
              />

              {/* Phone Input */}
              <TextInputComponent
                label=""
                withWrapper
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
                maxLength={10}
                containerStyle={{
                  flex: 1,
                  marginLeft: 10,
                }}
                wrapperStyle={{
                  height: moderateVerticalScale(48),
                  alignItems: 'center',
                }}
              />
            </View>

            {/* WhatsApp Switch */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <CustomSwitch value={isEnabled} onChange={setIsEnabled} />
              <Whatsapp width={20} height={20} style={{ marginLeft: 8 }} />
              <Text> Same number for WhatsApp</Text>
            </View>

            {/* Login Button */}
            <View style={{ marginTop: moderateVerticalScale(30) }}>
              <MainButtonComponent
                title="Next"
                handleButtonPress={() =>
                  loginOrRegister === 'login'
                    ? navigation.navigate('OtpVerify')
                    : navigation.navigate('Register')
                }
              />
            </View>

            {/* OTP Info */}
            <View style={{ marginTop: moderateVerticalScale(10) }}>
              <Text style={styles.otpDescription}>
                An OTP will be sent on given phone number for verification.
                Standard message and data rates apply.
              </Text>
            </View>
          </View>
        </View>

        {/* Footer Section (Always at Bottom) */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            {loginOrRegister === 'login'
              ? 'Don’t have an account?'
              : 'Already have an account?'}{' '}
            <Text style={{ color: '#37B7FE' }} onPress={LoginRegisterPress}>
              {loginOrRegister === 'login' ? 'Register' : 'Login'}
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  logoWrapper: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3F9FF',
  },
  welcomeSection: {
    flex: 0.15,
    justifyContent: 'center',
  },
  inputSection: {
    flex: 0.45,
  },
  footer: {
    // flex: 0.1,
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: scale(24),
    color: '#034175',
    fontWeight: '700',
    textAlign: 'left',
    fontFamily: 'Inter-Bold',
  },
  description: {
    fontSize: scale(20),
    color: '#37B7FE',
    fontWeight: '500',
    textAlign: 'left',
    fontFamily: 'Inter-Medium',
  },
  container: {
    paddingTop: moderateVerticalScale(20),
  },
  title: {
    marginBottom: moderateVerticalScale(8),
    fontWeight: '500',
    fontSize: scale(14),
  },
  rowContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  countryContainer: {
    width: moderateScale(68),
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: moderateScale(12),
    paddingHorizontal: moderateScale(12),
    height: moderateVerticalScale(48),
    justifyContent: 'center',
  },
  otpDescription: {
    textAlign: 'center',
    color: '#757575',
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  footerText: {
    textAlign: 'center',
    color: '#757575',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '400',
  },
});
