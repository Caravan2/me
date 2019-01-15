import React from 'react';
import {Header, Button, Alert, WebView, AppRegistry, ScrollView, Image, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json


//HomeScreen
export class Momo extends React.Component {
  static navigationOptions = {
    title: 'GZAAT Momo',
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
        <Image
          style={{width: 50, height: 60, bottom: 20}}
          source={{uri: 'https://static.wixstatic.com/media/1f3a0d_61bbf3acbd0d9f4b950f9a74695b9260.png/v1/fill/w_80,h_90,al_c,q_80,usm_0.66_1.00_0.01/1f3a0d_61bbf3acbd0d9f4b950f9a74695b9260.webp'}}
        />
            
            <View style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Miscellaneous')}>Miscellaneous</Text>
              </View>

            <View style={styles.button}>
                <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Library')}>Library</Text>
              </View>

              <View style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Georgian')}>Georgian Department</Text>
              </View>

              <View style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('English')}>English Department</Text>
              </View>

              <View style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Russian')}>Russian Department</Text>
              </View>

              <View style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Math')}>Math Department</Text>
              </View>

              <View style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('History')}>History Department</Text>
              </View>

              <View style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Science')}>Science Department</Text>
              </View>

              <View style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('AMR')}>Art-Music-Religion</Text>
              </View>

              <View style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('Elective')}>Elective</Text>
              </View>

              <View style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => this.props.navigation.navigate('InterD')}>InterD</Text>
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





