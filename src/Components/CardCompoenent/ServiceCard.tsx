import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Star } from '../../Assets/Constant/Images';

interface ServiceCardProps {
  image: ImageSourcePropType;
  label: string;
  rating: string;
  amount: string;
  onPress?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  label,
  rating,
  amount,
  onPress,
}) => {
  return (
    <View style={styles.card}>
      {/* Image */}
      <View style={{ borderRadius: 10, overflow: 'hidden' }}>
        <Image source={image} style={styles.image} />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <View>
          <Text style={styles.name}>{label}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Star height={12} width={12} />
            <Text style={styles.rating}>{rating}</Text>
          </View>
          <View style={styles.amountWrapper}>
            <Text style={styles.amountText}>{amount}</Text>
          </View>
        </View>
        <LinearGradient
          colors={['#106099', '#2181bf']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.arrowContainer}
        >
          <View style={styles.iconWrapper}>
            <Icon
              name="arrow-top-right-thin"
              color="white"
              size={15}
              onPress={onPress}
            />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  card: {
    width: scale(195),
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: scale(18),
    marginRight: scale(10),
    marginBottom: verticalScale(10),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 1,
    padding: moderateScale(12),
  },
  image: {
    height: verticalScale(131),
    width: scale(175),
    resizeMode: 'cover',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // padding: moderateScale(6),
  },
  name: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: verticalScale(22),
    color: '#000000',
  },
  arrowContainer: {
    position: 'absolute', // ✅ stick to bottom-right
    bottom: scale(0),
    right: scale(0),
    borderRadius: scale(20),
  },
  iconWrapper: {
    padding: scale(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    fontWeight: '400',
    color: '#242424',
  },
  amountWrapper: {
    backgroundColor: '#F8F8FF',
    borderRadius: 100,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  amountText: {
    paddingVertical: 3,
    paddingHorizontal: 8,
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    fontWeight: '500',
  },
});
