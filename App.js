import React, {Component} from 'react';
import {/*StyleSheet,*/ Text, View} from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';  

import firebase from 'firebase';

import MainScreen from './src/screens/MainScreen';
import ParentsMeeting from './src/screens/ParentsMeeting';
import Login from './src/screens/Login';

export default class App extends Component {
  componentWillMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyAcvmeeWiSEGLk51tAk0lws1j_vwTKJLWs",
      authDomain: "schoolapp-828b5.firebaseapp.com",
      databaseURL: "https://schoolapp-828b5.firebaseio.com",
      projectId: "schoolapp-828b5",
      storageBucket: "",
      messagingSenderId: "478079800299",
      appId: "1:478079800299:web:df61f93a7a5a0360"
    };

    if (!firebase.apps.length) {
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    }
  }

  render() {
    return (
      <AppContainer/>
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator({
    Login: Login,
    Main: MainScreen,
    ParentsMeeting: ParentsMeeting  
})

const AppContainer = createAppContainer(AppDrawerNavigator);

/*
const AppStackNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Test: testScreen  
  },
  { defaultNavigationOptions : {
      headerStyle: {
        backgroundColor: '#D3D3D3'
        
      }
    }
  }
)
*/

//const AppDrawerNavigator = createDrawerNavigator({AppStackNavigator})

/*
const AppContainer = createAppContainer(createStackNavigator({
  Main: MainScreen,
  Test: testScreen
},

{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#D3D3D3'
    } 
  }
}
));
*/

/*
const AppStackNavigator = createStackNavigator({
  Main: MainScreen
});
*/
