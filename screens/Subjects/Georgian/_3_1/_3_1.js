import React from 'react';
import {Header, Button, Alert, WebView, AppRegistry, ScrollView, Image, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json


export class _3_1Screen extends React.Component {
    static navigationOptions = {
      title: 'Ms. Nino Gambashidze',
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
              <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_3_1_1')}>GSL1E</Text>
            </View>
            
            <View style={styles.button}>
              <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_3_1_2')}>Geo10C</Text>
            </View>
            
            <View style={styles.button}>
              <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_3_1_3')}>Geo10E2</Text>
            </View>
            
            <View style={styles.button}>
              <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_3_1_4')}>Geo11F</Text>
            </View>
            
            <View style={styles.button}>
              <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_3_1_5')}>Geo12D</Text>
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