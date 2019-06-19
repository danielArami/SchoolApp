import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';

import {I18nManager} from 'react-native'
I18nManager.allowRTL(false)

import Header from '../components/Header'
import Button from '../components/Button'

export default class MainScreen extends Component {  
    render() {
      return (
        <View>
          
          <View style = {{height: '15%'}}>
            <Header
              height = '100%'
              width = '100%'
              backgroundColor = '#D3D3D3'
              leftText = 'יציאה '
              leftImagePath = {require('../images/logout2.png')}
              onPressLeftButton = {() => this.props.navigation.goBack()} //TODO --> EXIT
              middleText = 'ראשי'
              middleImagePath = {require('../images/home.png')}
              onPressMiddleButton = {() => this.props.navigation.navigate('Main')}
              rightText = ' דניאל'
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
                onPress = {() => this.props.navigation.navigate('ParentsMeeting')}
                imageUri = '../images/parents-meeting.jpg'                 
                height = "100%"
                width = '100%'
                text = 'אסיפת הורים'
                fontSize = {12}
              />
              <Button
                onPress = {this.onClick}
                imageUri = '../images/parents-meeting.jpg'                 
                height = "100%"
                width = '100%'
                text = 'אסיפת הורים'
                fontSize = {12}
              />
              <Button
                onPress = {this.onClick}
                imageUri = '../images/parents-meeting.jpg'                 
                height = "100%"
                width = '100%'
                text = 'אסיפת הורים'
                fontSize = {12}
              />
            </View>
            <View style = {styles.buttonsLine}>
              <Button
                onPress = {this.onClick}
                imageUri = '../images/parents-meeting.jpg'                 
                height = "100%"
                width = '100%'
                text = 'אסיפת הורים'
                fontSize = {12}
              />
              <Button
                onPress = {this.onClick}
                imageUri = '../images/parents-meeting.jpg'                 
                height = "100%"
                width = '100%'
                text = 'אסיפת הורים'
                fontSize = {12}
              />
              <Button
                onPress = {this.onClick}
                imageUri = '../images/parents-meeting.jpg'                 
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


