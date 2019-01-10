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
import { Container, Icon, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default class NotificationsScreen extends Component {

    data = [
        {
            name: "Kẻ Đánh Cắp Lễ Giáng Sinh - The Grinch",
            poster: "https://s3img.vcdn.vn/mobile/123phim/2018/10/ke-danh-cap-le-giang-sinh-the-grinch-15403525831650_220x310.jpg",
            description: "Là bộ phim hoạt hình thứ 8 được sản xuất hoàn toàn bởi Illumination"
        },
        {
            name: "Nữ Siêu Nhân - Supergirl",
            poster: "https://img-www.tf-cdn.com/show/2/supergirl.jpeg",
            description: "Supergirl phần 4 tiếp tục kể về cô gái 24 tuổi Kara Zor - El, cô chị họ của Superman."
        },
        {
            name: "Cuộc Đời Của Tôi-It's My Life",
            poster: "http://image.phimmoi.net/film/7794/poster.medium.jpg",
            description: "Cuộc Đời Của Tôi đây là câu chuyện về một người đàn ông từ vùng nông thôn..."
        },
    ]

    render() {
        return (
            <Container>
                <StatusBar backgroundColor="#fff" />
                <View style={styles.topBar}>
                    <Button transparent onPress={()=>this.props.navigation.goBack()}>
                        <Icon name='ios-arrow-back' style={{color: '#000'}} />
                    </Button>
                    <Text style={styles.title}>Notifications</Text>
                </View>
                <Content style={styles.content}>
                    <List>
                        {
                            this.data.map((film, index)=>(
                                <ListItem thumbnail key={index}>
                                    <Left>
                                        <Thumbnail square source={{ uri: film.poster }} />
                                    </Left>
                                    <Body>
                                        <Text>{film.name}</Text>
                                        <Text note numberOfLines={1}>{film.description}...</Text>
                                    </Body>
                                    <Right>
                                        <Button transparent>
                                        <Text>View</Text>
                                        </Button>
                                    </Right>
                                </ListItem>
                            ))
                        }
                    </List>
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
