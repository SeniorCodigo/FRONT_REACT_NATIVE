import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import {
  responsiveScreenWidth,
} from "react-native-responsive-dimensions";
import color from '../utils/Color';
const { width } = Dimensions.get("screen");


const Input = (props) => {
  const [focus, setFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View style={{ marginTop: 15, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        style={[styles.input, 
          { backgroundColor:color.white, 
            width: props.width ?  props.width :width / 1.1, 
            borderColor: focus ? color.green : color.grayBorder, 
            paddingVertical: props.paddingVertical ? props.paddingVertical : 12, 
          }
        ]}
        value={props.value}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry && !showPassword ? true : false}
          onBlur={() => {
            setFocus(false)
          }}
          onFocus={() => {
            setFocus(true)
          }}
      />
      {showPassword ?
          <View style={{ position: 'absolute', right: 10 }}>
            <TouchableOpacity
              style={{ alignItems: 'center', width: responsiveScreenWidth(20), }}
              onPress={() => { setShowPassword(!showPassword) }}
            >
              {props.eye}
            </TouchableOpacity>
          </View>
          :
          <View style={{ position: 'absolute', right: 10 }}>
            <TouchableOpacity
              style={{ alignItems: 'center', width: responsiveScreenWidth(20), }}
              onPress={() => { setShowPassword(!showPassword) }}
            >
              {props.eyeOff}
            </TouchableOpacity>
          </View>
        }
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#555',
    borderWidth: 1,
    padding: 10,
    width: width / 1.1,
    borderRadius: 5,
    paddingLeft:20,
  },

});
export default Input;