import React, {Component} from 'react'
import { View } from 'react-native'

import {I18nManager} from 'react-native'
I18nManager.allowRTL(false)

import Header from '../components/Header'

export default class ParentsMeeting extends Component {
    render() {
        return (
            <View style = {{height: '15%'}}>
            <Header
              height = '100%'
              width = '100%'
              backgroundColor = '#D3D3D3'
              leftText = 'חזור '
              leftImagePath = {require('../images/back.png')}
              onPressLeftButton = {() => this.props.navigation.goBack()}
              middleText = 'ראשי'
              middleImagePath = {require('../images/home.png')}
              onPressMiddleButton = {() => this.props.navigation.navigate('Main')}
              rightText = ' דניאל'
              rightImagePath = {require('../images/user.png')}
              secondaryText = ''
              mainText = 'אסיפת - הורים'
            />
          </View>
        )
    }
} 