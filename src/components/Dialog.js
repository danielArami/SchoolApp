import React from 'react';
import { View } from 'react-native';
import { Dialog } from 'react-native-simple-dialogs';
 
<Dialog
    visible={this.state.dialogVisible}
    title="Custom Dialog"
    onTouchOutside={() => this.setState({dialogVisible: false})} >
    <View>
        // your content here
    </View>
</Dialog>