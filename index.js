/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import MainScreen from './src/components/MainScreen';

AppRegistry.registerComponent(appName, () => MainScreen);
