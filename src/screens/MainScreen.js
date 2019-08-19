import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import firebase from 'firebase';

import {I18nManager} from 'react-native'
I18nManager.allowRTL(false)

import Header from '../components/Header'
import Button from '../components/Button'
import Login from './Login'

export default class MainScreen extends Component {  
    render() {
      return (
        <View style = {{height: '100%', width: '100%'}}>

          <View style = {{height: '15%'}}>
            <Header
              height = '100%'
              width = '100%'
              backgroundColor = '#D3D3D3'
              leftImagePath = {require('../images/logout.png')}
              onPressLeftButton = {this.onPressLoguot.bind(this)}
              middleImagePath = {require('../images/home.png')}
              onPressMiddleButton = {() => this.props.navigation.navigate('Main')}
              rightImagePath = {require('../images/user.png')}
              secondaryText = 'בית - ספר'
              mainText = 'עין - גנים'
            />
          </View>

          <View style = {{height: '8%', color: '#FFFFFF', justifyContent: 'center'}}>
            <Text style = {{fontSize: 22, textAlign: 'center'}}>דניאל ערמי</Text>
            <Text style = {{fontSize: 15, textAlign: 'center'}}>כיתה: ג'2</Text>
          </View>
        
          <View style = {{height: '50%', width: null}}>
            <ImageBackground
              style = {{height: '100%', width: '100%'}}
              source = {require('../images/turquoiseboard.jpg')}
              resizeMode = 'stretch'>
              <Text style = {{fontSize: 23, color: '#FFFFFF', textAlign: 'center', marginTop: '22%'}}>לוח מודעות</Text>
            </ImageBackground>
          </View>

          <View style = {styles.buttonsArea}>
            <View style = {styles.buttonsLine}>
              <Button
                onPress = {this.onClick}
                imagePath = {require('../images/sign.png')}
                resizeMode = 'contain'                 
                height = "100%"
                width = '100%'
                text = 'אישורי הורים'
                fontSize = {12}
              />
              <Button
                onPress = {this.onClick}
                imagePath = {require('../images/sInfo.png')}
                resizeMode = 'stretch'                                  
                height = "100%"
                width = '100%'
                text = 'מידע לתלמיד'
                fontSize = {12}
              />
              <Button
                onPress = {this.onClick}
                imagePath = {require('../images/schedules.jpg')} 
                resizeMode = 'stretch'                                 
                height = "100%"
                width = '100%'
                text = 'מערכת שעות'
                fontSize = {12}
              />
            </View>
            <View style = {styles.buttonsLine}>
              <Button
                onPress = {this.onClick}
                imagePath = {require('../images/contact.png')}  
                resizeMode = 'stretch'                                
                height = "100%"
                width = '100%'
                text = 'מערכת פניות'
                fontSize = {12}
              />
              <Button
                onPress = {this.onClick}
                imagePath = {require('../images/gInfo.png')}  
                resizeMode = 'contain'                                
                height = "100%"
                width = '100%'
                text = 'מידע       כללי'
                fontSize = {12}
              />
              <Button
                onPress = {() => this.props.navigation.navigate('ParentsMeeting')}
                imagePath = {require('../images/parents-meeting.jpg')}  
                resizeMode = 'stretch'                                
                height = "100%"
                width = '100%'
                text = 'אסיפת הורים'
                fontSize = {12}
              />
            </View>          
          </View>
        </View>    
        )
    }

    onPressLoguot() {
      console.log('loguot');
      firebase.auth().signOut();
      this.props.navigation.navigate('Login');
    }

    onClick () {
      //AppRegistry.registerComponent('testScreen', () => testScreen);
      alert('                              אסיפת הורים !');
    }
}

const styles = {
  buttonsArea: {
    height: '27%',
    backgroundColor: '#D3D3D3',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  buttonsLine: {
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}


