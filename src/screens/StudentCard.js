import React, {Component} from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import axios from 'axios';

import {I18nManager} from 'react-native'
I18nManager.allowRTL(false)

import Header from '../components/Header'
import ImageButton from '../components/ImageButton'
import DataField from '../components/DataField';

export default class StudentCard extends Component {

    state = {
        id: '', 
        firstName: '',
        lastName: '',
        className: '',
        schoolName: '',
        parentA: '',
        phoneA: '',
        parentB: '',
        phone: ''  
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
                        onPressLeftButton = {() => this.props.navigation.navigate('ClassManager')}
                        middleImagePath = {require('../images/home.png')}
                        onPressMiddleButton = {() => this.props.navigation.navigate('TeacherScreen')}
                        rightImagePath = {require('../images/professor.png')}
                        secondaryText = ''
                        mainText = 'כרטיס תלמיד'
                    />
                </View>

                
                <View style = {{height: '12%', width: '95%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center'}}>
                    <TextInput style = {styles.textInput}
                        onChangeText = {text => this.setState({ id: text, error: '' })}
                        autoCorrect = {false}
                        value = {this.state.id}
                    />
                    <View style = {{justifyContent: 'center'}}>
                        <Text>תעודת זהות:</Text>
                    </View>                
                </View>

                <View style = {{height: '12%', width: '95%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center'}}>
                    <TextInput style = {styles.textInput}
                        onChangeText = {text => this.setState({ id: text, error: '' })}
                        autoCorrect = {false}
                        value = {this.state.id}
                    />
                    <View style = {{justifyContent: 'center'}}>
                        <Text>שם פרטי:</Text>
                    </View>                
                </View>

                <View style = {{height: '12%', width: '95%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center'}}>
                    <TextInput style = {styles.textInput}
                        onChangeText = {text => this.setState({ id: text, error: '' })}
                        autoCorrect = {false}
                        value = {this.state.id}
                    />
                    <View style = {{justifyContent: 'center'}}>
                        <Text>שם משפחה:</Text>
                    </View>                
                </View>

                <View style = {{height: '12%', width: '95%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center'}}>
                    <TextInput style = {styles.textInput}
                        onChangeText = {text => this.setState({ id: text, error: '' })}
                        autoCorrect = {false}
                        value = {this.state.id}
                    />
                    <View style = {{justifyContent: 'center'}}>
                        <Text>כיתה:</Text>
                    </View>                
                </View>

                <View style = {{height: '12%', width: '95%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center'}}>
                    <TextInput style = {styles.textInput}
                        onChangeText = {text => this.setState({ id: text, error: '' })}
                        autoCorrect = {false}
                        value = {this.state.id}
                    />
                    <View style = {{justifyContent: 'center'}}>
                        <Text>בית ספר:</Text>
                    </View>                
                </View>




                
            </View>
        );
    }
}

const styles = {
    textInput: {
        fontSize: 12,
        height: '85%',
        width: '70%',
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: 'black',
        backgroundColor: 'aliceblue',
        borderRadius: 2
    }
}  
