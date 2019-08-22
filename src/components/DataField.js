import React from 'react'
import { View, Text, TextInput} from 'react-native'

const DataField = (props) => {

    const { height, width, text, data, onChangeText } = props;
             
    return (
        <View style = {{height: height, width: width, flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput style = {styles.textInput}
                onChangeText = {onChangeText}
                autoCorrect = {false}
                value = {data}
            />
            <View style = {{justifyContent: 'center'}}>
                <Text>{text}</Text>
            </View>
        </View>                
    );   
};

const styles = {
    textInput: {
        fontSize: 12,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: 'black',
        backgroundColor: 'aliceblue',
        borderRadius: 2
    }
}  

export default DataField;