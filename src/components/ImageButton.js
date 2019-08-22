import React from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'

const ImageButton = (props) => {

    const { height, width, onPress, imagePath, resizeMode, text, fontSize } = props;
             
    return(
        <View style = {{height: height, width: width, justifyContent: 'space-between'}}>
            <TouchableOpacity style = {{height: '100%', width: '100%'}} onPress = {onPress}>
                <Image
                    style = {{height: '100%', width: '100%'}}
                    resizeMode = {resizeMode}
                    source = {imagePath}>
                </Image>
            </TouchableOpacity>
            <Text style = {{fontSize: fontSize, alignSelf: 'center'}}>{text}</Text>
        </View>
    );   
};

export default ImageButton;

/*
                    <Image
                        style = {{height: '50%', width: '85%', alignSelf: 'center'}}
                        resizeMode = {resizeMode}
                        source = {imagePath}>
                    </Image>

*/