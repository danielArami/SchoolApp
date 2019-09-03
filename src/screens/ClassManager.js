import React, {Component} from 'react'
import { View, Text, Button } from 'react-native'
import axios from 'axios';

import {I18nManager} from 'react-native'
I18nManager.allowRTL(false)

import Header from '../components/Header'
import ImageButton from '../components/ImageButton'

export default class ClassManager extends Component  {

    state = { classKey: '', classData: [] }

    componentWillMount() {
        this.setState({
          classKey: this.props.navigation.state.params.classData[0],  
          classData: this.props.navigation.state.params.classData[1]
        })
    }
  
    render() {
        return (
            <View style = {{flex: 1}}>
                <View style = {{height: '15%'}}>
                    <Header
                        height = '100%'
                        width = '100%'
                        backgroundColor = '#D3D3D3'
                        leftImagePath = {require('../images/back.png')}
                        onPressLeftButton = {() => this.props.navigation.navigate('MyClasses')}
                        middleImagePath = {require('../images/home.png')}
                        onPressMiddleButton = {() => this.props.navigation.navigate('TeacherScreen')}
                        rightImagePath = {require('../images/professor.png')}
                        secondaryText = {`${this.state.classData.schoolName}, ${this.state.classData.className}`}
                        mainText = 'ניהול כיתה'
                    />
                </View>

                <View style = {{height: '10%', width: '20%', alignItems: 'center'}}>
                    <ImageButton
                        height = '100%'
                        width = '100%' 
                        onPress = {() => this.props.navigation.navigate(
                            'StudentCard',
                            { classData: this.props.navigation.state.params.classData,
                              email: this.props.navigation.state.params.email,
                              password: this.props.navigation.state.params.password,
                            }
                        )}
                        imagePath = {require('../images/addStudent.png')}
                        resizeMode = 'stretch'
                        text = 'צרף לכיתה'
                        fontSize = {14}>
                    </ImageButton>
                </View>

                <View style = {{height: '10%'}}/>

                <View style = {{height: '10%'}}>
                    <Text style = {{fontSize: 20}}>{'ניהול כיתה'}</Text>
                </View>
                
            </View>
        );
    }

    onClick () {
        alert('                              הוספת תלמיד !');
      }
  

}
