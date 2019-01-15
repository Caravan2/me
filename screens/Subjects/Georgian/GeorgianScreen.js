import React from 'react';
import {Header, Button, Alert, WebView, AppRegistry, ScrollView, Image, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json


//HomeScreen
// 3.0) - Georgian Department
export class GeorgianScreen extends React.Component {
    static navigationOptions = {
      title: 'Georgia Department',
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
            <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_3_1')}>Ms. Nino Gambashidze</Text>
          </View>
          
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_3_2')}>Ms. Ketka Topadze</Text>
          </View>
          
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_3_3')}>Ms. Rusudan Abramidze</Text>
          </View>
          
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_3_4')}>Ms. Marika Dadiani</Text>
          </View>
          
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_3_5')}>Mr. Levan Gigineishvili</Text>
          </View>
          
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_3_6')}>Ms. Mariam Toradze</Text>
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