import React, { Component } from 'react';
import { Text, View, ImageBackground, TextInput } from 'react-native';

import {I18nManager} from 'react-native'
I18nManager.allowRTL(false)

import Header from '../components/Header'

export default class Login extends Component {
    render() {
        return (
          <View style = {{height: '100%', width: '100%'}}>

            <View style = {{height: '15%'}}>
              <Header
                height = '100%'
                width = '100%'
                backgroundColor = 'lightcoral'
                //leftImagePath = {require('../images/back.png')}
                //onPressLeftButton = {() => this.props.navigation.goBack()}
                //middleImagePath = {require('../images/home.png')}
                //onPressMiddleButton = {() => this.props.navigation.navigate('Main')}
                //rightImagePath = {require('../images/user.png')}
                secondaryText = 'התחבר למערכת'
                //mainText = 'התחברות למערכת'
              />
            </View>

            <View style = {{height: '1%'}}/>
            
            <View style = {{height: '50%'}}>
                <ImageBackground
                    style = {{height: '100%', width: '100%'}}
                    source = {require('../images/Login.jpg')}
                    resizeMode = 'stretch'>
                </ImageBackground>
            </View>

            <View style = {{height: '1%'}}/>

            <TextInput style = {{}}></TextInput>

        </View>
        )
    }
}

                    //blurRadius = {1}>

