import React, {Component} from 'react';
import { Text, View, StyleSheet, WebView, ScrollView} from 'react-native';

export class ChatRoomScreen extends React.Component {
    static navigationOptions = {
        title: 'CHAT ROOM',
        headerStyle: {
          backgroundColor: '#a00826',
          height: 32,
        },
headerTransparent: {
        position: 'absolute',
},
        headerTitleStyle: {
          color: 'white',
        }
      };
    render() {
      return (
  <View style = {styles.web}>
    <WebView
    source = {{ uri:
    'https://mirianchkhvimiani.wixsite.com/mysite' }}
    />
  <View style={{width: 1000, height: 40, backgroundColor: '#a00826', position: 'absolute',} } />
  </View>
      )
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
