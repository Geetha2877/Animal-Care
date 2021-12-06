import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import ScreenHeader from '../components/Header';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default class NotificationScreen extends React.Component{
    render(){
        return(
            <SafeAreaProvider>
            <View>
                <ScreenHeader title = "Notifications" navigation={this.props.navigation} />
                <Text>Notification screen</Text>
            </View>
            </SafeAreaProvider>
        )}
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})