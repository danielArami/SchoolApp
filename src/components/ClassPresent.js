import React from 'react'
import { View, Text, Image} from 'react-native'

const ClassPresent = (props) => {

    const { height, width, schoolName, cityName, className, fontSize } = props;
             
    return (
        <View style = {{height: height, width: width, flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style = {{justifyContent: 'center'}}>
                <Text style = {{fontSize: fontSize, fontWeight: 'bold', alignSelf: 'flex-start'}}>{cityName}</Text>
                <Text style = {{fontSize: fontSize, fontWeight: 'bold', alignSelf: 'flex-start'}}>{schoolName}</Text>
                <Text style = {{fontSize: fontSize, fontWeight: 'bold', alignSelf: 'flex-start'}}>{className}</Text>
            </View>
            <Image style = {{height: '100%', width: '30%', justifyContent: 'center'}}
                    source = {require('../images/classDoor2.jpg')}
                    resizeMode = 'stretch'>
            </Image>
        </View>                
    );   
};

export default ClassPresent;