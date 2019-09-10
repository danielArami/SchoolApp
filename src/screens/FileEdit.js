import React, {Component} from 'react'
import { View, Text, Button, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native'

import {I18nManager} from 'react-native'
I18nManager.allowRTL(false)

import Header from '../components/Header'
import ImageButton from '../components/ImageButton'

export default class FileEdit extends Component {

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
                        mainText = 'מבנה הקובץ'
                    />
                </View>

                <View style = {{height: '1%'}}/>
                <Text style = {styles.text}>  להלן הסבר על מבנה הקובץ הדרוש לאפליקציית Talmid:</Text>
                <View style = {{height: '1%'}}/>

                <Text style = {styles.text}>  לצורך כך, תוכל להשתמש באפליקציה החינמית CSV Editor</Text>
                <Text style = {styles.text}>  הנמצאת בחנות האפליקציות של Google.</Text>
                <View style = {{height: '1%'}}/>

                <Text style = {styles.text}>  לנוחיותך, ניתן לערוך את הקובץ כטבלת נתונים, או להשתמש</Text>
                <Text style = {styles.text}>  בפסיק כמפריד בין הנתונים, וזאת בהתאם לאפליקציה שאיתה</Text>
                <Text style = {styles.text}>  תבחר לערוך את הקובץ.</Text>
                <View style = {{height: '1%'}}/>

                <Text style = {styles.text}>  השורה הראשונה תציין את שמות הנתונים ואת סדר הופעתם</Text>
                <Text style = {styles.text}>  לאורך הקובץ, וכל שורה נוספת תכיל את הפרטים בסדר זה.</Text>
                <Text style = {styles.text}>  שים לב לכך שאינך מוסיף תווים מיותרים.</Text>
                <View style = {{height: '1%'}}/>

                <Text style = {styles.text}>  מבנה קובץ לדוגמא:</Text>
                <View style = {{height: '1%'}}/>

                <Text style = {styles.text}>  תז, שם, משפחה</Text>
                <Text style = {styles.text}>  123456789, דניאל, ערמי</Text>
                <Text style = {styles.text}>  987654321, עדן, עטר</Text>
                <View style = {{height: '1%'}}/>

                <TouchableOpacity onPress = {() => this.props.navigation.navigate('AddStudentsFromFile')}>
                    <Text style = {{fontSize: 14, color: 'blue'}}>  חזרה למסך הקודם</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = {
    text: {
        fontSize: 13
    }
}