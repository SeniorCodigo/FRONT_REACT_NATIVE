import { LOGIN } from '../../endpoints/index';
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_PURGE
} from '../types'


export const LoginAction = (data) => {



  const config = {
    method: 'GET',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };

  console.log('REQ LOGIN DATA:', LOGIN, config);

  return (dispatch) => {

    if (data === 'PURGE') {
      dispatch({ type: LOGIN_PURGE, payload: 'PURGE' })
    } else {
      fetch(LOGIN /*, config*/)
        .then(json => json.json())
        .then((responseJson) => {
          if (responseJson) {
            const response = {
              isOK: true,
              Login: responseJson
            }
            console.log('RESPONSE LOGIN DATA: ', response);
            dispatch({ type: LOGIN_SUCCESS, payload: response })
          } else {
            const response = {
              isOK: false,
              error: responseJson
            }
            console.log('ERROR GET LOGIN DATA: ', response);
            dispatch({ type: LOGIN_ERROR, payload: response })
          }

        })
        .catch((error) => {
          const responseError = {
            isOK: false,
            error: error
          }
          console.log('ERROR GET LOGIN DATA: ', responseError);
          dispatch({ type: LOGIN_ERROR, payload: responseError })
        });
    }
  }
};