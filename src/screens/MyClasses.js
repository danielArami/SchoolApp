import React, {Component} from 'react'
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import Spinner from '../components/Spinner';

import {I18nManager} from 'react-native'
I18nManager.allowRTL(false)

import firebase from 'firebase';
import Header from '../components/Header'
import ClassPresent from '../components/ClassPresent'

export default class MyClasses extends Component  {

    state = { data: null }

    componentWillMount() {

        this.props.navigation.addListener('didFocus', () => {
            console.log('didFocus');
            this.getData();
        });

    }

    getData() {
        const { currentUser } = firebase.auth();
        var jsonData;
        var arrData;

        firebase.database().ref(`/teachers/${currentUser.uid}/`) // maybe directly to classes
            .once('value', snapshot => {
                //this.setState({ classes: snapshot.toJSON() });
                //jsonData = snapshot.val().classes;
                //arrData = Object.keys(jsonData).map((key) => [key, jsonData[key]]);
                this.setState({ data: snapshot.val() });
            })
            .catch(); //TODO
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

                <View style = {{height: '13%', width: '100%', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'ivory'}}>
                    <TouchableOpacity style = {{height: '90%', width: '20%', alignItems: 'center'}}
                                      onPress = {() => this.props.navigation.navigate('CreateClass')}>
                    <Image style = {{height: '80%', width: '80%'}}
                        source = {require('../images/addClass.jpg')}
                        resizeMode = 'stretch'>
                    </Image>
                    <Text style = {{fontSize: 14, fontWeight: 'bold'}}>צור כיתה</Text>
                    </TouchableOpacity>
                </View>

                <View style = {{height: '60%'}}>
                    { this.renderContent() }
                </View>

                <View style = {{height: '12%', backgroundColor: 'ivory'}}/>
                
            </View>
        );
    }

    renderClasses() {
        //return this.state.classes.map(classData =>
        //    this.renderClass(classData)
        //);

        var jsonData = this.state.data.classes;
        console.log(jsonData);
        var arrData = Object.keys(jsonData).map((key) => [key, jsonData[key]]);
        console.log(arrData);

        return arrData.map(classData =>
            this.renderClass(classData)
        );

    }

    onClassPress = (classData) => {
        console.log(classData);
    }

    renderContent() {
        if (this.state.data && this.state.data.classes) {
            console.log('1');
            console.log(this.state.data.classes);
            return (         
                <ScrollView>
                    { this.renderClasses() }
                </ScrollView>
            );
        }
        else { // CHAGED !!!
            console.log('2');
            return (
                <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                    <Text style = {{fontSize: 25, alignSelf: 'center'}}>אין כיתות</Text>
                    <Text style = {{fontSize: 15, alignSelf: 'center'}}>לחץ על "צור כיתה" בכדי ליצור כיתה חדשה</Text>
                </View>
              );      
        }
        /*
        else if(this.state.data) {
            console.log('2');
            return (
                <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                    <Text style = {{fontSize: 25, alignSelf: 'center'}}>אין כיתות</Text>
                    <Text style = {{fontSize: 15, alignSelf: 'center'}}>לחץ על "צור כיתה" בכדי ליצור כיתה חדשה</Text>
                </View>
              );      
        }
        else {
            console.log('3');
            return (
                <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                    <Spinner/>
                </View>
              );      
        }
        */
    }
    
    renderClass = (classData) => {
        return (
            <View style = {styles.itemView}>
                <View style = {styles.wrapView}>
                    <View style = {styles.classView}>
                        <ClassPresent
                            height = '100%'
                            width = '100%'
                            image = {require('../images/classDoor.png')}
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
            </View>
        );
    }
}

const styles = {
    classView: {
        height: 90,
        width: '80%',
        alignSelf: 'center',
        alignSelf: 'center',
        backgroundColor: 'aliceblue'
    },
    wrapView: {
        height: 120,
        width: '95%',
        justifyContent: 'center',
        backgroundColor: 'aliceblue',
        borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 1,
        alignSelf: 'center',
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    itemView: {
        height: 130,
        width: '100%',
        justifyContent: 'center',
        backgroundColor: 'white',
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
