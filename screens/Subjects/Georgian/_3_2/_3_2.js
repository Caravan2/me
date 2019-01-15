import React from 'react';
import {Header, Button, Alert, WebView, AppRegistry, ScrollView, Image, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json


export class _3_2Screen extends React.Component {
  static navigationOptions = {
    title: 'Ms. Ketka Topadze',
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
            <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_3_2_1')}>Geo9A</Text>
          </View>
          
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_3_2_2')}>Geo10B</Text>
          </View>
          
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_3_2_3')}>Geo11C2</Text>
          </View>
          
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('_3_2_4')}>Geo12E</Text>
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