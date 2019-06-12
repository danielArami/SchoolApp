import React from 'react'
import {View, Text} from 'react-native'

const Area = (props) => {
    return (
        <View style={{
                backgroundColor: props.color,
                justifyContent: 'center',
                alignItems: 'center',
                height: props.height,
                //marginLeft: 5,
                //marginRight: 5,
                //marginTop: 5,
                //marginBottom: 5,
                //paddingTop: 15,
                shadowColor: '#000000',
                shadowOffset: {width: 0, height: 2},
                shadowOpacity: 0.2,
                elevation: 2, //???
                position: 'relative'
            }}>
            <Text style={{fontSize: 30}}>{props.text}</Text>
        </View>
    );
};

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

export default Area;