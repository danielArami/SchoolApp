import React, {Component} from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import axios from 'axios';

import {I18nManager} from 'react-native'
I18nManager.allowRTL(false)

import Header from '../components/Header'
import ClassPresent from '../components/ClassPresent'

export default class MyClasses extends Component  {

    render() {
        return (
            <View style = {{flex: 1}}>
                <View style = {{height: '15%'}}>
                    <Header
                        height = '100%'
                        width = '100%'
                        backgroundColor = '#D3D3D3'
                        leftImagePath = {require('../images/back.png')}
                        onPressLeftButton = {() => this.props.navigation.navigate('TeacherScreen')}
                        middleImagePath = {require('../images/home.png')}
                        onPressMiddleButton = {() => this.props.navigation.navigate('TeacherScreen')}
                        rightImagePath = {require('../images/professor.png')}
                        secondaryText = ''
                        mainText = 'הכיתות שלי'
                    />
                </View>

                <View style = {{height: '15%', width: '100%', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'lavender'}}>
                    <TouchableOpacity style = {{height: '90%', width: '20%', alignItems: 'center'}}
                                      onPress = {this.addClass}>
                    <Image style = {{height: '80%', width: '80%'}}
                        source = {require('../images/addClass.jpg')}
                        resizeMode = 'stretch'>
                    </Image>
                    <Text style = {{fontSize: 14, fontWeight: 'bold'}}>צור כיתה</Text>
                    </TouchableOpacity>

                    <View style = {{height: '90%', width: '20%', alignItems: 'center'}}>
                    <View style = {{height: '80%', width: '70%', justifyContent: 'center'}}>
                    <Image style = {{height: '70%', width: '100%'}}
                        source = {require('../images/scroll.png')}
                        resizeMode = 'stretch'>
                    </Image>
                    </View>
                    <Text style = {{fontSize: 14, fontWeight: 'bold'}}>גלול לחיפוש</Text>
                    </View>
                </View>

                <View style = {{height: '60%'}}>
                    
                    <ScrollView>
                        
                        <View style = {styles.wrapView}>
                            <View style = { styles.classView}>
                                <ClassPresent
                                    height = '100%'
                                    width = '100%'
                                    schoolName = 'עין גנים'
                                    cityName = 'תל אביב'
                                    className = "א'2"
                                    fontSize = {18}
                                />
                            </View>
                        </View>
                        
                        <View style = {styles.wrapView}>
                            <View style = { styles.classView}>
                                <ClassPresent
                                    height = '100%'
                                    width = '100%'
                                    schoolName = 'רמב"ם'
                                    cityName = 'ראש העין'
                                    className = "ג'2"
                                    fontSize = {18}
                                />
                            </View>
                        </View>

                        <View style = {styles.wrapView}>
                            <View style = { styles.classView}>
                                <ClassPresent
                                    height = '100%'
                                    width = '100%'
                                    schoolName = 'רמב"ם'
                                    cityName = 'ראש העין'
                                    className = "ג'2"
                                    fontSize = {18}
                                />
                            </View>
                        </View>

                        <View style = {styles.wrapView}>
                            <View style = { styles.classView}>
                                <ClassPresent
                                    height = '100%'
                                    width = '100%'
                                    schoolName = 'רמב"ם'
                                    cityName = 'ראש העין'
                                    className = "ג'2"
                                    fontSize = {18}
                                />
                            </View>
                        </View>

                        <View style = {styles.wrapView}>
                            <View style = { styles.classView}>
                                <ClassPresent
                                    height = '100%'
                                    width = '100%'
                                    schoolName = 'רמב"ם'
                                    cityName = 'ראש העין'
                                    className = "ג'2"
                                    fontSize = {18}
                                />
                            </View>
                        </View>

                    </ScrollView>

                </View>

                <View style = {{height: '10%', backgroundColor: '#D3D3D3'}}/>


                
            </View>
        );
    }

    addClass() {
        alert('                              הוספת כיתה  !');
    }
    
}

const styles = {
    classView: {
        height: 100,
        width: '80%',
        alignSelf: 'center'
    },
    wrapView: {
        height: 130,
        width: '100%',
        justifyContent: 'center'
    }
}
