import React, { Component } from 'react';
import { Text, View, ImageBackground, BackHandler } from 'react-native';
import firebase from 'firebase';

import {I18nManager} from 'react-native'
I18nManager.allowRTL(false)

import Header from '../components/Header'
import Button from '../components/Button'

export default class TeacherScreen extends Component {  
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
              rightImagePath = {require('../images/professor.png')}
              secondaryText = 'בית - ספר'
              mainText = 'עין - גנים'
            />
          </View>

          <View style = {{height: '8%', color: '#FFFFFF', justifyContent: 'center'}}>
            <Text style = {{fontSize: 22, textAlign: 'center'}}>מר דניאל ערמי</Text>
            <Text style = {{fontSize: 15, textAlign: 'center'}}>כיתה: ג'2</Text>
          </View>
        
          <View style = {{height: '50%', width: null}}>
            <ImageBackground
              style = {{height: '100%', width: '100%'}}
              source = {require('../images/teacher-words.png')}
              resizeMode = 'stretch'>
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
                onPress = {() => this.props.navigation.navigate('MyClasses')}
                imagePath = {require('../images/sInfo.png')}
                resizeMode = 'stretch'                                  
                height = "100%"
                width = '100%'
                text = 'הכיתות       שלי'
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
                onPress = {this.onClick}
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

    componentDidMount() {
      this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
      BackHandler.exitApp();
      return true;
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