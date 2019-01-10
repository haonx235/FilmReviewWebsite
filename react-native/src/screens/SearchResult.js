import React, { Component } from 'react'
import {
    View,
    StatusBar,
    Dimensions,
    StyleSheet
} from 'react-native'
import { connect } from "react-redux";
import { Container, Icon, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import FilmThumbnail from '../components/FilmThumbnail'

const screenHeight = Dimensions.get("window").height
const screenWidth = Dimensions.get("window").width

class SearchResult extends Component {

    _showFilmDetail = (film) => {
        this.props.navigation.navigate('FilmDetail', {film});
    };

    render() {
        return (
            <Container>
                <StatusBar backgroundColor="#fff" />
                <View style={styles.topBar}>
                    <Button transparent onPress={()=>this.props.navigation.goBack()}>
                        <Icon name='ios-arrow-back' style={{color: '#000'}} />
                    </Button>
                    <Text style={styles.title}>Results</Text>
                </View>
                <View style={styles.content}>
                    {
                        this.props.topFilms.topFilms.map((film, index)=>(
                            <FilmThumbnail
                                key={index}
                                src={film.poster}
                                name={film.name}
                                onPress={()=>this._showFilmDetail(film)}
                                style={styles.film}
                            />
                        ))
                    }
                </View>
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
        flexDirection: "row",
        flexWrap: "wrap"
    },
    film: {
        width: screenWidth/3 - 10
    }
})

const mapStateToProps = (state) => ({
    topFilms: state.topFilmsData,
    genres: state.homeGenresData,
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
