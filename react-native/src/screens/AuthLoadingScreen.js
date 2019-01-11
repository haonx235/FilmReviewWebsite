import React, { Component } from 'react'
import {
  Text,
  View,
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  Image,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import {CheckToken} from '../api/UserAPI'

export default class AuthLoadingScreen extends Component {

  minTimeWait = 2000

  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    let self = this
    const userToken = await AsyncStorage.getItem('userToken');

    let timeStart = Date.now()
    CheckToken(userToken)
    .then(valid=>{
      let timeEnd = Date.now()
      let timePass = timeEnd - timeStart
      if (timePass >= self.minTimeWait) {
        self.props.navigation.navigate(valid ? 'App' : 'Auth');
      } else {
        setTimeout(() => {
          self.props.navigation.navigate(valid ? 'App' : 'Auth');
        }, self.minTimeWait - timePass);
      }
    })
    .catch(()=>self.props.navigation.navigate('Auth'))
  };

  render() {
    return (
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#dddddd', '#dddddd']} style={styles.linearGradient}>
        <StatusBar backgroundColor="transparent" translucent={true} />
        <View style={{alignItems: "center"}}>
          <Image style={styles.logo} source={require("../assert/logo.png")} />
          <Image style={styles.title} source={require("../assert/title.png")} />
          <ActivityIndicator style={styles.loading} />
        </View>
      </LinearGradient>
    )
  }
}

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  loading: {
    marginTop: 15
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    width: 300,
    height: 30,
    resizeMode: "contain",
  }
})