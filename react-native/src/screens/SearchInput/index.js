import React, { Component } from 'react'
import {
    Animated,
    View,
    StatusBar,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet
} from 'react-native'
import { Container, Icon, Content, Form, Item, Picker, Text, Input, Button } from 'native-base';

export default class NotificationsScreen extends Component {

    state = {
        selected1: "key0",
        selected2: "key0",
        selected3: "key0",
        selected4: "key0",
    }

    render() {
        return (
            <Container>
                <StatusBar backgroundColor="#fff" />
                <View style={styles.topBar}>
                    <Button transparent onPress={()=>this.props.navigation.goBack()}>
                        <Icon name='ios-arrow-back' style={{color: '#000'}} />
                    </Button>
                    <Text style={styles.title}>Search</Text>
                </View>
                <Content style={styles.content}>
                    <Form>
                        <Item regular>
                            <Input placeholder="Keyword..." />
                        </Item>
                        <View style={{flexDirection: "row"}}>
                            <Picker
                                note
                                mode="dropdown"
                                style={{ width: 120 }}
                                selectedValue={this.state.selected1}
                                onValueChange={value=>this.setState({selected1: value})}
                            >
                                <Picker.Item label="Genre" value="key0" />
                                <Picker.Item label="All" value="key1" />
                                <Picker.Item label="Sci-fi" value="key2" />
                                <Picker.Item label="Action" value="key3" />
                                <Picker.Item label="Horror" value="key4" />
                                <Picker.Item label="Comedy" value="key5" />
                            </Picker>
                            <Picker
                                note
                                mode="dropdown"
                                style={{ width: 120 }}
                                selectedValue={this.state.selected2}
                                onValueChange={value=>this.setState({selected2: value})}
                            >
                                <Picker.Item label="Star" value="key0" />
                                <Picker.Item label="All" value="key1" />
                                <Picker.Item label="1-3" value="key2" />
                                <Picker.Item label="3-5" value="key3" />
                                <Picker.Item label="5-7" value="key4" />
                                <Picker.Item label="7-10" value="key5" />
                            </Picker>
                            <Picker
                                note
                                mode="dropdown"
                                style={{ width: 120 }}
                                selectedValue={this.state.selected3}
                                onValueChange={value=>this.setState({selected3: value})}
                            >
                                <Picker.Item label="Year" value="key0" />
                                <Picker.Item label="All" value="key1" />
                                <Picker.Item label="1900-1945" value="key2" />
                                <Picker.Item label="1945-1980" value="key3" />
                                <Picker.Item label="1980-2000" value="key4" />
                                <Picker.Item label="2000-now" value="key5" />
                            </Picker>
                        </View>
                        <View style={{flexDirection: "row"}}>
                            <Picker
                                note
                                mode="dropdown"
                                style={{ width: 120 }}
                                selectedValue={this.state.selected4}
                                onValueChange={value=>this.setState({selected4: value})}
                            >
                                <Picker.Item label="Sort by" value="key0" />
                                <Picker.Item label="None" value="key1" />
                                <Picker.Item label="Popular" value="key2" />
                                <Picker.Item label="Most view" value="key3" />
                            </Picker>
                            <Picker
                                note
                                mode="dropdown"
                                style={{ width: 120 }}
                                selectedValue={this.state.selected4}
                                onValueChange={value=>this.setState({selected4: value})}
                            >
                                <Picker.Item label="Sort in" value="key0" />
                                <Picker.Item label="All" value="key1" />
                                <Picker.Item label="Lastest week" value="key2" />
                                <Picker.Item label="Lastest month" value="key3" />
                                <Picker.Item label="Lastest year" value="key4" />
                            </Picker>
                        </View>
                        <Button dark style={{alignSelf: "center"}} onPress={()=>this.props.navigation.navigate('SearchResult')}><Text>Search</Text></Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}

var styles = StyleSheet.create({
    topBar: {
        top: StatusBar.currentHeight,
        flexDirection: "row",
        backgroundColor: "#fff",
        width: "100%",
        position: "absolute",
        zIndex: 2,
        elevation: 2,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
    },
    content: {
        marginTop: 70,
    }
})
