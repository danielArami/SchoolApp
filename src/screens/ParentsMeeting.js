import React, {Component} from 'react'
import { View, Text, Button } from 'react-native'
import axios from 'axios';

import {I18nManager} from 'react-native'
I18nManager.allowRTL(false)

import Header from '../components/Header'

export default class ParentsMeeting extends Component {

  state = { turnNumber: 0, currentNumber: 0};

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
                onPressLeftButton = {() => this.props.navigation.navigate('Main')}
                middleImagePath = {require('../images/home.png')}
                onPressMiddleButton = {() => this.props.navigation.navigate('Main')}
                rightImagePath = {require('../images/user.png')}
                secondaryText = ''
                mainText = 'אסיפת - הורים'
              />
            </View>

            <View style = {{height: '7%'}}/>

            <Text style = {{fontSize: 30, textAlign: 'center'}}>מקומך בתור:</Text>

            <Text style = {{fontSize: 30, textAlign: 'center'}}>{this.state.turnNumber}</Text>

            <View style = {{height: '7%'}}/>

            <View style = {{height: '7%', width: '100%', flexDirection: 'row', justifyContent: 'center'}}>
              <Button title = 'לחץ כדי להירשם'
                      onPress = {this.bookMe.bind(this)}>
              </Button>
            </View>

            <View style = {{height: '5%'}}/>

            <Text style = {{fontSize: 30, textAlign: 'center'}}>כעת בתור:</Text>

            <Text style = {{fontSize: 30, textAlign: 'center'}}>{this.state.currentNumber}</Text>

            <View style = {{height: '5%'}}/>

            <View style = {{height: '7%', width: '100%', flexDirection: 'row', justifyContent: 'center'}}>
              <Button title = 'רענן'
                      onPress = {this.checkCurrent.bind(this)}>
              </Button>
            </View>

            <View style = {{height: '5%'}}/>

            <Text style = {{fontSize: 25, textAlign: 'center', color: 'red'}}>{this.state.message}</Text>

          </View>
        )
    }

    checkCurrent() {
      axios.get('http://192.168.0.10:3000/current')
      .then(response => {
        //console.log(response.data);
        this.setState({currentNumber: response.data});
        if(response.data === this.state.turnNumber - 1) {
          this.setState({message: 'אתה הבא בתור'});
        }
        else if(response.data === this.state.turnNumber) {
          this.setState({message: 'תורך'});
        }
        else {
          this.setState({message: ''});
        }
      })
      .catch(error => {
        console.log(error);
      })
    }

    bookMe() {
      console.log('in bookMe');

      const user = {
        id: '4',
        name: 'Daniel',
        meetingNumber: '4'
      }
      
      axios.post('http://192.168.0.10:3000/bookUser', user)
      .then(response => {
        //console.log(response.data);
        this.setState({turnNumber: response.data});
      })
      .catch(error => {
        console.log(error);
      })
      
    }   
} 