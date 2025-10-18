import { StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

export const MainStyle = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    padding: 24,
  },
  section: {
    paddingTop: verticalScale(15),
  },
  SectionTitle: {
    fontSize: scale(16),
    fontWeight: '600',
    fontFamily: 'Inter-Semibold',
  },
  linkText: {
    fontSize: scale(12),
    fontFamily: 'Inter-Medium',
    fontWeight: '500',
    color: '#37B7FE',
  },
});
