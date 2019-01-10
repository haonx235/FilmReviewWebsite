import React, { Component } from 'react'
import { StyleSheet, StatusBar, View, Image, Alert } from 'react-native'
import { Form, Item, Input, Button, Text, Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {Signin} from '../api/UserAPI'

export default class SignInScreen extends Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    state = {
        username: "",
        password: "",
        showPassword: false,
    }

    _signInAsync = async () => {
        let {username, password} = this.state
        Signin(username, password)
        .then(token=>{
            this.props.navigation.navigate('App');
        })
        .catch(err=>Alert.alert('Error', err.message || err))
        
    };

    render() {
        return (
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#dddddd', '#dddddd']} style={styles.linearGradient}>
                <StatusBar backgroundColor="transparent" translucent={true} />
                <Image source={require("../assert/logo.png")} />
                <View style={styles.content}>
                    <Form style={styles.form}>
                        <Item regular style={styles.item}>
                            <Input
                                placeholder="Username"
                                value={this.state.username}
                                onChangeText={username => this.setState({username})}
                                style={styles.input}
                                textContentType="username"
                                autoFocus
                            />
                        </Item>
                        <Item regular style={styles.item}>
                            <Input
                                placeholder="Password"
                                style={styles.input}
                                textContentType="password"
                                value={this.state.password}
                                onChangeText={password => this.setState({password})}
                                keyboardType={this.state.showPassword ? "visible-password" : "default"}
                                secureTextEntry={true}
                            />
                            <Button
                                transparent
                                light
                                onPress={()=>this.setState({showPassword: !this.state.showPassword})}
                                style={styles.btnShowPass}
                            >
                                <Icon name={this.state.showPassword ? 'md-eye-off' : 'md-eye'} />
                            </Button>
                        </Item>
                    </Form>
                    <View style={styles.buttonContainer}>
                        <Button rounded light block onPress={this._signInAsync} style={styles.button}>
                            <Text>Signin</Text>
                        </Button>
                        <Button rounded light block onPress={()=>this.props.navigation.navigate('SignUp')} style={styles.button}>
                            <Text>Signup</Text>
                        </Button>
                    </View>
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
    content: {
        width: "95%",
    },
    form: {
        marginVertical: 5
    },
    item: {
        borderColor: "#fff",
        marginTop: 5
    },
    input: {
        color: "#000",
    },
    buttonContainer: {
        width: "50%",
        alignSelf: "center"
    },
    button: {
        marginTop: 5
    },
    btnShowPass: {
        marginRight: 5
    }
})