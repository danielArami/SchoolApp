import React, {Component} from 'react'
import { View, Text, Button, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native'

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
import Spinner from '../components/Spinner';
import { isContinueStatement } from '@babel/types';


//import readXlsxFile from 'read-excel-file/node'
//import Workbook from 'react-xlsx-workbook'


export default class AddStudentsFromFile extends Component {

    state = { 
        students: null,
        email: this.props.navigation.state.params.email,
        password: this.props.navigation.state.params.password,
        classKey: this.props.navigation.state.params.classData[0],  
        classData: this.props.navigation.state.params.classData[1],
        filename: '',
        message: '',
        messageColor: '',
        loading: false,
        error: false,

        dataFetched: false,
        uploadStarted: false,
        dataChecked: false,
    }
    
    
    initState() {
        this.setState({
            students: null,
            loading: false,
            error: false,
    
            dataFetched: false,
            uploadStarted: false,
            dataChecked: false,
        });
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

                <View style = {{height: '1%'}}/>
                <Text style = {styles.text}>  במסך זה תוכל להוסיף תלמידים לכיתתך מתוך קובץ.</Text>
                <View style = {{height: '1%'}}/>

                <Text style = {styles.text}>  לצורך כך, עליך ליצור מבעוד מועד קובץ בפורמט CSV בהתאם</Text>
                <Text style = {styles.text}>  להנחיות בקישור להלן, ולמקם אותו בתיקיית האפליקציה.</Text>
                <View style = {{height: '1%'}}/>

                <TouchableOpacity onPress = {() => this.props.navigation.navigate('FileEdit')}>
                    <Text style = {{fontSize: 14, color: 'blue'}}>  לחץ כאן למעבר להסבר על מבנה הקובץ</Text>
                </TouchableOpacity>

                <View style = {{height: '1%'}}/>

                <Text style = {styles.text}>  עליך לשמור את הקובץ בזיכרון הטלפון הפנימי (internal),</Text>
                <Text style = {styles.text}>  בתיקייה הייעודית לאפליקציית Talmid. אם הנך משתמש</Text>
                <Text style = {styles.text}>  באפליקצייה CSV Editor לחץ על File -> Save As, ובמסך</Text>
                <Text style = {styles.text}>  השמירה לחץ על HOME. כעת, נווט אל תיקיית האפליקצייה</Text>
                <Text style = {styles.text}>  בנתיב הבא:  Android / data / com.talmid / files</Text>
                <Text style = {styles.text}>  השאר את שאר ההגדרות כפי שהן, בחר שם לקובץ ולחץ OK.</Text>
                <View style = {{height: '1%'}}/>

                <Text style = {styles.text}>  לסיום, הזן מטה את שם הקובץ שיצרת, ולחץ על "צרף מקובץ".</Text>
                <View style = {{height: '5%'}}/>

                <View style = {{height: '10%', alignItems: 'center'}}>
                    <View style = {{height: '100%', flexDirection: 'row'}}>
                        <View style = {{justifyContent: 'center'}}>
                            <Text style = {styles.text}>Android/data/com.talmid/files/ </Text>
                        </View>
                        <TextInput style = {styles.textInput}
                            onChangeText = {text => this.setState({ filename: text, message: '' })}
                            autoCorrect = {false}
                            value = {this.state.filename}
                        />
                        <View style = {{justifyContent: 'center'}}>
                            <Text style = {styles.text}> .csv</Text>
                        </View>
                    </View>
                </View>

                <View style = {{height: '10%', justifyContent: 'center'}}>
                    <Text style = {{color: this.state.messageColor, textAlign: 'center'}}>{this.state.message}</Text>
                </View>

                <View style = {{height: '20%', alignItems: 'center'}}>
                    {this.renderButton()}
                </View>

            </View>
        );
    }

    renderButton() {
        if(this.state.loading) {
            return (
                <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                    <Spinner/>
                </View>
            ); 
        }
        else {
            return (
                <TouchableOpacity style = {{height: '80%', width: '25%', 
                                            justifyContent: 'space-between', alignItems: 'center', 
                                            backgroundColor: 'lavenderblush', borderWidth: 0.5, 
                                            borderColor: 'black', borderRadius: 10}}
                                onPress = {this.readFile.bind(this)}>
                    <Image style = {{height: '70%', width: '75%'}}
                            source = {require('../images/fromFile.jpg')}
                            resizeMode = 'stretch'>
                    </Image>
                    <Text style = {{fontSize: 14, fontWeight: 'bold'}}>צרף מקובץ</Text>
                </TouchableOpacity>
            )
        }
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
        if (this.state.students && !this.state.dataFetched) {           
            console.log(this.state.students);
            var dataIsCorrect = this.checkData();
            if(dataIsCorrect) {
                this.uploadData();
            }    
        }
    }

    uploadData() {
        console.log('uploadData');
        this.onUploadingData();
                  
        for (var i = 0; i < this.state.students.length; i++) {
            var student = this.state.students[i];
            console.log('in Uploading Data of student: ' + student.תז);
            this.setState({ 
                message: 'מעלה נתונים ... ' + '(' + (i+1) + '/' + this.state.students.length + ')' 
            })
            this.addStudent(student);        
        }
        
        //if(!this.state.error) {
            console.log('completed');
            this.setState({ 
                messageColor: 'green',
                message: 'התהליך הושלם בהצלחה. נוספו ' + '(' + this.state.students.length + '/' + this.state.students.length + ')' + ' תלמידים.'
            });
            this.initState();
        //}
    }

    checkData() {
        this.onCheckingData();
        var dataIsCorrect = true;

        if(this.state.students.length === 0) {
            this.onFileIsEmpty();
            dataIsCorrect = false;
        }
        else {
            for (var i = 0; i < this.state.students.length; i++) {
                var student = this.state.students[i];
 
                if(!student.תז || !student.שם || !student.משפחה) {
                    this.onUnsupportedColumns();
                    dataIsCorrect = false;
                    break;
                }
                
                else if(student.תז.length === 0 ||
                    student.שם.length === 0 ||
                    student.משפחה === 0 ||
                    student.תז.length !== 9 ||
                    !this.isID(student.תז)) {
                        this.onDataIsMissing(i+2);
                        dataIsCorrect = false;
                        break;
                }
            }    
        }

        this.setState({ dataChecked: true });

        return dataIsCorrect;
    }

    isID = (str) => {
        var regX = new RegExp("([0-9])");
        var isID = true;
           
        [...str].forEach(c => {
            if(!regX.test(c)) {
                isID = false; 
            }
        })
        return isID;
    }

    onUnsupportedColumns() {
        this.setState({
            loading: false,
            error: true,
            dataChecked: true,
            messageColor: 'red',
            message: 'שורת הנתונים בראש הקובץ איננה כפי הנדרש. התהליך עצר.'
        })
    }

    onCheckingData() {
        this.setState({
            loading: true,
            messageColor: 'green',
            message: 'בודק נתונים ...'
        })
    }

    onDataIsMissing = (line) => {
        this.setState({
            loading: false,
            error: true,
            dataChecked: true,
            messageColor: 'red',
            message: 'נתונים חסרים או שגויים בשורה ' + line + ' בקובץ. ' + 'התהליך עצר.'
        })
    }

    onFileIsEmpty() {
        this.setState({
            loading: false,
            error: true,
            dataChecked: true,
            messageColor: 'red',
            message: 'הקובץ ריק'
        })
    }

    onFailedToReadFile() {
        this.setState({
            loading: false,
            error: true,
            messageColor: 'red',
            message: 'אירעה שגיאה. הקובץ חסר או שאיננו בפורמט הנדרש.'
        })
    }

    onReadFile() {
        this.setState({ 
            loading: true,
            messageColor: 'green',
            message: 'קורא קובץ ...' 
        })         
    }

    noFileHasProvided() {
        this.setState({
            loading: false, 
            error: true,
            messageColor: 'red',
            message: 'נא ציין את שם הקובץ שיצרת'
        })
    }

    onUploadingData() {
        this.setState({ 
            loading: true,
            dataFetched: true,
            uploadStarted: true,
            messageColor: 'green',
            message: 'מעלה נתונים ... ' + '(0/' + this.state.students.length + ')'
        });
    }

    addStudent = (student) => {
        console.log('addStudent id: ' + student.תז);

        const id = student.תז;
        const phoneParentA = id; // TODO
        const idToMail = student.תז + '@mail.com';

        firebase.auth().createUserWithEmailAndPassword(idToMail, phoneParentA)
        .then(this.SignInBack(student))
        .catch((error) => { 
            console.log(error)
            /*if(error.code === "auth/email-already-in-use") {
                console.log('EQUAL');
            }*/
        });
    }

    onDataStoredFailed() {
        console.log('onDataStoredFailed');
        this.setState({ 
            loading: false,
            error: true,
            messageColor: 'red',
            message: 'אירעה שגיאה בהעלאת חלק מהנתונים, אנא עדכן ידנית מאוחר יותר'
        });        
    }

    StoreStudentData = (student) => {
        console.log('on storeStudentData, id: ' + student.תז);

        const teacherUid = firebase.auth().currentUser.uid;
        const classKey = this.state.classKey;
        const id = student.תז;
        const firstName = student.שם;
        const lastName = student.משפחה;

        //if(this.studentAlreadyInClass(student.תז)) {
        //    console.log('studentAlreadyInClass');
        //}

        firebase.database().ref(`/teachers/${teacherUid}/classes/${classKey}/students/${id}/`)
        .set({ firstName, lastName })
        .catch(this.onDataStoredFailed.bind(this));
        
        firebase.database().ref(`/students/${id}/`)
        .set({ firstName, lastName })
        .then(console.log('DataStoredSuccessfully'))
        .catch(this.onDataStoredFailed.bind(this));
        
        firebase.database().ref(`/students/${id}/teacher`)
        .set(teacherUid)
        .then(console.log('StudentTeacherStoredSuccessfully'))
        .catch(this.onDataStoredFailed.bind(this));        
    }

    /*
    studentAlreadyInClass = (studentID) => {
        const teacherUid = firebase.auth().currentUser.uid;
        const classKey = this.state.classKey;
        var studentAlreadyInClass = false;
        var jsonData = null;
        var arrData = [];

        firebase.database().ref(`/teachers/${teacherUid}/classes/${classKey}/students/`) 
        .once('value', snapshot => {
            jsonData = snapshot.val();
            arrData = Object.keys(jsonData).map((key) => [key, jsonData[key]]);
            //console.log(arrData);
        })
        .catch(); //TODO

        console.log('before iteration');
        for(var i = 0; i < arrData.length; i++) {
            console.log(arrData[i]);
        }
        
        console.log(studentAlreadyInClass);
        return studentAlreadyInClass;
    }
    */

    SignInBack = (student) => {
        console.log('onSignInBack');

        firebase.auth().signOut();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.StoreStudentData(student))
        .catch((error) => { console.log(error) }); // MAYBE TO HANDLE !
    }

    onSignInBackFailed() {
        console.log('onSignInBackFailed');
    }

    onCreateStudentFailed = (student) => {
        console.log('Failed to add student id: ' + student.תז);
        /*this.setState({ 
            loading: false,
            error: true,
            messageColor: 'red',
            message: `אירעה שגיאה בעת הוספת התלמיד ${student.שם} ${student.משפחה}, התהליך עצר.`
        });*/
    }

    readFile() {
        if(this.state.filename === '') {
            this.noFileHasProvided();
            return;
        }

        this.onReadFile(); // UI

        var RNFS = require('react-native-fs');
        //var path = RNFS.DocumentDirectoryPath + '/test.csv';
        var path = RNFS.ExternalDirectoryPath + '/' + this.state.filename + '.csv';
        const csvToJson = require('csvtojson');
        var regX = new RegExp("([0-9A-Za-z])");
           
        RNFS.readFile(path).then(res => {
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
            console.log(heb);       
            csvToJson().fromString(heb).then(jsonData => {
                this.setState({ students: jsonData });
            })
        })
        .catch(err => {
            console.log('failed to read file (catch)');
            console.log(err.message, err.code);
            this.onFailedToReadFile();
        });       
    }
}

const styles = {
    text: {
        fontSize: 13
    },
    textInput: {
        fontSize: 13,
        height: '100%',
        width: '35%',
        //justifyContent: 'center',
        //alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: 'black',
        backgroundColor: 'aliceblue',
        borderRadius: 1
    },
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




