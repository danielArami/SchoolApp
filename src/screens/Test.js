import React, {Component} from 'react'
import { View, Text, Button, TextInput, ScrollView, Image } from 'react-native'

import {I18nManager} from 'react-native'
I18nManager.allowRTL(false)

import Header from '../components/Header'
import ImageButton from '../components/ImageButton'
import DataField from '../components/DataField';
import ClassPresent from '../components/ClassPresent'


export default class Test extends Component {

    render() {
        return (
            <View style = {{height: '50%', width: '100%'}}>
            <ScrollView style = {{height: 1000}}>
            
            <View style = {{height: 100, width: '80%', flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style = {{justifyContent: 'center'}}>
                <Text style = {{fontSize: 20, fontWeight: 'bold'}}>{'school'}</Text>
            </View>
            <View style = {{justifyContent: 'center'}}>
                <Text style = {{fontSize: 20, fontWeight: 'bold'}}>{'class'}</Text>
            </View>
            <Image style = {{height: '100%', width: '30%', justifyContent: 'center'}}
                    source = {require('../images/classDoor2.jpg')}
                    resizeMode = 'stretch'>
            </Image>
        </View>

        
        






            </ScrollView>
            </View>
        );
    }
}

const styles = {
    classView: {
        height: '30%',
        alignItems: 'center'
    }
}

