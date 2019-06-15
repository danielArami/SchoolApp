/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import MainScreen from './src/components/MainScreen';

import testScreen from './src/components/testScreen';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainScreen);
