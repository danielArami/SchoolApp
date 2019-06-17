import React, {Component} from 'react'
import { Text, View, ScrollView, Button} from 'react-native'

import Area from './Area'

export default class testScreen extends Component {
    render() {
        return (
            <Area text = 'אסיפת - הורים' 
            height = '15%' 
            color = '#D3D3D3'
            fontSize = {30}
            />
        )
    }
} 