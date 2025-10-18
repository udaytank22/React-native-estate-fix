import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

export const HomeServiceCard = ({ homedata }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardWrapper}>
        <homedata.image width={50} height={50} />
      </View>
      <Text style={styles.cardDescription}>{homedata.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: moderateScale(7),
    // paddingHorizontal: moderateScale(5),
    // margin: scale(8),
  },
  cardWrapper: {
    // height: verticalScale(85),
    // width: scale(85),
    paddingVertical: moderateScale(17),
    paddingHorizontal: moderateScale(15),
    backgroundColor: '#fff',
    borderRadius: moderateScale(16),
    alignItems: 'center',
    justifyContent: 'center',

    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    // Shadow for Android
    elevation: 3,
  },
  cardDescription: {
    fontSize: scale(14),
    fontFamily: 'Inter-Regular',
    fontWeight: '400',
    color: '#000000',
    marginTop: verticalScale(6),
    textAlign: 'center',
  },
});
