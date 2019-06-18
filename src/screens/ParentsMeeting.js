import React, {Component} from 'react'
import { Text, View, ScrollView, Button} from 'react-native'

import Header from '../components/Header'

export default class ParentsMeeting extends Component {
    render() {
        return (
            <View style = {{height: '15%'}}>
            <Header
              height = '100%'
              width = '100%'
              backgroundColor = '#D3D3D3'
              rightText = ' דניאל'
              rightImagePath = {require('../images/user.png')}
              leftText = 'חזור '
              leftImagePath = {require('../images/back.png')}
              onPressLeftButton = {() => this.props.navigation.goBack()}
              secondaryText = ''
              mainText = 'אסיפת - הורים'
            />
          </View>
        )
    }
} 