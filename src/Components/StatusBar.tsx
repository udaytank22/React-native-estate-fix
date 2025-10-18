import { Platform, StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function CustomStatusBar() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        height:
          Platform.OS === 'android' ? StatusBar.currentHeight : insets.top,
        backgroundColor: '#034175',
      }}
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
    </View>
  );
}
export default CustomStatusBar;
