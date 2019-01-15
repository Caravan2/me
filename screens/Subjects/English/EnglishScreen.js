import React from 'react';
import {Header, Button, Alert, WebView, AppRegistry, ScrollView, Image, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json


// 3) - English
export class EnglishScreen extends React.Component {
    static navigationOptions = {
      title: 'Miscellaneous',
      headerStyle: {
        backgroundColor: '#a00826',
      },
      headerTitleStyle: {
        color: 'white',
      }
    };
    render() {
      return (
        <ScrollView>
        <View style={styles.container}>

            <View style={styles.button}>
              <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_4_1')}>Mr. Ken Goff</Text>
            </View>

            <View style={styles.button}>
              <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_4_2')}>Ms. Manana Mgeladze</Text>
            </View>

            <View style={styles.button}>
              <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_4_3')}>Ms. Gvantsa Zhuruli</Text>
            </View>

            <View style={styles.button}>
              <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_4_4')}>Mr. Anthony Schierman</Text>
            </View>

            <View style={styles.button}>
              <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_4_5')}>Ms. Lela Samniashvili</Text>
            </View>

            <View style={styles.button}>
              <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_4_6')}>Mr. Shota Papava</Text>
            </View>

            <View style={styles.button}>
              <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Subjects')}>Back to Home</Text>
            </View>
  
        </View>
        </ScrollView>
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