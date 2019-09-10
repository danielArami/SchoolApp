import React from 'react'
import { View, Text, Image, TouchableOpacity} from 'react-native'

const ClassPresent = (props) => {

    const { height, width, image, schoolName, cityName, className, onClassPress, fontSize } = props;
             
    return (
        <TouchableOpacity onPress = {onClassPress}>
        <View style = {{height: height, width: width, flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style = {{justifyContent: 'center'}}>
                <Text style = {{fontSize: fontSize, fontWeight: 'bold', alignSelf: 'flex-start'}}>{cityName}</Text>
                <Text style = {{fontSize: fontSize, fontWeight: 'bold', alignSelf: 'flex-start'}}>{schoolName}</Text>
                <Text style = {{fontSize: fontSize, fontWeight: 'bold', alignSelf: 'flex-start'}}>{className}</Text>
            </View>
            <Image style = {{height: '100%', width: '30%', justifyContent: 'center'}}
                    source = {image}
                    resizeMode = 'stretch'>
            </Image>
        </View>
        </TouchableOpacity>                
    );   
};

export default ClassPresent;