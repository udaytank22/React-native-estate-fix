import React from 'react';
import {
  TextInput,
  TextInputProps,
  View,
  Text,
  StyleSheet,
  ViewStyle,
  ColorValue,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

interface CustomTextInputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerStyle?: ViewStyle;
  inputStyle?: object;
  wrapperStyle?: ViewStyle;
  labelStyle?: object;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode; // ✅ New right icon prop
  selectionColor?: ColorValue;
  withWrapper?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
}

const TextInputComponent: React.FC<CustomTextInputProps> = ({
  label,
  error,
  containerStyle,
  wrapperStyle,
  inputStyle,
  leftIcon,
  labelStyle,
  rightIcon, // ✅ Destructure rightIcon
  isRequired = false,
  withWrapper = false,
  isReadOnly = false,
  selectionColor,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <Text style={[styles.label, labelStyle]}>
          {label} {isRequired && <Text style={{ color: 'red' }}> *</Text>}
        </Text>
      )}

      {withWrapper ? (
        <View style={[styles.wrapper, wrapperStyle]}>
          {leftIcon && <View style={styles.iconContainer}>{leftIcon}</View>}
          <TextInput
            style={[styles.input, inputStyle]}
            placeholderTextColor="#999"
            selectionColor={selectionColor}
            editable={!isReadOnly}
            {...props}
          />
          {rightIcon && <View style={styles.iconContainer}>{rightIcon}</View>}
        </View>
      ) : (
        <TextInput
          style={[
            styles.simpleInput,
            inputStyle,
            isReadOnly && { backgroundColor: '#d8dce3' },
          ]}
          placeholderTextColor="#999"
          selectionColor={selectionColor}
          editable={!isReadOnly}
          {...props}
        />
      )}

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: verticalScale(10),
  },
  label: {
    fontFamily: 'Inter-Medium',
    marginBottom: moderateVerticalScale(8),
    fontWeight: '500',
    fontSize: scale(14),
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: moderateScale(12),
    paddingHorizontal: moderateScale(16),
    height: moderateVerticalScale(42),
    // marginTop: verticalScale(5),
    marginBottom: verticalScale(5),
    borderColor: '#ccc',
    backgroundColor: '#fff',
    // marginHorizontal: moderateScale(12),
  },
  iconContainer: {
    marginHorizontal: moderateScale(5),
  },
  input: {
    flex: 1,
    fontSize: moderateScale(16),
    backgroundColor: 'transparent',
    color: '#333',
  },
  simpleInput: {
    height: verticalScale(40),
    borderWidth: scale(1),
    borderRadius: scale(5),
    paddingHorizontal: scale(10),
    fontSize: moderateScale(16),
    color: '#333',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    fontWeight: '500',
  },
  errorText: {
    fontSize: moderateScale(12),
    color: 'red',
    marginTop: verticalScale(3),
    marginLeft: moderateScale(12),
  },
});

export default TextInputComponent;
