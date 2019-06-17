import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import Header from './Header'
import Button from './Button'

export default class MainScreen extends Component {  
    render() {
      return (
        <View>
          
          <View style = {{height: '15%'}}>
            <Header
              height = '100%' 
              text = 'בית - ספר'              
            />
          </View>

          <View style = {{height: '8%', color: '#FFFFFF', justifyContent: 'center'}}>
            <Text style = {{fontSize: 20, textAlign: 'center'}}>דניאל ערמי</Text>
          </View>
        
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


