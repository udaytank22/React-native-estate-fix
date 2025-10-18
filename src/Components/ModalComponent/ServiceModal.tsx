import React, { useState, useMemo } from 'react';
import {
  Modal,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

interface Country {
  code: string;
  name: string;
  dial_code: string;
  flag: string;
}

interface ServiceDetailsModalProps {
  visible?: boolean;
  onClose?: () => void;
  HomeCard?: any[];
}

const ServiceDetailsModal: React.FC<ServiceDetailsModalProps> = ({
  visible,
  onClose,
  HomeCard,
}) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
            {HomeCard.map((homedata: any, index: number) => (
              <View key={index} style={styles.container}>
                <View style={styles.cardWrapper}>
                  <homedata.image width={50} height={50} />
                </View>
                <Text style={styles.cardDescription}>{homedata.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ServiceDetailsModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    height: '80%',
    backgroundColor: '#fff',
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
    padding: scale(20),
  },
  modalTitle: {
    fontSize: scale(18),
    fontWeight: '700',
    marginBottom: moderateVerticalScale(10),
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: scale(10),
    paddingHorizontal: scale(10),
    paddingVertical: moderateVerticalScale(8),
    marginBottom: moderateVerticalScale(10),
    fontSize: scale(14),
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: moderateVerticalScale(12),
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
  },

  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardWrapper: {
    paddingVertical: moderateScale(17),
    paddingHorizontal: moderateScale(15),
    backgroundColor: '#fff',
    borderRadius: moderateScale(6),
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
