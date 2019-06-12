import React, { Component } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import { Dialog } from 'react-native-simple-dialogs';
import Area from './Area'
import Button from './Button'

export default class MainScreen extends Component {
    render() {
        return (
          <View>

            <Area text = 'בית - ספר' 
                  height = {70} 
                  color = '#D3D3D3'
            />

            <Text style = {{fontSize: 20, textAlign: 'center', fontWeight: 'bold'}} height = {40}>שם התלמיד</Text>  

            <ImageBackground
              resizeMode = 'stretch'
              style = {{height: 350, width: null, flexDirection: 'column', justifyContent: 'flex-end'}}
              source = {require('./images/turquoiseboard.jpg')}>
              <Text style = {{fontSize: 30, color: '#FFFFFF', marginRight: 135, marginBottom: 220}}>לוח מודעות</Text>
            </ImageBackground>
            
            <View style = {{marginTop: 6}}>
              <View style = {styles.buttonsArea}>
                <Button height = {100} width = {100} onPress = {this.onClick}/>
                <Button height = {100} width = {100} onPress = {this.onClick}/>
                <Button height = {100} width = {100} onPress = {this.onClick}/>
              </View>
              <View style = {styles.buttonsArea}>
                <Button height = {100} width = {100} onPress = {this.onClick}/>
                <Button height = {100} width = {100} onPress = {this.onClick}/>
                <Button height = {100} width = {100} onPress = {this.onClick}/>
              </View>
            </View>

          </View>    
        )
    }

    onClick () {
      alert('                              אסיפת הורים !');
    }
}

//            <View height = {20}/>


/*
<Area text = 'לוח מודעות'
                  height = {250}
                  color = '#FFF8DC'
            />
*/

/*
            <Area text = 'School App' 
                  height = {80} 
                  color = '#FFF8DC'
            >

*/


const styles = {
  buttonsArea: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    backgroundColor: '#D3D3D3',
    //marginRight: 5,
    //marginLeft: 5
  }
}


