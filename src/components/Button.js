import React from 'react'
import { View, Text, ImageBackground, Image, TouchableHighlight, TouchableOpacity } from 'react-native'

const Button = (props) => {
    
    const { 
        width = 100, 
        height = 100, 
        //backUri = ,             
        //imageUri = ,
        //firstLineText = 'אסיפת', 
        //secondLineText = 'הורים'
    } = props
         
    return(
        <TouchableOpacity onPress = {props.onPress}>
        <ImageBackground
            style = {{
                height: height, 
                width: width,
                alignItems: 'center',
                //flexDirection: 'column',
                justifyContent: 'center',
            }}
            //source={require('./images/note.jpg')}>
            source = {{uri: 'http://www.clker.com/cliparts/n/h/S/s/F/k/square-button-clear-md.png'}}>
            <Image 
                style={{
                    height: height/3, 
                    width: width/2,
                    marginTop: height/10
                }}
                source = {{uri : 'https://sites.google.com/a/tachkemoni.tzafonet.org.il/home/_/rsrc/1444506889164/luhoda/sypthwrym-1/%D7%90%D7%A1%D7%99%D7%A4%D7%AA%20%D7%94%D7%95%D7%A8%D7%99%D7%9D2.jpg'}}
            />
            <View 
                style = {{
                    marginTop: height/20,
                    marginBottom: height/10, 
                    alignItems: 'center'
                }}>
                <Text style = {{fontSize: height/8, fontWeight: 'bold'}}>{'אסיפת'}</Text>
                <Text style = {{fontSize: height/8, fontWeight: 'bold'}}>{'הורים'}</Text>
            </View>
        </ImageBackground>
        </TouchableOpacity>
    );
};

export default Button;