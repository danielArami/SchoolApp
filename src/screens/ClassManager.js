import React, {Component} from 'react'
import { View, Text, Button, ScrollView, TouchableOpacity, Image } from 'react-native'

import {I18nManager} from 'react-native'
I18nManager.allowRTL(false)

import Header from '../components/Header'
import ImageButton from '../components/ImageButton'
import ClassPresent from '../components/ClassPresent'
import Spinner from '../components/Spinner';
import firebase from 'firebase';

export default class ClassManager extends Component  {

    state = {
        classKey: '', 
        classData: null,
        schoolName: '',
        className: ''
    }

    componentWillMount() {
        console.log('will mount');
        this.setState({
            classKey: this.props.navigation.state.params.classData[0],  
            //classData: this.props.navigation.state.params.classData[1],
            schoolName: this.props.navigation.state.params.classData[1].schoolName,
            className: this.props.navigation.state.params.classData[1].className,

        })

        this.props.navigation.addListener('didFocus', () => {
            console.log('didFocus');
            this.getData();
        });
    }

    getData() {
        const { currentUser } = firebase.auth();
        //var jsonData;
        //var arrData;
        //console.log(this.state.classKey);

        firebase.database().ref(`/teachers/${currentUser.uid}/classes/${this.state.classKey}/`)
            .once('value', snapshot => {
                //jsonData = snapshot.val();
                //console.log(jsonData);
                //arrData = Object.keys(jsonData).map((key) => [key, jsonData[key]]);
                this.setState({ classData: snapshot.val() });
            })
            .catch(); //TODO

        //console.log(arrData);
    }
           
    /*
    componentDidMount() {
        var jsonData = this.state.classData.students;
        //var studentsIDs = Object.keys(jsonData).map((key) => jsonData[key]);
        this.setState( state => { 
            studentsIDs: Object.keys(state.classData.students).map((key) => jsonData[key]);
        })
        console.log(this.state.studentsIDs);

        
        var studentsData = new Array(studentsIDs.length);
        var data;

        console.log(studentsIDs);
        //console.log(studentsData);
        
        for(var i = 0; i < studentsIDs.length; i++) {
            var id = studentsIDs[i];
            studentsData[i] = new Array(2);
            studentsData[i][0] = id;
            studentsData[i][1] = {}
            
            firebase.database().ref(`/students/${id}/`) 
            .once('value', snapshot => {
                data = snapshot.val();
            })
            studentsData[i][1] = data;
        }
        console.log(studentsData);       
    }
    */

    render() {
        console.log('render');
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
                        secondaryText = {`${this.state.schoolName}, ${this.state.className}`}
                        mainText = 'ניהול כיתה'
                    />
                </View>

                <View style = {{height: '13%', width: '100%', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'ivory'}}>
                    <TouchableOpacity style = {{height: '90%', width: '20%', alignItems: 'center'}}
                                    onPress = {() => this.props.navigation.navigate(
                                        'StudentCard',
                                        { classData: this.props.navigation.state.params.classData,
                                          email: this.props.navigation.state.params.email,
                                         password: this.props.navigation.state.params.password,
                                        }
                                    )}>
                    <Image style = {{height: '80%', width: '80%'}}
                        source = {require('../images/addStudent.png')}
                        resizeMode = 'stretch'>
                    </Image>
                    <Text style = {{fontSize: 12, fontWeight: 'bold'}}>הוסף לכיתה</Text>
                    </TouchableOpacity>
                </View>

                <View style = {{height: '60%'}}>
                    { this.renderContent() }
                </View>

                <View style = {{height: '12%', backgroundColor: 'ivory'}}/>
                
            </View>
        );
    }

    renderContent() {
        if (this.state.classData && this.state.classData.students) {
            console.log('1');
            console.log(this.state.classData.schoolName);
            return (         
                <ScrollView>
                    { this.renderStudents() }
                </ScrollView>
            );
        }
        else if(this.state.classData) {
            console.log('2');
            return (
                <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                    <Text style = {{fontSize: 25, alignSelf: 'center'}}>הכיתה ריקה</Text>
                    <Text style = {{fontSize: 15, alignSelf: 'center'}}>לחץ על "הוסף לכיתה" בכדי להוסיף תלמידים</Text>
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
    }

    renderStudents() {
        var jsonData = this.state.classData.students;
        console.log(jsonData);
        var arrData = Object.keys(jsonData).map((key) => [key, jsonData[key]]);
        console.log(arrData);

        return arrData.map(studentData =>
            this.renderStudent(studentData)
        );
    }
        
    renderStudent = (studentData) => {
        return (
            <View style = {styles.itemView}>
                <View style = {styles.wrapView}>
                    <View style = {styles.studentView}>
                        <ClassPresent
                            height = '100%'
                            width = '100%'
                            image = {require('../images/student.png')}
                            cityName = {studentData[0]}
                            schoolName = {studentData[1].firstName}
                            className = {studentData[1].lastName}
                            //THAT WILL BE ON STUDENT PRESS
                            /*onClassPress = {() => this.props.navigation.navigate(
                                'TeacherScreen', 
                                { classData: classData,
                                email: this.props.navigation.state.params.email,
                                password: this.props.navigation.state.params.password,
                                }
                            )}*/
                            fontSize = {18}
                        />
                    </View>
                </View>
            </View>
        );
    }

    onClick () {
        alert('                              הוספת תלמיד !');
    }
}

const styles = {
    studentView: {
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