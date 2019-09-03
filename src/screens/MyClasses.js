import React, {Component} from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import Spinner from '../components/Spinner';

import {I18nManager} from 'react-native'
I18nManager.allowRTL(false)

import firebase from 'firebase';
import Header from '../components/Header'
import ClassPresent from '../components/ClassPresent'

export default class MyClasses extends Component  {

    state = { classes: [] }

    componentWillMount() {
        const { currentUser } = firebase.auth();
        var jsonData;
        var arrData;

        firebase.database().ref(`/teachers/${currentUser.uid}/`)
            .once('value', snapshot => {
                //this.setState({ classes: snapshot.toJSON() });
                jsonData = snapshot.val().classes;
                arrData = Object.keys(jsonData).map((key) => [key, jsonData[key]]);
                this.setState({ classes: arrData });
            })
            .catch(); //TODO
    }

    componentDidUpdate() {
        console.log(this.state.classes);
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
                        onPressLeftButton = {() => this.props.navigation.navigate('TeacherScreen')}
                        middleImagePath = {require('../images/home.png')}
                        onPressMiddleButton = {() => this.props.navigation.navigate('TeacherScreen')}
                        rightImagePath = {require('../images/professor.png')}
                        secondaryText = 'מר דניאל ערמי'
                        mainText = 'הכיתות שלך'
                    />
                </View>

                <View style = {{height: '13%', width: '100%', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'ivory'}}>
                    <TouchableOpacity style = {{height: '90%', width: '20%', alignItems: 'center'}}
                                      onPress = {() => this.props.navigation.navigate('CreateClass')}>
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
                    { this.renderContent() }
                </View>

                <View style = {{height: '12%', backgroundColor: 'ivory'}}/>
                
            </View>
        );
    }

    renderClasses() {
        return this.state.classes.map(classData =>
            <View style = {styles.wrapView}>
                <View style = {styles.classView}>
                    <ClassPresent
                        height = '100%'
                        width = '100%'
                        cityName = {classData[1].city}
                        schoolName = {classData[1].schoolName}
                        className = {classData[1].className}
                        onClassPress = {() => this.props.navigation.navigate(
                            'TeacherScreen', 
                            { classData: classData,
                              email: this.props.navigation.state.params.email,
                              password: this.props.navigation.state.params.password,
                            }
                        )}
                        fontSize = {18}
                    />
                </View>
            </View>
        );
    }

    onClassPress = (classData) => {
        console.log(classData);
    }

    renderContent() {
        if (this.state.classes.length) {
            return (         
                <ScrollView>
                    { this.renderClasses() }
                </ScrollView>
            );
        }
        else {
            return (
                <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                    <Spinner/>
                </View>
              );      
        }
    }
    
    renderClass({classData}) {
        return (
            <View style = {styles.wrapView}>
                <View style = {styles.classView}>
                    <ClassPresent
                        height = '100%'
                        width = '100%'
                        cityName = {classData.cityName}
                        schoolName = {classData.schoolName}
                        className = {classData.className}
                        fontSize = {18}
                    />
                </View>
            </View>
        );
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
        justifyContent: 'center',
        backgroundColor: 'aliceblue'
    }
}

/*
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

*/
