import {
  View,
  Text,
  Modal,
  StyleSheet,
  StatusBar,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import { MainStyle } from '../../Assets/Style/MainStyle';
import TextInputComponent from '../../Components/FormComponent/TextInputComponent';
import { MainButtonComponent } from '../../Components/FormComponent/ButtonComponent';
import {
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../CustomHook/CustomHooks';
import { BlackBackArrow, Check } from '../../Assets/Constant/Images';
import { SafeAreaView } from 'react-native-safe-area-context';

const Register = () => {
  const navigaion = useNavigation();

  const { login } = useAuth();
  const [enterName, setEnterName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmationModalVisible, setConfirmationMOdalVisible] =
    useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Pressable style={styles.Header} onPress={() => navigaion.goBack()}>
        <View
          style={{
            position: 'absolute',
            left: 24,
            top: 13,
            height: 30,
            width: 30,
            backgroundColor: '#DFF3FF',
            borderRadius: 4,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <BlackBackArrow width={20} height={20} />
        </View>
      </Pressable>
      <View style={MainStyle.MainContainer}>
        <View style={[MainStyle.section]}>
          <View style={styles.welcomeSection}>
            <Text style={styles.description}>Welcome to the</Text>
            <Text style={styles.welcomeText}>Estate Fix & Care</Text>
          </View>
          <View style={{ marginTop: moderateVerticalScale(14) }}>
            <Text style={styles.otpDescription}>
              Hassle-free bookings begin with you.
            </Text>
          </View>
          <View
            style={{
              marginTop: 40,
            }}
          >
            <TextInputComponent
              label="Enter Name"
              withWrapper
              value={enterName}
              onChangeText={text => setEnterName(text)}
              wrapperStyle={{
                height: moderateVerticalScale(48),
              }}
            />
            <TextInputComponent
              label="Enter Email Address"
              withWrapper
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
              wrapperStyle={{
                height: moderateVerticalScale(48),
              }}
            />
          </View>
          <View style={{ alignItems: 'center', marginTop: verticalScale(30) }}>
            <MainButtonComponent
              title="Send OTP"
              handleButtonPress={() => setConfirmationMOdalVisible(true)}
            />
          </View>
          <View style={{ marginTop: moderateVerticalScale(10) }}>
            <Text style={[styles.otpDescription, { textAlign: 'center' }]}>
              An OTP will be sent on given email Address for verification.
              Standard message and data rates apply.
            </Text>
          </View>

          {/* Footer Section (Always at Bottom) */}
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Already have an account?{' '}
            <Text
              style={{ color: '#37B7FE' }}
              onPress={() => navigaion.navigate('Login')}
            >
              Login
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#FFFFFF',
    height: 57,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    // height: verticalScale(564),
    backgroundColor: '#fff',
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    padding: scale(10),
  },
  modalTitle: {
    fontSize: scale(16),
    fontWeight: '600',
    color: '#000',
    marginBottom: scale(10),
    marginTop: verticalScale(10),
    fontFamily: 'Poppins-SemiBold',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginBottom: scale(20),
  },
  successText: {
    fontSize: scale(26),
    fontWeight: '600',
    color: '#000',
    textAlign: 'left',
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: -1,
  },
  highlight: {
    fontSize: scale(26),
    fontWeight: '600',
    color: '#37B7FE',
    textAlign: 'left',
    marginBottom: scale(6),
    fontFamily: 'Poppins-SemiBold',
    letterSpacing: -1,
  },
  subText: {
    fontSize: scale(14),
    fontWeight: '400',
    color: '#60655C',
    marginBottom: verticalScale(52),
    fontFamily: 'Poppins',
    flexWrap: 'wrap',
  },
  iconWrapper: {
    alignItems: 'center',
    marginBottom: verticalScale(41.49),
  },
  iconCircle: {
    width: scale(100),
    height: scale(100),
    borderRadius: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaButton: {
    height: verticalScale(50),
    borderRadius: scale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ctaText: {
    fontSize: scale(16),
    fontWeight: '600',
    color: '#fff',
  },
  indecator: {
    height: 6,
    width: 32,
    borderRadius: 1000,
    backgroundColor: '#F3F4F6',
  },
  welcomeSection: {
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: scale(30),
    color: '#37B7FE',
    fontWeight: '700',
    textAlign: 'left',
    fontFamily: 'Inter-SemiBold',
  },
  description: {
    fontSize: scale(30),
    color: '#191919',
    fontWeight: '500',
    textAlign: 'left',
    fontFamily: 'Inter-SemiBold',
  },
  otpDescription: {
    textAlign: 'left',
    color: '#757575',
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: '400',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerText: {
    textAlign: 'center',
    color: '#757575',
    fontSize: 16,
    fontFamily: 'Inter',
    fontWeight: '400',
  },
});
