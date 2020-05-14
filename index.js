/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {CLIENT_ID} from 'react-native-dotenv';
import {GoogleSignin} from '@react-native-community/google-signin';

import App from './App';
import {name as appName} from './app.json';

GoogleSignin.configure({
  webClientId: CLIENT_ID,
});

AppRegistry.registerComponent(appName, () => App);
