/**
 * @format
 */

import {AppRegistry} from 'react-native';

import {I18nManager} from 'react-native'
I18nManager.allowRTL(false)

import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
