import React from 'react';
import {Header, Button, Alert, WebView, AppRegistry, ScrollView, Image, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json
  
  //OthersScreen
export  class OthersScreen extends React.Component {
    static navigationOptions = {
        title: 'Others',
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
                  <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('ChatRoom')}>CHAT ROOM</Text>
                </View>
  
                <View style={styles.button}>
                      <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Calendar')}>CALENDAR</Text>
                </View>
  
                <View style={styles.button}>
                      <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_10th_Chat')}>10th Grade Chatroom</Text>
                </View>
  
                <View style={styles.button}>
                      <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_11th_Chat')}>11-th Grade Chatroom</Text>
                </View>

                <View style={styles.button}>
                      <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_12th_Chat')}>12-th Grade Chatroom</Text>
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