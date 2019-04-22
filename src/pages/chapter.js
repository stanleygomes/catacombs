import React, { Component } from 'react';
import { BackAndroid, View, Text, Image, StyleSheet, TouchableHighlight, StatusBar, AsyncStorage } from 'react-native';
import { Container, Header, Title, Left, Right, Body, Card, CardItem, Content, Button, Icon, List, ListItem, Spinner } from 'native-base';

import general from '../theme/general';
import customList from '../theme/custom-list';

import Firebase from "../components/Firebase";

export default class Chapter extends Component {

    constructor(props) {
        super(props);

        this.chapters = [];

        this.chapterLabels = [];
        this.chapterLabels['db_ptbr'] = 'Capítulo';
        this.chapterLabels['db_de'] = 'Kapitel';
        this.chapterLabels['db_en'] = 'Chapter';
        this.chapterLabels['db_es'] = 'Capítulo';
        this.chapterLabels['db_fr'] = 'Chapitre';

        this.state = {
            book: '',
            loading: true,
            chapters: [],
            chapterLabel: ''
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
        this._navigate('Verse', {book: this.props.book, bookName: this.state.book, chapter: index});
    }

    async componentDidMount() {
        try {
            AsyncStorage.getItem('language').then((value) => {

                if(value != ''){

                    Firebase.listen('bible/' + value + '/' + (this.props.book + 1) + '/', (chapterList) => {

                        this.chaptersList = chapterList.chapters;
                        for(var i = 0; i < this.chaptersList.length; i++){
                            this.chapters.push(i + 1);
                        }

                        this.setState({chapters: this.chapters});
                        this.setState({book: chapterList.book});
                        this.setState({loading: false});
                        this.setState({chapterLabel: this.chapterLabels[value]});
                    });
                }
            }).done();

        } catch (error) {
            // alert(error)
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
                                <CardItem button key={index} style={general.noAnyThing} onPress={ function(){ this.loadVerse(index) }.bind(this)}>
                                    <View style={customList.line}>
                                        <View style={customList.contentLeft}>
                                            <Text style={customList.titleLeft}>{this.state.chapterLabel} {chapter}</Text>
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
