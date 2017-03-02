import React, { Component } from 'react';
import { Share, BackAndroid, Image, View, Text, StyleSheet, TouchableHighlight, StatusBar, AsyncStorage } from 'react-native';
import { Fab, Container, Header, Title, Subtitle, Thumbnail, Left, Right, Body, Card, CardItem, Content, Button, Icon, List, ListItem } from 'native-base';

import general from '../theme/general';
import customList from '../theme/custom-list';

import Navigation from '../components/navigation';

export default class Feed extends Component {

    constructor(props) {
        super(props);

        this.verses = [];

        this.state = {
            book: '',
            active: true,
            shareActive: -1,
            verses: [],
            chapterLabel: '',
            shareText: ''
        };
    }

    _navigate(name, obj) {
        this.props.navigator.push({
            name: name,
            passProps: obj
        });
    }

    async componentDidMount() {

// fetch('https://api.instagram.com/v1/media/search?lat=${lat}&lng=${lng}&distance=${distance}&client_id=${INSTAGRAM_CLIENT_ID}`)
//       .then((response) => response.json())
//       .then((responseData) => {
//         this.setState({
//           dataSource: this.state.dataSource.cloneWithRows(responseData.data),
//           loaded: true
//         });
//       })
//       .done();
        
    }

    render () {
        return (
            <Container style={{flex: 1}} backgroundColor="#fff">

                <Header noShadow={true} transparent style={{backgroundColor: '#fff'}}>
                    <Body>
                        <Title style={{color: '#444'}}>Feed</Title>
                    </Body>
                </Header>

                <Content>

                    <View style={customList.container}>
                        <Card>
                              <CardItem cardBody>
                                  <Image style={{width: null, height: 200, resizeMode: 'cover'}} source={require('../assets/img/icon-app-square.jpg')}/>
                              </CardItem>
                              <CardItem content>
                                  <Text>Wait a minute. Wait a minute, Doc. Uhhh...
                                  Are you telling me that you built a time machine... out of a DeLorean?!
                                  Whoa. This is heavy.</Text>
                              </CardItem>
                              <CardItem>
                                  <Left>
                                      <Button transparent>
                                          <Icon active name="thumbs-up" />
                                          <Text>12 Likes</Text>
                                      </Button>
                                  </Left>
                                <Body>
                                    <Button transparent>
                                        <Icon active name="chatbubbles" />
                                        <Text>4 Comments</Text>
                                    </Button>
                                </Body>
                                <Right>
                                    <Text>11h ago</Text>
                                </Right>
                            </CardItem>
                       </Card>
                    </View>

                </Content>

                <View>
                    <Navigation navigator={this.props.navigator} activePage="Feed" />
                </View>

                <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            </Container>
        );
    }
}
