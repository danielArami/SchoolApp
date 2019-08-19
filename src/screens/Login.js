import React, { Component } from 'react';
import { Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import Spinner from '../components/Spinner';

import {I18nManager} from 'react-native'
I18nManager.allowRTL(false)

import firebase from 'firebase';
import Header from '../components/Header'

export default class Login extends Component {
  state = { id: '', 
            password: '', 
            headerColor: '#D3D3D3', 
            headreText: 'ברוכים הבאים',
            error: '',
            loading: null,
            loggedIn: null
          };

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        console.log("if");
        this.props.navigation.navigate('Main');
      }
      else {
        this.setState({ loggedIn: false, headerColor: 'lightcoral', headreText: 'התחבר למערכת' });
      }
    })  
  }

  render() {
    return (
      <View style = {{height: '100%', width: '100%'}}>

        <View style = {{height: '15%'}}>
          <Header
            height = '100%'
            width = '100%'
            backgroundColor = {this.state.headerColor}
            secondaryText = {this.state.headreText}
          />
        </View>
            
        <View style = {{height: '45%'}}>
          <ImageBackground
            style = {{height: '100%', width: '100%'}}
            source = {require('../images/Talmid.png')}
            resizeMode = 'stretch'>
          </ImageBackground>
        </View>

        { this.renderContent() }

      </View>
      )
    }

    renderContent() {
      if(this.state.loggedIn === null) {
        return <Spinner/>
      }
      else if(this.state.loggedIn === false) {
        return this.renderLoginFields();
      }
    }

    renderLoginFields() {
      return (
        <View style = {{height: '100%', width: '100%'}}>
            <View style = {{height: '10%', justifyContent: 'center', alignItems: 'center'}}>
              <Text style = {{color: 'red'}}>{this.state.error}</Text>
            </View>

            <View style = {{height: '10%'}}>
              <TextInput style = {styles.textInput}
                value = {this.state.text}
                onChangeText = {text => this.setState({ id: text, error: ''})}
                autoCorrect = {false}
                placeholder = {'תעודת זהות'}
              />
            </View>
            <View style = {{height: '10%'}}>
              <TextInput style = {styles.textInput}
                value = {this.state.text}
                onChangeText = {text => this.setState({ password: text, error: ''})}
                autoCorrect = {false}
                placeholder = {'סיסמא'}
                secureTextEntry = {true}
              />
            </View>

            { this.renderButton() }

        </View>
      )
    }

    renderButton() {
      if (this.state.loading) {
        console.log('in loading');
        return <Spinner/>
      }

      return (
        <TouchableOpacity style = {styles.buttonLogin}
          onPress = {this.onPressSignIn.bind(this)}>
            <Text style = {{fontSize: 20}}>התחבר</Text>
        </TouchableOpacity>     
      );
    }

    onLogoutSuccess() {
      this.setState({
        headerColor: 'lightcoral', 
        headreText: 'התחבר למערכת',
        error: '',
        loading: false
      });
    }

    onLoginSuccess() {
      console.log("in login success");

      this.setState({
        loading: false
      });
      console.log("in login success2");
    }

    onLoginFailed() {
      console.log("in login failed");
      this.setState({
        loading: false,
        error: 'שגיאת התחברות - אחד מפרטי הזיהוי חסר או שגוי.'
      });
    }

    onPressSignIn() {
      console.log("in sign in");
      this.setState({ error: '', loading: true });
      console.log("in sign in2");

      if(this.state.id === '' || this.state.password === '') {
        console.log("in if");
        this.onLoginFailed();
      }
      else {
        const idToMail = this.state.id + '@mail.com';

        console.log(idToMail);
        console.log(this.state.password);  
      
        firebase.auth().signInWithEmailAndPassword(idToMail, this.state.password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFailed.bind(this));
      }  
    }
}

const styles = {
  textInput: {
      width: '80%',
      justifyContent: 'center',
      alignSelf: 'center',
      borderWidth: 0.5,
      borderColor: 'black',
      backgroundColor: 'aliceblue',
      borderRadius: 2
  },
  buttonLogin: {
    height: '8%', 
    width: '70%', 
    backgroundColor: 'darkseagreen', 
    alignSelf: 'center', 
    alignItems: 'center',
    justifyContent: 'center'
  }
};