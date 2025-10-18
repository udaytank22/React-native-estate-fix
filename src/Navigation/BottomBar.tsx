import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
  CartTap,
  HomeTap,
  ProfileTap,
  Timeline,
} from '../Assets/Constant/Images';
import Cart from '../Screens/Cart/Cart';
import Booking from '../Screens/Booking/Booking';
import Profile from '../Screens/Profile/Profile';
import HomeScreen from '../Screens/Home/Home';

// SVG imports (as components)
const Tab = createBottomTabNavigator();

type TabName = 'Home' | 'Cart' | 'Booking' | 'Profile';

const tabs: {
  name: TabName;
  component: React.ComponentType<any>;
  Icon: React.ComponentType<any>;
}[] = [
  { name: 'Home', component: HomeScreen, Icon: HomeTap },
  { name: 'Cart', component: Cart, Icon: CartTap },
  { name: 'Booking', component: Booking, Icon: Timeline },
  { name: 'Profile', component: Profile, Icon: ProfileTap },
];

const CustomTabBar = ({ state, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const { Icon, name } = tabs[index];

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            activeOpacity={0.8}
            style={[styles.tabButton]}
          >
            <View style={[styles.innerTab]}>
              {isFocused && <View style={styles.activeIndicator} />}
              <Icon
                width={28}
                height={28}
                fill={isFocused ? '#034175' : 'transparent'} // 👈 Change color here
              />
              <Text
                style={[
                  styles.label,
                  { color: isFocused ? '#034175' : '#000' },
                ]}
              >
                {name}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BottomBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      {tabs.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{ lazy: true }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 10,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
  },
  innerTab: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    position: 'relative',
  },
  activeIndicator: {
    position: 'absolute',
    top: 0,
    width: '60%',
    height: 4,
    backgroundColor: '#003366',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
  },
});
