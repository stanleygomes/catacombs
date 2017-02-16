import React, { Component } from 'react';
import { BackAndroid, View, Text, Image, StyleSheet, TouchableHighlight, StatusBar, AsyncStorage } from 'react-native';
import { Fab, Container, Header, Title, Left, Right, Body, Card, CardItem, Content, Button, Icon, List, ListItem } from 'native-base';

import general from '../theme/general';
import customList from '../theme/custom-list';

export default class Verse extends Component {

    constructor(props) {
        super(props);

        this.verses = [];

        this.state = {
            book: '',
            active: true,
            verses: []
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

    componentDidMount() {
        if(typeof this.props.chapter !== 'undefined'){

        	this.versesList = this.props.verses;

            for(var verse in this.versesList){
            	this.versesList = this.versesList[verse]
            }

            for(var verse in this.versesList){
                this.verses.push([this.versesList[verse]]);
            }

            this.setState({
        		chapter: this.props.chapter,
        		verses: this.verses,
        		book: this.props.book
            });
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
                        <Title style={general.headerText}>{this.state.book} - Cap. {this.state.chapter}</Title>
                    </Body>
                </Header>

                <Content style={{marginLeft: 15}}>

                    <View style={customList.container}>

                        <Card bordered={false} style={general.noAnyThing}>
                            {this.state.verses.map(function (verse, index){
                            return (
                                <CardItem button key={index} style={general.noAnyThing}>
                                    <View style={customList.line}>
                                        <View style={customList.contentLeft}>
                                            <Text style={[customList.titleLeft, verse.focus]}>{index + 1}. {verse}</Text>
                                        </View>
                                    </View>
                                </CardItem>
                            );
                            }, this)}
                        </Card>

                    </View>

                </Content>

                <View style={{paddingLeft:15, paddingRight: 15, paddingBottom: 15}}>
                    <Button block rounded primary>
                        <Icon name="share" />
                        <Text>COMPARTILHAR VERSÍCULO</Text>
                    </Button>
                </View>

                <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            </Container>
        );
    }
}
