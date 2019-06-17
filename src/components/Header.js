import React from 'react'
import {View, Text, Image} from 'react-native'

const Header = (props) => {
    const {
        height,
        backgroundColor,
        rightText,
        rightImagePath,
        leftText,
        leftImagePath,
        secondaryText,
        mainText
    } = props;

    return (
        <View style = {{
            height: height,
            backgroundColor: backgroundColor,
        }}>
            <View style = {{height: '35%', width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style = {{hight: '100%', width: '8%'}}>
                <Text style = {{textAlign: 'center', fontSize: 12}}>{leftText}</Text>
                <Image
                    style = {{height: '100%', width: '100%', alignSelf: 'center'}}
                    source = {leftImagePath}
                    resizeMode = 'stretch'>
                </Image>
                </View>
                <View style = {{hight: '100%', width: '8%'}}>
                <Text style = {{textAlign: 'center', fontSize: 12}}>{rightText}</Text>
                <Image
                    style = {{height: '95%', width: '100%', alignSelf: 'center'}}
                    source = {rightImagePath}
                    resizeMode = 'stretch'>
                </Image>
                </View>
            </View>
            <View style = {{height: '20%', width: '100%'}}>
                <Text style = {{textAlign: 'center', fontSize: 15}}>{secondaryText}</Text>
            </View>
            <View style = {{height: '45%', width: '100%'}}>
                <Text style = {{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>{mainText}</Text>
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