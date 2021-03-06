import React from 'react'
import { View, Text, ImageBackground, Image, TouchableHighlight, TouchableOpacity } from 'react-native'

const Button = (props) => {

    const { height, width, onPress, imagePath, resizeMode, text, fontSize } = props;
             
    return(
        <TouchableOpacity onPress = {onPress}>
        <View style = {{ height: height, width: width }}>
            <ImageBackground
                style = {{ height: '100%', width: '105%', alignItems: 'center', justifyContent: 'center'}}
                source = {require('../images/square-button.png')}>
                <View style = {{height: '70%', width: '70%', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Image
                        style = {{height: '50%', width: '85%', alignSelf: 'center'}}
                        resizeMode = {resizeMode}
                        source = {imagePath}>
                    </Image>
                    <Text  style = {{height: '47%', width: '100%', fontSize: fontSize, fontWeight: 'bold', textAlign: 'center'}}>{text}</Text>
                </View>
            </ImageBackground>
        </View>
        </TouchableOpacity>
    );   
};

export default Button;