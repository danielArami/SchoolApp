import React, {Component} from 'react';
import {/*StyleSheet,*/ Text, View} from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation'  

import MainScreen from './src/components/MainScreen';
import testScreen from './src/components/testScreen';

export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator({
    Main: MainScreen,
    Test: testScreen  
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
