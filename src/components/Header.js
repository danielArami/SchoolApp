import React from 'react'
import {View, Text, Image} from 'react-native'

const Header = (props) => {
    return (
        <View style = {{
            height: props.height,
            backgroundColor: "#D3D3D3",
        }}>
            <View style = {{height: '35%', width: '100%', flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                <Text style = {{textAlign: 'left'}}>{'יציאה '}</Text>
                <Image
                    style = {{height: '80%', width: '80%', alignSelf: 'center'}}
                    source = {require('./images/exit2.png')}
                    resizeMode = 'stretch'>
                </Image>
                </View>
                <View>
                <Text style = {{textAlign: 'right'}}>{' שלום'}</Text>
                <Image
                    style = {{height: '80%', width: '80%', alignSelf: 'center'}}
                    source = {require('./images/user2.png')}
                    resizeMode = 'stretch'>
                </Image>
                </View>
            </View>
            <View style = {{height: '20%', width: '100%'}}>
                <Text style = {{textAlign: 'center'}}>בית - ספר</Text>
            </View>
            <View style = {{height: '45%', width: '100%', justifyContent: 'center'}}>
                <Text style = {{textAlign: 'center', fontSize: 30, fontWeight: 'bold'}}>עין - גנים</Text>
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