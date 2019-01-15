import React, {Component} from 'react';
import { Text, View, StyleSheet, WebView, ScrollView} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import RootStack from './navigation/HomeStackNavigation';
import OthersStack from './navigation/OthersStackNavigation';

//HomeScreen
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1,}}>
        <RootStack/>
      </View>
    );
  }
}

//SettingScreen
class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Coming Soon!</Text>
      </View>
    );
  }
}

//OthersScreen
class OthersScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1,}}>
        <OthersStack/>
      </View>
    );
  }
}


  //Styles variable
  const styles = StyleSheet.create({
    container: {
      paddingTop: 60,
      alignItems: 'center'
    },
    button: {
      marginBottom: 30,
      width: 260,
      alignItems: 'center',
      backgroundColor: '#a00826'
    },
    buttonText: {
      padding: 20,
      color: 'white'
    },
    web: {
      flex: 1,
   }
  });

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  Others: OthersScreen,
});

export default createAppContainer(TabNavigator);

