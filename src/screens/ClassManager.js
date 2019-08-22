import React, {Component} from 'react'
import { View, Text, Button } from 'react-native'
import axios from 'axios';

import {I18nManager} from 'react-native'
I18nManager.allowRTL(false)

import Header from '../components/Header'
import ImageButton from '../components/ImageButton'

export default class ClassManager extends Component  {

    render() {
        return (
            <View style = {{flex: 1}}>
                <View style = {{height: '15%'}}>
                    <Header
                        height = '100%'
                        width = '100%'
                        backgroundColor = '#D3D3D3'
                        leftImagePath = {require('../images/back.png')}
                        onPressLeftButton = {() => this.props.navigation.navigate('TeacherScreen')}
                        middleImagePath = {require('../images/home.png')}
                        onPressMiddleButton = {() => this.props.navigation.navigate('TeacherScreen')}
                        rightImagePath = {require('../images/professor.png')}
                        secondaryText = ''
                        mainText = 'ניהול כיתה'
                    />
                </View>

                <View style = {{height: '10%', width: '20%', alignItems: 'center'}}>
                    <ImageButton
                        height = '100%'
                        width = '100%' 
                        onPress = {() => this.props.navigation.navigate('StudentCard')}
                        imagePath = {require('../images/addStudent.png')}
                        resizeMode = 'stretch'
                        text = 'צרף לכיתה'
                        fontSize = {14}>
                    </ImageButton>
                </View>
                
            </View>
        );
    }

    onClick () {
        alert('                              הוספת תלמיד !');
      }
  

}
