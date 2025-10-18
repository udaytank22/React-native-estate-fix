import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';

import Filter from '../Assets/Images/Icons/FIlter.svg';

const FilterButton = () => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.filterBtn}>
        <View style={styles.iconWrapper}>
          <Filter width={26} height={26} />
        </View>
        <Text style={styles.filterText}>Filters</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(50),
    borderColor: '#c7c7c7',
    borderWidth: 1,
    height: verticalScale(32),
    width: scale(85),
  },
  iconWrapper: {
    marginRight: scale(8),
  },
  filterText: {
    fontSize: scale(12),
    fontWeight: '400',
    color: '#FFFFFF',
  },
});

export default FilterButton;
