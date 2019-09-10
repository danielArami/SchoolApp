import React, {Component} from 'react'
import { View, Text, Button, TextInput, TouchableOpacity, Image } from 'react-native'
import Spinner from '../components/Spinner';
import firebase from 'firebase';

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
        phoneParentA: '',
        phoneParentB: '',
        message: '',
        messageColor: '',
        loading: false,
        
        email: this.props.navigation.state.params.email,
        password: this.props.navigation.state.params.password,
        
        classKey: this.props.navigation.state.params.classData[0],  
        classData: this.props.navigation.state.params.classData[1]
    }

    /*
    componentDidMount() {
        console.log("email: " + this.state.email);
        console.log("password: " + this.state.password);
    }
    */

    /*
    componentWillMount() {
        this.setState({
            email: this.props.navigation.state.params.email,
            password: this.props.navigation.state.params.password,
    
            classKey: this.props.navigation.state.params.classData[0],  
            classData: this.props.navigation.state.params.classData[1]
        });
    }
    */

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
                        secondaryText = {`${this.state.classData.schoolName}, ${this.state.classData.className}`}
                        mainText = 'צרף לכיתה'
                    />
                </View>

                <View style = {{height: '13%', width: '100%', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'ivory'}}>
                    <TouchableOpacity style = {{height: '90%', width: '20%', alignItems: 'center'}}
                                      onPress = {() => this.props.navigation.navigate(
                                        'AddStudentsFromFile',
                                          { classData: this.props.navigation.state.params.classData,
                                            email: this.props.navigation.state.params.email,
                                            password: this.props.navigation.state.params.password,
                                          }
                                      )}>
                    <Image style = {{height: '80%', width: '80%'}}
                        source = {require('../images/fromFile.jpg')}
                        resizeMode = 'stretch'>
                    </Image>
                    <Text style = {{fontSize: 12, fontWeight: 'bold'}}>הוסף לכיתה</Text>
                    </TouchableOpacity>
                </View>
                
                <View style = {{height: '12%', width: '95%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center'}}>
                    <TextInput style = {styles.textInput}
                        onChangeText = {text => this.setState({ id: text })}
                        autoCorrect = {false}
                        value = {this.state.id}
                    />
                    <View style = {{justifyContent: 'center'}}>
                        <Text>תעודת זהות:</Text>
                    </View>                
                </View>

                <View style = {{height: '12%', width: '95%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center'}}>
                    <TextInput style = {styles.textInput}
                        onChangeText = {text => this.setState({ firstName: text })}
                        autoCorrect = {false}
                        value = {this.state.firstName}
                    />
                    <View style = {{justifyContent: 'center'}}>
                        <Text>שם פרטי:</Text>
                    </View>                
                </View>

                <View style = {{height: '12%', width: '95%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center'}}>
                    <TextInput style = {styles.textInput}
                        onChangeText = {text => this.setState({ lastName: text })}
                        autoCorrect = {false}
                        value = {this.state.lastName}
                    />
                    <View style = {{justifyContent: 'center'}}>
                        <Text>שם משפחה:</Text>
                    </View>                
                </View>

                <View style = {{height: '12%', width: '95%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center'}}>
                    <TextInput style = {styles.textInput}
                        onChangeText = {text => this.setState({ phoneParentA: text })}
                        autoCorrect = {false}
                        value = {this.state.phoneParentA}
                    />
                    <View style = {{justifyContent: 'center'}}>
                        <Text style = {{fontSize: 13}}>הורה א' - טלפון:</Text>
                        <Text style = {{color: 'red', fontSize: 12, alignSelf: 'center'}}>ישמש כסיסמת</Text>
                        <Text style = {{color: 'red', fontSize: 12, alignSelf: 'center'}}>כניסה למערכת</Text>
                    </View>                
                </View>

                <View style = {{height: '12%', width: '95%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center'}}>
                    <TextInput style = {styles.textInput}
                        onChangeText = {text => this.setState({ phoneParentB: text })}
                        autoCorrect = {false}
                        value = {this.state.phoneParentB}
                    />
                    <View style = {{justifyContent: 'center'}}>
                        <Text style = {{fontSize: 13}}>הורה ב' - טלפון:</Text>
                        <Text style = {{color: 'red', fontSize: 12, alignSelf: 'center'}}>אופציונאלי</Text>
                    </View>                
                </View>

                <View style = {{height: '12%', backgroundColor: 'ivory'}}>
                <Text style = {{color: this.state.messageColor, alignSelf: 'center'}}>{this.state.message}</Text>
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
            onPress = {this.onPressAddStudent.bind(this)}>
              <Text style = {{fontSize: 20, fontWeight: 'bold'}}>צרף תלמיד</Text>
          </TouchableOpacity>     
        );
    }

    onPressAddStudent() {
        console.log('before addibg user current Uid is: ' + firebase.auth().currentUser.uid);

        if (this.state.id === '' || 
            this.state.firstName === '' || 
            this.state.lastName === '' ||
            this.state.phoneParentA === '') {
            this.setState({ messageColor: 'red', 
                            message: 'יש למלא את כל השדות למעט האחרון בכדי להמשיך'
            });
        }
        else {
            this.setState({ loading: true });
            const id = this.state.id;
            const phoneParentA = this.state.phoneParentA;
            const idToMail = id + '@mail.com';

            /* // Add the teacher to the school list
            const city = this.state.classData.city;
            const schoolName = this.state.classData.schoolName;

            firebase.database().ref(`/cities/${city}/schools/${schoolName}/teachers/${currentUser.uid}/name/`)
            .set( 'מר מורה' )
            .catch(this.onCreateClassFailed.bind(this));
            */

            firebase.auth().createUserWithEmailAndPassword(idToMail, phoneParentA)
            .then(this.onCreateStudentSuccess.bind(this))
            .catch(this.onCreateStudentFailed.bind(this));
     
            /*
            firebase.database().ref(
                `/teachers/${currentUser.uid}/classes/${this.state.classKey}`) // TODO
            .push({ city, schoolName, className })
            .then(this.onCreateClassSuccess.bind(this))
            .catch(this.onCreateClassFailed.bind(this));
            */   
        }
    }

    StoreStudentData() {
        console.log('on storeStudentData id: ' + this.state.id);

        const teacherUid = firebase.auth().currentUser.uid;
        const classKey = this.state.classKey;
        const id = this.state.id;
        const firstName = this.state.firstName;
        const lastName = this.state.lastName;

        firebase.database().ref(`/teachers/${teacherUid}/classes/${classKey}/students/${id}/`)
        .set({ firstName, lastName })
        .catch(this.onDataStoredFailed.bind(this));
        
        firebase.database().ref(`/students/${id}/`)
        .set({ firstName, lastName })
        .then(this.onDataStoredSuccessfully.bind(this))
        .catch(this.onDataStoredFailed.bind(this));        
    }

    onDataStoredSuccessfully() {
        console.log('onDataStoredSuccessfully');
        this.setState({ 
            loading: false,
            messageColor: 'blue',
            message: 'התהליך הושלם בהצלחה, תוכל להוסיף תלמידים נוספים.'
        });

        console.log('after all current user is: ' + firebase.auth().currentUser.uid);
    }

    onDataStoredFailed() {
        console.log('onDataStoredFailed');
        this.setState({ 
            loading: false,
            messageColor: 'red',
            message: 'התלמיד נוסף בהצלחה, אך לא נשמרו נתונים'
        });        
    }

    onSignInBackSuccess() {
        console.log('onSignInBackSuccess');
        console.log('after adding user current Uid is: ' + firebase.auth().currentUser.uid);
        this.setState({ 
            messageColor: 'blue',
            message: 'התלמיד נוסף לכיתה בהצלחה. מעלה נתונים...'
        });

        console.log('before storeStudentData');
        this.StoreStudentData();
        console.log('after storeStudentData');
    }

    onCreateStudentSuccess() {
        console.log('onCreateStudentSuccess');
        this.setState({ 
            messageColor: 'blue',
            message: 'התלמיד נוסף לכיתה בהצלחה. מעלה נתונים...'
        });

        this.SignInBack();
    }

    SignInBack() {
        console.log('onSignInBack');

        firebase.auth().signOut();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(this.onSignInBackSuccess.bind(this));
        //.catch(this.onSignInBackFailed.bind(this));
    }

    onSignInBackFailed() {
        console.log('onSignInBackFailed');
        this.setState({
            loading: false, 
            messageColor: 'red',
            message: '.התלמיד נוסף בהצלחה. לפני שתמשיך, יש להתחבר מחדש'
        });
    }

    onCreateStudentFailed() {
        console.log('onCreateStudentFailed');
        this.setState({ 
            loading: false,
            messageColor: 'red',
            message: '.אירעה שגיאה. המשתמש קיים כבר או שהסיסמא קצרה מדיי'
        });
    }
}

const styles = {
    textInput: {
        fontSize: 12,
        height: '80%',
        width: '70%',
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: 'black',
        backgroundColor: 'aliceblue',
        borderRadius: 2
    },
    buttonCreateClass: {
        height: '50%', 
        width: '60%',
        backgroundColor: 'darkseagreen',
        alignSelf: 'center', 
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5
      }    
}  
