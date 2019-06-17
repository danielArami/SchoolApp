import React, {Component} from 'react'
import { Text, View, ScrollView, Button} from 'react-native'

import Header from './Header'

export default class testScreen extends Component {
    render() {
        return (
            <View style = {{height: '15%'}}>
                <Header 
                    text = 'אסיפת - הורים'              
                />
            </View>
        )
    }
} 