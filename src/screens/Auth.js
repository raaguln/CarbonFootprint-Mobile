import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import startMainTabs from './MainTabs/startMainTabs';

export default class AuthScreen extends Component {

    loginHandler = () => {
        startMainTabs();
    }

    render () {
        return (
            <View>
                <Text>{"Hello World!!"}</Text>
                <Button 
                    title="Login"
                    onPress={this.loginHandler}
                />
            </View>
        );
    }
}