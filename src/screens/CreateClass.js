import React, {Component} from 'react'
import { View, Text, Button, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native'
import axios from 'axios';

import {I18nManager} from 'react-native'
I18nManager.allowRTL(false)

import firebase from 'firebase';
import Header from '../components/Header'
import ImageButton from '../components/ImageButton'
import DataField from '../components/DataField';
import ClassPresent from '../components/ClassPresent'
import Spinner from '../components/Spinner';


export default class CreateClass extends Component {

    state = { city: '', schoolName: '', className: '', loading: false };

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
                        secondaryText = ''
                        mainText = 'יצירת כיתה'
                    />
                </View>

                <View style = {{height: '30%', justifyContent: 'center'}}>
                    <Image style = {{height: '80%', width: '50%', alignSelf: 'center'}}
                        source = {require('../images/classDoor.png')}
                        resizeMode = 'stretch'
                    />
                </View>

                <View style = {{height: '12%', width: '95%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center'}}>
                    <TextInput style = {styles.textInput}
                        onChangeText = {text => this.setState({ schoolName: text, error: '' })}
                        autoCorrect = {false}
                        value = {this.state.schoolName}
                    />
                    <View style = {{justifyContent: 'center'}}>
                        <Text style = {{fontWeight: 'bold'}}>שם בית הספר:</Text>
                    </View>                
                </View>

                <View style = {{height: '12%', width: '95%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center'}}>
                    <TextInput style = {styles.textInput}
                        onChangeText = {text => this.setState({ className: text, error: '' })}
                        autoCorrect = {false}
                        value = {this.state.className}
                    />
                    <View style = {{justifyContent: 'center'}}>
                        <Text style = {{fontWeight: 'bold'}}>כיתה:</Text>
                    </View>                
                </View>

                <View style = {{height: '12%', width: '95%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center'}}>
                    <TextInput style = {styles.textInput}
                        onChangeText = {text => this.setState({ city: text, error: '' })}
                        autoCorrect = {false}
                        value = {this.state.city}
                    />
                    <View style = {{justifyContent: 'center'}}>
                        <Text style = {{fontWeight: 'bold'}}>עיר:</Text>
                    </View>                
                </View>

                <View style = {{height: '20%', justifyContent: 'center'}}>
                    { this.renderButton() }
                </View>   



            </View>
        );
    }

    renderButton() {
        if (this.state.loading) {
          console.log('in loading');
          return <Spinner/>
        }
  
        return (
          <TouchableOpacity style = {styles.buttonCreateClass}
            onPress = {this.onPressCreateClass.bind(this)}>
              <Text style = {{fontSize: 20}}>צור כיתה</Text>
          </TouchableOpacity>     
        );
    }
  
    onPressCreateClass() {
        this.setState({ loading: true });
        const schoolName = this.state.schoolName;
        const className = this.state.className;
        const city = this.state.city;
        const { currentUser } = firebase.auth();
        firebase.database().ref(`/cities/${city}/schools/${schoolName}/teachers/${currentUser.uid}/classes/${className}`)
        .set({ schoolName, className, city })
        .then(this.onClassCreateSuccess.bid(this))
        .catch(this.onClassCreateFailed.bid(this));
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
    },
    buttonCreateClass: {
        height: '30%', 
        width: '70%', 
        backgroundColor: 'cornflowerblue', 
        alignSelf: 'center', 
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 2
      }    
}  
