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

function LoginScreen({ navigation }) {
    const dispatch = useDispatch();
    const Login = useSelector((state)=>state.login)
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [account, setAccount] = useState(false);
    const [checked, setChecked] = useState(false);
    const [isSocialMedia, setIsSocialMedia] = useState(false);


    useEffect(() => {
        if (Login && Login?.loginData) {
            console.log("Login=>", Login)
            //dispatch(Actions.LoginAction('PURGE', {})) 
        }
    }, [Login]);

    const goTo =  () => {
        dispatch(Actions.LoginAction({}, {}))
        navigation.navigate('Home')

    }

    const createAccount = () =>{
        setAccount(!account)
    }

    const forgotPassword = () => {
        console.log("Clock")
    }

    return (
        <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex:1}}
        >
        <ImageBackground 
            source={require('../../utils/images/login/background.png')}
            style={[styles.container]}
        >
        <Image
            style={[styles.image]} 
            source={require('../../utils/images/login/github.png')}
            resizeMode='contain'
        />

            <View style={[styles.viewText1, {justifyContent: isSocialMedia ? 'center': 'flex-end'}]}>
            <TouchableOpacity
                onPress={()=>{setIsSocialMedia(!isSocialMedia)}}
            >
                {isSocialMedia&&
                <Image
                    style={[styles.viewBackArrow]}
                    source={require('../../utils/images/login/backArrow.png')}
                />
                }
            </TouchableOpacity>
            <Text style={[styles.text1]}>
                {`${isSocialMedia? 'Iniciar sesión desde tu correo electrónico':'Iniciar sesión desde redes sociales'}`}
            </Text>
            <TouchableOpacity
                onPress={()=>{setIsSocialMedia(!isSocialMedia)}}
            >
                {!isSocialMedia&&
                <Image
                    style={[styles.viewCoolicon]}
                    source={require('../../utils/images/login/coolicon.png')}
                />
                }
            </TouchableOpacity>
            </View>
        
            {!isSocialMedia ? 
            <>
            <View style={[styles.viewSocialMedia]}>

                <Components.Input
                placeholder="E-mail"
                onChangeText={user => setUser(user)}
                value={user}
                
                />
                <Components.Input
                placeholder="Constraseña"
                onChangeText={password => setPassword(password)}
                secureTextEntry={true}
                value={password}
                eye={<Ionicons name={'eye'} size={22} color={color.text} />}
                eyeOff={<Ionicons name={'eye-off'} size={22} color={color.text} />}
                />
                {account && 
                <Components.Input
                    placeholder=" Confirmar Constraseña"
                    onChangeText={passwordConfirmation => setPasswordConfirmation(passwordConfirmation)}
                    secureTextEntry={true}
                    value={passwordConfirmation}
                    eye={<Ionicons name={'eye'} size={22} color={color.text} />}
                    eyeOff={<Ionicons name={'eye-off'} size={22} color={color.text} />}
                />
                }
                <View style={styles.viewRememberme}>
                {!account &&
                    <View style={[styles.checkboxContainer]} >
                    <TouchableOpacity
                        style={[checked ? styles.checkboxChecked : styles.checkboxBase]}
                        onPress={() => { setChecked(!checked) }}>
                        {checked ? <Ionicons name="checkmark" size={22} color="white" /> : null}
                    </TouchableOpacity>
                    <Text style={[styles.text,]}>
                        {`Recuérdame`}
                    </Text>
                    </View>
                }
                <Components.Button
                    text={account ?"Registarse": "Inicia sesión"}
                    backgroundColor={user.length>2 && password.length>2 ?color.buttonColor2: color.buttonColor1}
                    textColor={color.white}
                    disabled={user.length>2 && password.length>2 ?false: true}
                    marginTop={15}
                    width={!account ? '52%':null}
                    onPress={()=>goTo()}
                    borderColor={'transparent'}
                />
                </View>
                {account &&
                <Text style={[styles.termsText]}>
                {`Al crear tu cuenta, estás aceptando nuestras Políticas de Privacidad, así como losTérminos y Condiciones.`}
                </Text>
                }
            </View>
            <View style={[styles.viewFooter]}>
                {!account ? 
                <>
                    <View style={[styles.viewText2]}>
                    <TouchableOpacity
                        onPress={()=>{forgotPassword()}}
                        >
                        <Text style={[styles.textUnderline]}>
                        {`¿Olvidaste tu contraseña?`}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=>{createAccount()}}
                    >
                        <Text
                        style={[styles.textUnderline]}
                        >
                        {`Registrate aquí`}
                        </Text>
                    </TouchableOpacity>
                    </View>
                </>
                :
                <>
                    <View style={[styles.viewText2]}>
                    <Text style={[styles.text]}>
                        {`¿Ya eres miembro?`}
                    </Text>
                    <TouchableOpacity
                        onPress={()=>{createAccount()}}
                    >
                        <Text
                        style={[styles.textUnderline]}
                        >
                        {`Inicia sesión`}
                        </Text>
                    </TouchableOpacity>
                    </View>
                </>
                
                }
            </View>  
            </>
            :
            <>
                <Components.Button
                  text={ "Inicia sesión con Google"}
                  backgroundColor={color.white}
                  textColor={color.black}
                  marginTop={15}
                  onPress={()=>{}}
                  socialMedia={'google'}
                  borderColor={'transparent'}
                
                />
                <Components.Button
                  text={ "Inicia sesión con Google"}
                  backgroundColor={"#1877F2"}
                  textColor={color.white}
                  marginTop={15}
                  onPress={()=>{}}
                  socialMedia={'facebook'}
                  borderColor={'transparent'}
                
                />
                <Components.Button
                  text={ "Inicia sesión con Google"}
                  backgroundColor={"#62A9EB"}
                  textColor={color.white}
                  marginTop={15}
                  onPress={()=>{}}
                  socialMedia={'twitter'}
                  borderColor={'transparent'}
                
                />
                <Components.Button
                  text={ "Inicia sesión con Google"}
                  backgroundColor={"#0077B5"}
                  textColor={color.white}
                  marginTop={15}
                  onPress={()=>{}}
                  socialMedia={'linkedIn'}
                  borderColor={'transparent'}
                
                />
            </>
            }
            <Text style={[styles.textFotter]}>
            {`2022`}
            </Text>
        </ImageBackground>
        </KeyboardAvoidingView>
    )
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
  },
  image:{
    height:'43%', 
    width:'43%',
  },
  viewSocialMedia:{
    flex:.79, 
    width:'100%', 
    alignItems:'center'
  },
  viewBackArrow:{
    marginRight:25, 
    right: 15,
  },
  viewCoolicon:{
    marginRight:25,
  },
  viewRememberme:{
    flexDirection:'row'
  },
  viewFooter:{
    flex:.2, 
    top: 15
  },
  viewText2:{
    alignItems:'center',
    justifyContent:'center',
    width:'100%',
  },
  viewText1:{
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
  },
  text1: {
    //fontFamily:Roboto.Regular,
    color: 'black',
    fontSize:responsiveFontSize(1.8),
    marginRight:15,
    textAlign:'center'
  },
  text: {
    //fontFamily:Roboto.Regular,
    color: "#72565E",
    fontSize:responsiveFontSize(1.8),
    marginRight:5,
  },
  textFotter: {
    marginTop:5,
    //fontFamily:Roboto.Bold,
    color: color.text,
    fontSize:responsiveFontSize(1.8),
    textAlign:'center',
    position:'absolute', 
    bottom:5,
  },
  termsText: {
    marginTop:15,
    //fontFamily:Roboto.Regular,
    color: "#72565E",
    fontSize:responsiveFontSize(1.4),
    marginRight:5,
    textAlign:'center',
    width:responsiveScreenWidth(70)
  },
  textUnderline: {
    //fontFamily:Roboto.Regular,
    color: '#72565E',
    textDecorationLine: 'underline',
    fontSize:responsiveFontSize(1.8),
  },
  checkboxBase: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: color.grayBorder,
    backgroundColor: 'transparent',
    marginRight: 20
  },
  checkboxChecked: {
    width: 24,
    height: 24,
    backgroundColor: color.buttonColor1,
    marginRight: 20
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10 
  },

});

export default LoginScreen;

