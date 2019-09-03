import React, {Component} from 'react'
import { View, Text, Button, TextInput, ScrollView, Image } from 'react-native'

import {I18nManager} from 'react-native'
I18nManager.allowRTL(false)

import Header from '../components/Header'
import ImageButton from '../components/ImageButton'
import DataField from '../components/DataField';
import ClassPresent from '../components/ClassPresent'


export default class AddStudentsFromFile extends Component {

    render() {
        return (
            <View style = {{flex: 1}}>
                <View style = {{height: '15%'}}>
                    <Header
                        height = '100%'
                        width = '100%'
                        backgroundColor = '#D3D3D3'
                        leftImagePath = {require('../images/back.png')}
                        onPressLeftButton = {() => this.props.navigation.navigate('ClassManager')}
                        middleImagePath = {require('../images/home.png')}
                        onPressMiddleButton = {() => this.props.navigation.navigate('TeacherScreen')}
                        rightImagePath = {require('../images/professor.png')}
                        mainText = 'צרף מקובץ'
                    />
                </View>
            </View>
        );
    }
}



