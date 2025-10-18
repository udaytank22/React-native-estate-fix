import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Platform,
  FlatList,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import FilterButton from '../../Components/FilterButton';
import CustomStatusBar from '../../Components/StatusBar';
import { ArrowDown, SwiperArrow } from '../../Assets/Constant/Images';
import { MainStyle } from '../../Assets/Style/MainStyle';
import { HomeCard, services } from '../../Assets/StaticData/StaticData';
import Swiper from 'react-native-swiper';
import ServiceCard from '../../Components/CardCompoenent/ServiceCard';
import ServiceDetailsModal from '../../Components/ModalComponent/ServiceModal';
import { useAuth } from '../../CustomHook/CustomHooks';

export const images = [
  require('../../Assets/Images/Slider/Slider1.png'),
  require('../../Assets/Images/Slider/Slider2.png'),
  require('../../Assets/Images/Slider/Slider3.png'),
];

const HomeScreen = () => {
  const { logout } = useAuth();
  const [modalVisible, setModalVisible] = useState(false);

  const renderCard = ({ item }: any) => {
    return (
      <ServiceCard
        image={item.image}
        label={item.label}
        rating={item.rating}
        amount={item.amount}
      />
    );
  };

  return (
    <>
      <CustomStatusBar />
      <View style={{ flex: 1 }}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
                gap: scale(6),
              }}
              // onPress={() => navigation.navigate('Search')}
            >
              <View style={{ gap: scale(6) }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: scale(6),
                  }}
                >
                  <Text style={styles.societyName}>Ahmedabad Opal 1</Text>
                  <ArrowDown width={11.4} height={5} />
                </View>
                <Text style={styles.blockText}>Block A-001</Text>
              </View>
            </Pressable>

            <View style={styles.headerIcons}>
              {/* Chat Icon with badge */}
              <View style={styles.iconWrapper}>
                <TouchableOpacity onPress={logout}>
                  <Icon
                    name="chat-outline"
                    size={moderateScale(18)}
                    color="#fff"
                  />
                </TouchableOpacity>
                <View style={styles.badgeBlue}>
                  <Text style={styles.badgeTextSmall}>2</Text>
                </View>
              </View>

              {/* Bell Icon with red dot */}
              <View style={styles.iconWrapper}>
                <Icon
                  name="bell-outline"
                  size={moderateScale(20)}
                  color="#fff"
                />
                <View style={styles.badgeRed} />
              </View>
            </View>
          </View>

          {/* Search Bar */}
          <View style={styles.searchWrapper}>
            <View style={styles.searchContainer}>
              <Icon name="magnify" size={moderateScale(20)} color="#fff" />
              <TextInput
                placeholder="Search"
                placeholderTextColor="#fff"
                style={styles.searchInput}
              />
            </View>
            <FilterButton />
          </View>
        </View>

        <ScrollView style={{ flex: 1 }}>
          <View style={MainStyle.MainContainer}>
            <Text style={MainStyle.SectionTitle}>Our Services</Text>

            {/* service section */}
            <View style={MainStyle.section}>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                {HomeCard.map((homedata: any, index: number) => (
                  <Pressable
                    key={index}
                    style={styles.container}
                    // onPress={() => setModalVisible(true)}
                  >
                    <View style={styles.cardWrapper}>
                      <homedata.image width={50} height={50} />
                    </View>
                    <Text style={styles.cardDescription}>{homedata.label}</Text>
                  </Pressable>
                ))}
              </View>
            </View>

            {/* slider section */}
            <View style={MainStyle.section}>
              <View style={styles.swiperWrapper}>
                <Swiper
                  style={styles.swiper}
                  autoplay
                  autoplayTimeout={3}
                  showsButtons={true}
                  dotStyle={styles.dot}
                  activeDotStyle={styles.activeDot}
                  nextButton={<SwiperArrow style={styles.arrow} />}
                  prevButton={
                    <SwiperArrow
                      style={[
                        styles.arrow,
                        { transform: [{ rotate: '180deg' }] },
                      ]}
                    />
                  }
                >
                  {images.map((img: any, index: number) => (
                    <View
                      key={index}
                      style={{
                        borderRadius: scale(10),
                        overflow: 'hidden',
                        flex: 1,
                      }}
                    >
                      <Image
                        source={img}
                        style={styles.image}
                        resizeMode="cover"
                      />
                    </View>
                  ))}
                </Swiper>
              </View>
            </View>

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Text style={MainStyle.SectionTitle}>Most Booked Services</Text>
              <Text style={MainStyle.linkText}>See All</Text>
            </View>
            <View style={MainStyle.section}>
              <FlatList
                data={services}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderCard}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </ScrollView>
      </View>
      <ServiceDetailsModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        HomeCard={HomeCard}
      />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    paddingBottom: verticalScale(20),
    backgroundColor: '#034175',
    borderBottomRightRadius: 33,
    borderBottomLeftRadius: 33,
  },
  headerTop: {
    padding: moderateScale(16),
    paddingLeft: scale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  societyName: {
    fontFamily: 'Inter-Medium',
    fontSize: scale(13),
    color: '#fff',
    fontWeight: '600',
  },
  blockText: {
    fontFamily: 'Inter',
    fontSize: scale(13),
    color: '#e0f7fa',
    marginTop: verticalScale(2),
  },
  headerIcons: {
    flexDirection: 'row',
    gap: scale(12),
  },
  iconWrapper: {
    height: scale(35),
    width: scale(35),
    borderRadius: scale(12),
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(8),
  },
  badgeBlue: {
    position: 'absolute',
    top: verticalScale(-4),
    right: scale(-4),
    backgroundColor: '#1da1f2',
    borderRadius: scale(10),
    minWidth: scale(18),
    height: verticalScale(18),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(4),
  },
  badgeRed: {
    position: 'absolute',
    top: verticalScale(6),
    right: scale(6),
    width: scale(8),
    height: scale(8),
    borderRadius: scale(4),
    backgroundColor: 'red',
  },
  badgeText: {
    fontFamily: 'Inter',
    color: '#fff',
    fontSize: scale(14),
    fontWeight: '500',
  },
  badgeTextSmall: {
    color: '#fff',
    fontSize: scale(10),
    fontWeight: '600',
  },
  searchWrapper: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: scale(220),
    height: verticalScale(32),
    borderRadius: scale(30),
    borderColor: '#c7c7c7',
    borderWidth: 1,
    paddingHorizontal: scale(12),
    marginHorizontal: scale(10),
    marginBottom: Platform.OS === 'ios' ? verticalScale(10) : 0,
  },
  searchInput: {
    flex: 1,
    marginLeft: scale(8),
    fontSize: scale(14),
    color: '#fff',
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
  swiper: {},
  image: {
    width: 382,
    height: 156,
    resizeMode: 'cover',
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,0.56)',
    width: scale(6),
    height: scale(6),
    borderRadius: scale(15),
  },
  activeDot: {
    backgroundColor: '#000000',
    width: scale(6),
    height: scale(6),
    borderRadius: scale(15),
  },
  arrow: {
    width: scale(100),
    height: verticalScale(100),
    marginBottom: verticalScale(50),
  },
  swiperWrapper: {
    height: verticalScale(170),
    // marginBottom: verticalScale(50),
  },
});
