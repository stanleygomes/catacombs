import React, { Component } from 'react';
import { BackAndroid, View, Text, Image, StyleSheet, TouchableHighlight, StatusBar, AsyncStorage } from 'react-native';
import { Container, Header, Title, Left, Right, Body, Card, CardItem, Content, Button, Icon, List, ListItem } from 'native-base';

import general from '../theme/general';
import customList from '../theme/custom-list';

export default class Chapter extends Component {

    constructor(props) {
        super(props);

        this.chapters = [];

        this.state = {
            book: '',
            chapters: []
        };
    }

    _navigate(name, obj) {
        this.props.navigator.push({
            name: name,
            passProps: obj
        });
    }

    goBack() {
        this.props.navigator.pop();
    }

    loadVerse(index) {
        this._navigate('Verse', {book: this.state.book, chapter: index, verses: this.props.content.chapters[index]});
    }

    componentDidMount() {
        if(typeof this.props.content !== 'undefined'){
            this.chaptersList = this.props.content.chapters;
            for(var i = 0; i < this.chaptersList.length; i++){
                this.chapters.push(i + 1);
            }

            this.setState({chapters: this.chapters});
            this.setState({book: this.props.content.book});
        }
    }

    render () {

        return (
            <Container style={{flex: 1}} backgroundColor="#fff">

                <Header noShadow={true} transparent style={general.header}>
                    <Left>
                        <Button transparent onPress={() => this.goBack()}>
                            <Icon name='ios-arrow-back' style={general.headerIcon}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={general.headerText}>{this.state.book}</Title>
                    </Body>
                    <Right></Right>
                </Header>

                <Content>

                    {this.state.loading ?
                        <View style={general.loading}>
                            <Spinner color="#dd5e5a" />
                        </View>
                    :
                        null
                    }

                    <View style={customList.container}>

                        <Card bordered={false} style={general.noAnyThing}>
                            {this.state.chapters.map(function (chapter, index){
                            return (
                                <CardItem button key={index} style={general.noAnyThing} onPress={ function(){ this.loadVerse(chapter) }.bind(this)}>
                                    <View style={customList.line}>
                                        <View style={customList.contentLeft}>
                                            <Text style={customList.titleLeft}>Capítulo {chapter}</Text>
                                        </View>
                                    </View>
                                </CardItem>
                            );
                            }, this)}
                        </Card>

                    </View>

                </Content>

                <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            </Container>
        );
    }
}
