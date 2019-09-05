import React, {Component} from 'react'
import { View, Text, Button, TextInput, ScrollView, Image } from 'react-native'

//import { csv } from 'd3';
//import file from './file.csv';

//import * as RNFS from 'react-native-fs';

import {I18nManager} from 'react-native'
I18nManager.allowRTL(false)

import firebase from 'firebase';


import Header from '../components/Header'
import ImageButton from '../components/ImageButton'
import DataField from '../components/DataField'
import ClassPresent from '../components/ClassPresent'
import { stringLiteral } from '@babel/types'

//import readXlsxFile from 'read-excel-file/node'
//import Workbook from 'react-xlsx-workbook'


export default class AddStudentsFromFile extends Component {

    state = { 
        students: [],
        email: this.props.navigation.state.params.email,
        password: this.props.navigation.state.params.password,
        classKey: this.props.navigation.state.params.classData[0],  
        classData: this.props.navigation.state.params.classData[1]
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
                        mainText = 'צרף מקובץ'
                    />
                </View>

                <Button title = 'הוסף מקובץ'
                        onPress = {this.addFromFile.bind(this)}>    
                </Button>

            
            </View>
        );
    }

    addFromFile() {
        //this.setState({ loading: true });
        //console.log(this.state.students[0]);

        for (const student of this.state.students) {
            this.addStudent(student);   
        }        
    }

    addStudent = (student) => {
        console.log('addStudent id: ' + student.תז);

        const id = student.תז;
        const phoneParentA = id; // TODO
        const idToMail = student.תז + '@mail.com';

        console.log(id);
        console.log(idToMail);
        console.log(phoneParentA);

        firebase.auth().createUserWithEmailAndPassword(idToMail, phoneParentA)
        .then(this.onCreateStudentSuccess(student))
        .catch(this.onCreateStudentFailed(student));
    }

    onDataStoredSuccessfully() {
        console.log('onDataStoredSuccessfully');
        /*this.setState({ 
            loading: false,
            messageColor: 'blue',
            message: 'התהליך הושלם בהצלחה, תוכל להוסיף תלמידים נוספים.'
        });*/

        console.log('done');
    }

    onDataStoredFailed() {
        console.log('onDataStoredFailed');
        /*this.setState({ 
            loading: false,
            messageColor: 'red',
            message: 'התלמיד נוסף בהצלחה, אך לא נשמרו נתונים'
        });*/        
    }

    StoreStudentData = (student) => {
        console.log('on storeStudentData, id: ' + student.תז);

        const teacherUid = firebase.auth().currentUser.uid;
        const classKey = this.state.classKey;
        const id = student.תז;
        const firstName = student.שם;
        const lastName = student.משפחה;

        firebase.database().ref(`/teachers/${teacherUid}/classes/${classKey}/students/`)
        .push(id)
        .catch(this.onDataStoredFailed.bind(this));
        
        firebase.database().ref(`/students/${id}/`)
        .set({ firstName, lastName })
        .then(this.onDataStoredSuccessfully.bind(this))
        .catch(this.onDataStoredFailed.bind(this));        
    }

    onSignInBackSuccess = (student) => {
        console.log('onSignInBackSuccess');
        //console.log('after adding user current Uid is: ' + firebase.auth().currentUser.uid);
        //this.setState({ 
        //    messageColor: 'blue',
        //    message: 'התלמיד נוסף לכיתה בהצלחה. מעלה נתונים...'
        //});

        //console.log('before storeStudentData');
        this.StoreStudentData(student);
        //console.log('after storeStudentData');
    }

    SignInBack = (student) => {
        console.log('onSignInBack');

        firebase.auth().signOut();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.onSignInBackSuccess(student));
        //.catch(this.onSignInBackFailed.bind(this));
    }

    onCreateStudentSuccess = (student) => {
        console.log('Student id: ' + student.תז + ' added successfully');
        /*this.setState({ 
            messageColor: 'blue',
            message: 'התלמיד נוסף לכיתה בהצלחה. מעלה נתונים...'
        });*/

        this.SignInBack(student);
    }

    onCreateStudentFailed = (student) => {
        console.log('Failed to add student id: ' + student.תז);
        /*this.setState({ 
            loading: false,
            messageColor: 'red',
            message: '.אירעה שגיאה. המשתמש קיים כבר או שהסיסמא קצרה מדיי'
        });*/
    }


    

    componentWillMount() {
        this.onPressReadFile();
    }

    componentDidUpdate() {
        //console.log(this.state.students);
    }

    onPressReadFile() {
        console.log('onPressReadFile');

        var RNFS = require('react-native-fs');
        var path = RNFS.DocumentDirectoryPath + '/studentsCSV.csv';
 
        RNFS.exists(path).then(res => {
            console.log(res);
        });
        
        const csvToJson = require('csvtojson');
        //const jsonToCsv = require('json2csv');

        var regX = new RegExp("([0-9A-Za-z])");

        
        RNFS.readFile(path, 'ascii').then(res => {
            var heb = '';
            [...res].forEach(c => {
                if(!regX.test(c) && c.toUpperCase() != c.toLowerCase()) {
                    var charCode = c.charCodeAt(0);
                    heb += String.fromCharCode(charCode + 1264);
                }
                else {
                    heb += c;
                }
            });
            csvToJson().fromString(heb).then(jsonData => {
                this.setState({ students: jsonData });
            })
        })
        .catch(err => {
            console.log(err.message, err.code);
        });

    }

}

        /* 
        RNFS.exists(path).then(res => {
        console.log(res);
        });
        */

        /*
        RNFS.writeFile(path, 'Daniel Arami', 'utf8')
        .then((success) => {
            console.log('FILE WRITTEN!');
            console.log(path);
        })
        .catch((err) => {
            console.log(err.message);
        });
        */




