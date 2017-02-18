import React, { Component } from 'react';
import { Share, BackAndroid, View, Text, Image, StyleSheet, TouchableHighlight, StatusBar, AsyncStorage } from 'react-native';
import { Fab, Container, Header, Title, Subtitle, Left, Right, Body, Card, CardItem, Content, Button, Icon, List, ListItem } from 'native-base';

import general from '../theme/general';
import customList from '../theme/custom-list';

export default class Verse extends Component {

    constructor(props) {
        super(props);

        this.verses = [];

        this.state = {
            book: '',
            active: true,
            shareActive: -1,
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

    checkVerse(index) {
        if(this.state.shareActive == index)
            this.setState({shareActive: -1});
        else
            this.setState({shareActive: index});
    }

    shareVerse() {
        let v = this.state.book + ' capítulo ' + this.state.chapter + ' versículo ' + this.state.shareActive + ':' + this.state.verses[this.state.shareActive];
        if(typeof this.state.verses[this.state.shareActive] !== 'undefined'){
            Share.share({
                message: v.toString()
            },
            {
                dialogTitle: 'Compartilhar versículo',
            })
            .then(this._showResult)
            .catch((error) => this.setState({result: 'error: ' + error.message}));
        }
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

                <Header noShadow={true} transparent style={{backgroundColor: this.state.shareActive >= 0 ? '#EF5350' : '#fff'}}>
                    <Left>
                        <Button transparent onPress={() => this.goBack()}>
                            <Icon name='ios-arrow-back' style={{color: this.state.shareActive >= 0 ? '#fff' : '#444'}}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color: this.state.shareActive >= 0 ? '#fff' : '#444'}}>{this.state.book}</Title>
                        <Subtitle style={{color: this.state.shareActive >= 0 ? '#fff' : '#444'}}>Capítulo {this.state.chapter}</Subtitle>
                    </Body>
                    <Right>
                        {
                            this.state.shareActive >= 0 ?
                        
                        <Button transparent onPress={() => this.checkVerse(-1)}>
                            <Icon name='md-close' style={{color: this.state.shareActive >= 0 ? '#fff' : '#444'}}/>
                        </Button>

                        :

                        null

                        }
                    </Right>
                </Header>

                <Content>

                    <View style={customList.container}>

                        <Card bordered={false} style={general.noAnyThing}>
                            {this.state.verses.map(function (verse, index){
                            return (
                                <CardItem button key={index} style={general.noAnyThing} onPress={ function(){ this.checkVerse(index) }.bind(this)}>
                                    {
                                        this.state.shareActive == index ?

                                    <View style={[customList.line, customList.cardFocus]}>
                                        <View style={customList.contentLeft}>
                                            <Text style={[customList.titleLeft, customList.cardFocusText]}>{index + 1}. {verse}</Text>
                                        </View>
                                    </View>

                                        :

                                    <View style={customList.line}>
                                        <View style={customList.contentLeft}>
                                            <Text style={customList.titleLeft}>{index + 1}. {verse}</Text>
                                        </View>
                                    </View>

                                    }
                                </CardItem>
                            );
                            }, this)}
                        </Card>

                    </View>

                </Content>

                {
                    this.state.shareActive >= 0 ?

                <View style={{paddingTop:15, paddingLeft:15, paddingRight: 15, paddingBottom: 15}}>
                    <Button block rounded style={{backgroundColor: '#EF5350'}} onPress={() => this.shareVerse()}>
                        <Text>COMPARTILHAR VERSÍCULO</Text>
                    </Button>
                </View>

                :

                null
                }

                <StatusBar backgroundColor={this.state.shareActive >= 0 ? '#EF5350' : '#fff'} barStyle="dark-content" />

            </Container>
        );
    }
}
