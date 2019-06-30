import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'

const Header = (props) => {
    const {
        height,
        width,
        backgroundColor,
        leftText,
        leftImagePath,
        onPressLeftButton,
        middleText,
        middleImagePath,
        onPressMiddleButton,
        rightText,
        rightImagePath,
        onPressRightButton,
        secondaryText,
        mainText
    } = props;

    return (
        <View style = {{ height: height, width: width, backgroundColor: backgroundColor}}>
            <View style = {{height: '40%', width: '98%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity style = {{height: '80%', width: '9%', alignSelf: 'center' }} onPress = {onPressLeftButton}>
                    <Image
                        style = {{height: '100%', width: '100%', alignSelf: 'center'}}
                        source = {leftImagePath}
                        resizeMode = 'stretch'>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style = {{height: '80%', width: '9%', alignSelf: 'center'}} onPress = {onPressMiddleButton}>
                    <Image
                        style = {{height: '100%', width: '100%', alignSelf: 'center'}}
                        source = {middleImagePath}
                        resizeMode = 'stretch'>
                    </Image>
                </TouchableOpacity>
                <TouchableOpacity style = {{height: '80%', width: '9%', alignSelf: 'center'}}>
                    <Image
                        style = {{height: '100%', width: '100%', alignSelf: 'center'}}
                        source = {rightImagePath}
                        resizeMode = 'stretch'>
                    </Image>
                </TouchableOpacity>
            </View>
            <View style = {{height: '30%', width: '100%', justifyContent: 'flex-end'}}>
                <Text style = {{textAlign: 'center', fontSize: 14}}>{secondaryText}</Text>
            </View>
            <View style = {{height: '20%', width: '100%', justifyContent: 'space-around'}}>
                <Text style = {{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>{mainText}</Text>
            </View>
        </View>
    );
};

//            <Text style={{fontSize: 30}}>{props.text}</Text>


/*
const styles = {
    header: {
        height: '100%',
        backgroundColor: "#D3D3D3",
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
}
*/
/*
const styles = {
    view: {
        backgroundColor: '#FFF8DC',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        paddingTop: 15,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2, //???
        position: 'relative'

    },
    text: {
        fontSize: 30
    }
};
*/

export default Header;