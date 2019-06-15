import React from 'react'
import { View, Text, ImageBackground, Image, TouchableHighlight, TouchableOpacity } from 'react-native'

const Button = (props) => {

    const { height, width, onPress, imageUri, text, fontSize } = props;
             
    return(
        <TouchableOpacity onPress = {onPress}>
        <View style = {{ height: height, width: width }}>
            <ImageBackground
                style = {{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center'}}
                source = {{uri: 'http://www.clker.com/cliparts/n/h/S/s/F/k/square-button-clear-md.png'}}>
                <View style = {{height: '70%', width: '70%', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Image
                        style = {{height: '50%', width: '100%'}}
                        source = {require('./images/parents-meeting.jpg')}>
                    </Image>
                    <View style = {{alignItems: 'center'}}>
                        <Text  style = {{fontSize: fontSize, fontWeight: 'bold', textAlign: 'center'}}>{text}</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
        </TouchableOpacity>
    );   
};

export default Button;