import React, {Component} from 'react'
import { View, Text, Button, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'

import {I18nManager} from 'react-native'
I18nManager.allowRTL(false)

import Header from '../components/Header'

export default class ParentsMeetingTeacher extends Component {

  state = {
    parentsMeeting: false,
    setParentsMeeting: false,

    day: '',
    date: '',
    from: '',
    to: '',
    duration: ''
  }

    //componentWillMount() {
    //  this.setState({turnNumber: 0, currentNumber: 0, seconds: 0, message: ''});
    //}

    render() {
        return (
          <View style = {{height: '100%', width: '100%'}}>

            <View style = {{height: '15%'}}>
                <Header
                  height = '100%'
                  width = '100%'
                  backgroundColor = '#D3D3D3'
                  leftImagePath = {require('../images/back.png')}
                  onPressLeftButton = {() => this.props.navigation.navigate('TeacherScreen')}
                  middleImagePath = {require('../images/home.png')}
                  onPressMiddleButton = {() => this.props.navigation.navigate('TeacherScreen')}
                  rightImagePath = {require('../images/user.png')}
                  secondaryText = ''
                  mainText = 'אסיפת - הורים'
                />
              </View>

              <View style = {{height: '13%', width: '100%', flexDirection: 'row', justifyContent: 'center', backgroundColor: 'ivory'}}>
                    <TouchableOpacity style = {{height: '90%', width: '20%', justifyContent: 'center', alignItems: 'center'}}
                                      onPress = {this.setParentsMeeting.bind(this)}>
                    <Image style = {{height: '70%', width: '70%'}}
                        source = {require('../images/parentsMeeting.png')}
                        resizeMode = 'stretch'>
                    </Image>
                    <Text style = {{fontSize: 14, fontWeight: 'bold'}}>קבע אסיפה</Text>
                    </TouchableOpacity>
                </View>

                <View style = {{height: '60%'}}>
                  <View style = {{height: '20%', justifyContent: 'center'}}>
                    <Text style = {{fontSize: 25, alignSelf: 'center'}}>אסיפת הורים חדשה</Text>
                  </View>

                  <View style = {{height: '15%', width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center'}}>
                    <TextInput style = {styles.textInput}
                        onChangeText = {text => this.setState({ day: text })}
                        autoCorrect = {false}
                        placeholder = {" א'-ו' "}
                        value = {this.state.day}
                    />
                    <View style = {{justifyContent: 'center'}}>
                        <Text>ביום:</Text>
                    </View>
                  </View>

                  <View style = {{height: '15%', width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center'}}>
                    <TextInput style = {styles.textInput}
                        onChangeText = {text => this.setState({ date: text })}
                        autoCorrect = {false}
                        placeholder = {'dd/mm/yyyy'}
                        value = {this.state.date}
                    />
                    <View style = {{justifyContent: 'center'}}>
                        <Text>בתאריך:</Text>
                    </View>
                  </View>

                  <View style = {{height: '15%', width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center'}}>
                    <TextInput style = {styles.textInput}
                        onChangeText = {text => this.setState({ from: text })}
                        autoCorrect = {false}
                        placeholder = {'00:00'}
                        value = {this.state.from}
                    />
                    <View style = {{justifyContent: 'center'}}>
                        <Text>משעה:</Text>
                    </View>
                  </View> 

                  <View style = {{height: '15%', width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center'}}>
                    <TextInput style = {styles.textInput}
                        onChangeText = {text => this.setState({ to: text })}
                        autoCorrect = {false}
                        placeholder = {'00:00'}
                        value = {this.state.to}
                    />
                    <View style = {{justifyContent: 'center'}}>
                        <Text>עד שעה:</Text>
                    </View>
                  </View>

                  <View style = {{height: '15%', width: '90%', flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center'}}>
                    <TextInput style = {styles.textInput}
                        onChangeText = {text => this.setState({ duration: text })}
                        autoCorrect = {false}
                        placeholder = {'דקות'}
                        value = {this.state.duration}
                    />
                    <View style = {{justifyContent: 'center'}}>
                        <Text>במרווחי זמן של:</Text>
                    </View>
                  </View>                         
             

                </View>

                <View style = {{height: '12%', backgroundColor: 'ivory'}}/>

            </View>
        );
  }

  setParentsMeeting() {
    this.setState({ setParentsMeeting: true });
  }

  renderContent() {
    if (this.state.setParentsMeeting) {
      console.log('1');
      //console.log(this.state.data.classes);
      return (         
        <ScrollView>
          { this.renderFields() }
        </ScrollView>
      );
    }
    else { // CHAGED !!!
      console.log('2');
        return (
          <View style = {{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
            <Text style = {{fontSize: 25, alignSelf: 'center'}}>אין אסיפת הורים</Text>
            <Text style = {{fontSize: 15, alignSelf: 'center'}}>לחץ על "קבע אסיפה" בכדי לקבוע אסיפה</Text>
          </View>
        );      
    } 
  }

  renderFields() {
    return (
      <View>
      </View>
    );
  }

}

const styles = {
  textInput: {
      fontSize: 12,
      height: '50%',
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



  
