import React, { useState, useEffect } from 'react';
import * as Actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, KeyboardAvoidingView, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native';
import * as Components from '../../components';
import {
    responsiveScreenWidth,
    responsiveFontSize,
  } from "react-native-responsive-dimensions";
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import color from '../../utils/Color';
import {Roboto} from '../../utils/Fonts';

Icon.loadFont()
Ionicons.loadFont()

function HomeScreen({ navigation }) {


    return (
       <View style={[styles.container]} >
           <Text>
               {`Soy el home`}
           </Text>
       </View>
    )
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center',
  },

});

export default HomeScreen;

