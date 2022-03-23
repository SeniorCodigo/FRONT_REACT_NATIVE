import React from 'react';
import { Alert,  Share,  Image } from 'react-native';



export const socialMedia = (socialMedia) => {
  switch(socialMedia){
      case 'google':
          return ( 
              <Image
                  style={{}} 
                  source={require('../utils/images/socialMedia/google.png')}
                  resizeMode='contain'
              />
          );
      case 'facebook':
          return ( 
              <Image
                  style={{}} 
                  source={require('../utils/images/socialMedia/facebook.png')}
                  resizeMode='contain'
              />
          );
      case 'twitter':
          return ( 
              <Image
                  style={{}} 
                  source={require('../utils/images/socialMedia/twitter.png')}
                  resizeMode='contain'
              />
          );
      case 'linkedIn':
          return ( 
              <Image
                  style={{}} 
                  source={require('../utils/images/socialMedia/linkedIn.png')}
                  resizeMode='contain'
              />
          );
      default:
          return null;
  }
   
}



export const createFormData = (photo, userId) => {
  const data = new FormData();
  data.append("image", {
    name: userId + '.jpg',
    type: 'image/jpeg',
    uri: photo.uri
  });
  return data;
};


export const parseJwt = (token) => {
  let base64Url = token.split('.')[1];
  let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
};

export const elevationShadowStyle = (elevation, color) => {
  return {
    elevation,
    shadowColor: color,
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.1,
    shadowRadius: 0.9 * elevation,
    outlineProvider: 'bounds'
  };
}

export const validateEmail = (email): boolean => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export const validatePasswords = (data): boolean => {
  let passw = new RegExp("^(?=(.*[A-Z]){1,})(?=(.*[a-z]){1,})(?=(.*[ !@#$%^&*(),.?:{}|<>]){1,})(?=(.*[0-9]){1,}).{8,}$");
  return passw.test(data);
};

export const validateInputsNums = (data): boolean => {
  let regExp = /^[0-9]+$/
  return regExp.test(data);
};

export const validateInputsPrices = (data): boolean => {
  let regExp = /^[0-9]*\.?[0-9]*$/;
  return regExp.test(data);
};

export const validatePhoneNumber = (data): boolean => {
  let regExp = /^[0-9]+$/
  return regExp.test(data);
};

export const simpleAlert = (message) => {
  return (
    Alert.alert(
      'App',
      message,
      [
        {
          text: "Aceptar", onPress: () => { }
        },
      ],
      { cancelable: false }
    )
  )
};

export const messageAlert = (message) => {
  return (
    Alert.alert(
      'App',
      message,
      [
        {
          text: "OK", onPress: () => { }
        },
      ],
      { cancelable: false }
    )
  )
};

export const alertCallbackAction = (action, message) => {
  return (
    Alert.alert(
      'App',
      message,
      [

        {
          text: 'NO',
          onPress: () => { },
          style: 'destructive'
        },
        {
          text: 'SI',
          onPress: action
        },
      ],
      { cancelable: false }
    )
  )
};
export const alertCallbackActionCancellation = (action, message) => {
  return (
    Alert.alert(
      'App',
      message,
      [
        {
          text: 'Aceptar',
          onPress: action
        },
      ],
      { cancelable: false }
    )
  )
};

export const alertCallbackActionTwo = (action, message) => {
  return (
    Alert.alert(
      'La App',
      message,
      [
        {
          text: 'Aceptar',
          onPress: action
        },
      ],
      { cancelable: false }
    )
  )
};

export const monthDayYearDateSlideFormat = (dateStr) => {
  let date = new Date(dateStr)
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (String(month).length == 1) {
    month = '0' + month
  }

  if (String(day).length == 1) {
    day = '0' + day
  }

  const newFormattedDate = day + '/' + month + '/' + date.getFullYear();
  return newFormattedDate;
}

export const changeFormatDate = (dateStr) => {
  let arrDate = dateStr.split(' ')
  let newArrDate = arrDate[0].split('-')
  return newArrDate[2] + '/' + newArrDate[1] + '/' + newArrDate[0]
}

export const revertDate = (dateStr) => {
  let arrDate = dateStr.split('-')
  return arrDate[0] + '/' + arrDate[1] + '/' + arrDate[2]
}


export const haveLike = (likes, email) => {
  if (likes && likes.length > 0) {
    return (likes.indexOf(email) > -1);
  } else {
    return false
  }
}

export const onShare = async (message) => {
  try {
    const result = await Share.share({
      title: 'App',
      message: message
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
        return true
      } else {
        // shared
        return true
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
      return false
    }
  } catch (error) {
    return false
  }
};




export const injectedAndroid = `(function() {
  window.postMessage = function(data) {
    window.ReactNativeWebView.postMessage(JSON.stringify({'type': 'Console', 'data': {'type': type, 'log': log}}));
    console = {
      log: (log) => consoleLog('log', log),
      debug: (log) => consoleLog('debug', log),
      info: (log) => consoleLog('info', log),
      warn: (log) => consoleLog('warn', log),
      error: (log) => consoleLog('error', log),
    };
  };
})()`;


