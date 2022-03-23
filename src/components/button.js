import React from 'react';
import {Text, Dimensions, TouchableOpacity, View} from 'react-native';
import { socialMedia } from '../utils/Function';
import { Roboto } from '../utils/Fonts';

const {width} = Dimensions.get("screen");



const Button  = (props) => {
    return (
        <TouchableOpacity 
            style={{
                backgroundColor: props.backgroundColor ,
                padding: 16,
                borderWidth: props.borderWidth ? props.borderWidth : 1,
                width: props.width ? props.width: width/1.1 ,
                alignItems: "center",
                borderRadius: 7,
                borderColor: props.borderColor,
                marginTop: props.marginTop,
                shadowColor: props.socialMedia ? `0px 2px 3px rgba(0,0,0,0.25);`: null,
                shadowOffset:props.socialMedia ?  { width: 0, height: 2,}:null,
                shadowOpacity: props.socialMedia ?  0.25: null,
                shadowRadius:props.socialMedia ?  0.25: null,
                elevation: props.socialMedia ?  0.25 : null,
            }}
        disabled={props.disabled}
        onPress={props.onPress}
        >
            <View style={{flexDirection:'row', width:'100%',justifyContent: props.socialMedia ?'flex-start': 'center'}}>
                {props.socialMedia && socialMedia(props.socialMedia)}
                <Text style={{fontSize:18, color: props.textColor, fontFamily:Roboto.Regular, marginLeft: props.socialMedia ? 25: 0 }}>
                    {props.text}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default Button ;