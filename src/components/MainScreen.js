import React, { Component } from 'react';
import { Text, View, Image, ImageBackground, Dimensions, AppRegistry } from 'react-native';
import { Dialog } from 'react-native-simple-dialogs';
import Area from './Area'
import Button from './Button'
import testScreen from './testScreen';

export default class MainScreen extends Component {
  
  static navigationOptions = {
    title: 'בית - ספר',
    headerStyle: { backgroundColor: '#D3D3D3', height: 100},
    headerTitleStyle: { color: 'black', fontSize: 30, textAlign: 'center' },
    headerBackTitle: 'חזור'
  }
  
    render() {
      return (
        <View>

          <Area text = 'בית - ספר' 
                 height = '15%' 
                 color = '#D3D3D3'
                 fontSize = {30}
          />

          <Area text = 'שם התלמיד' 
            height = '8%' 
            color = '#FFFFFF'
            fontSize = {20}
          />

          <View style = {{height: '50%', width: null}}>
            <ImageBackground
              style = {{height: '100%', width: '100%'}}
              source = {require('./images/turquoiseboard.jpg')}
              resizeMode = 'stretch'>
              <Text style = {{fontSize: 25, color: '#FFFFFF', textAlign: 'center', marginTop: '22%'}}>לוח מודעות</Text>
            </ImageBackground>
          </View>

          <View style = {styles.buttonsArea}>
            <View style = {styles.buttonsLine}>
              <Button
                onPress = {() => this.props.navigation.navigate('Test')}
                imageUri = './images/parents-meeting.jpg'                 
                height = "100%"
                width = '100%'
                text = 'אסיפת הורים'
                fontSize = {12}
              />
              <Button
                onPress = {this.onClick}
                imageUri = './images/parents-meeting.jpg'                 
                height = "100%"
                width = '100%'
                text = 'אסיפת הורים'
                fontSize = {12}
              />
              <Button
                onPress = {this.onClick}
                imageUri = './images/parents-meeting.jpg'                 
                height = "100%"
                width = '100%'
                text = 'אסיפת הורים'
                fontSize = {12}
              />
            </View>
            <View style = {styles.buttonsLine}>
              <Button
                onPress = {this.onClick}
                imageUri = './images/parents-meeting.jpg'                 
                height = "100%"
                width = '100%'
                text = 'אסיפת הורים'
                fontSize = {12}
              />
              <Button
                onPress = {this.onClick}
                imageUri = './images/parents-meeting.jpg'                 
                height = "100%"
                width = '100%'
                text = 'אסיפת הורים'
                fontSize = {12}
              />
              <Button
                onPress = {this.onClick}
                imageUri = './images/parents-meeting.jpg'                 
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


