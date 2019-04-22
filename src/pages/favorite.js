import React, { Component } from 'react';
import { Share, BackAndroid, View, Text, Image, StyleSheet, TouchableHighlight, StatusBar, AsyncStorage } from 'react-native';
import { Fab, Container, Header, Title, Subtitle, Left, Right, Body, Card, CardItem, Content, Button, Icon, List, ListItem } from 'native-base';

import general from '../theme/general';
import customList from '../theme/custom-list';

import Navigation from '../components/navigation';

export default class Favorite extends Component {

    constructor(props) {
        super(props);

        this.verses = [];

        this.chapterLabels = [];
        this.chapterLabels['db_ptbr'] = 'Capítulo';
        this.chapterLabels['db_de'] = 'Kapitel';
        this.chapterLabels['db_en'] = 'Chapter';
        this.chapterLabels['db_es'] = 'Capítulo';
        this.chapterLabels['db_fr'] = 'Chapitre';

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

    checkVerse(index, text) {
        if(this.state.shareActive == index)
            this.setState({shareActive: -1});
        else
            this.setState({shareActive: index, shareText: text});
    }

    shareVerse() {
        let v = this.state.shareText;
        if(typeof v !== 'undefined'){
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

    removeFavorite() {
        let temp = []
        for(var i = 0; i < this.state.verses.length; i++){
            if(i != this.state.shareActive)
                temp.push(this.state.verses[i]);
        }
        this.setState({verses: temp, shareActive: -1})

        AsyncStorage.setItem('favorites', JSON.stringify(temp));
    }

    async componentDidMount() {
        try {
            AsyncStorage.getItem('language').then((value) => {
                if(value != ''){
                    AsyncStorage.getItem('favorites').then((fav) => {
                        if(!fav){
                            // alert('nada ainda')
                        }
                        else{
                            let favorites = JSON.parse(fav);

                            this.setState({
                                verses: favorites,
                                chapterLabel: this.chapterLabels[value]
                            });
                        }
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

                <Header noShadow={true} transparent style={{backgroundColor: this.state.shareActive >= 0 ? '#EF5350' : '#fff'}}>
                    {
                        this.state.shareActive >= 0 ?
                        (
                    <Left>
                        <Button transparent onPress={() => this.checkVerse(-1)}>
                            <Icon name='md-close' style={{color: this.state.shareActive >= 0 ? '#fff' : '#444'}}/>
                        </Button>
                    </Left>
                        )

                        :

                        null
                    }
                    <Body>
                        <Title style={{color: this.state.shareActive >= 0 ? '#fff' : '#444'}}>Favoritos</Title>
                    </Body>
                    <Right>
                        {
                            this.state.shareActive >= 0 ?
                            (
                        <View>
                            <Button transparent onPress={() => this.removeFavorite()}>
                                <Icon name='ios-trash-outline' style={{color: '#fff'}}/>
                            </Button>
                        </View>
                            )

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
                                <CardItem button key={index} style={general.noAnyThing} onPress={ function(){ this.checkVerse(index, verse.book + ' - ' + this.state.chapterLabel + ' ' + verse.chapter + ' - ' + verse.verseN + ' : ' + verse.verse) }.bind(this)}>
                                    {
                                        this.state.shareActive == index ?

                                    <View style={[customList.line, customList.cardFocus]}>
                                        <View style={customList.contentLeft}>
                                            <Text style={customList.titleLeft}>{verse.book} - {this.state.chapterLabel} {verse.chapter} - {verse.verseN} : {verse.verse} </Text>
                                        </View>
                                    </View>

                                        :

                                    <View style={customList.line}>
                                        <View style={customList.contentLeft}>
                                            <Text style={customList.titleLeft}>{verse.book} - {this.state.chapterLabel} {verse.chapter} - {verse.verseN} : {verse.verse} </Text>
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
                        <Text style={general.colors.clWhite}>COMPARTILHAR VERSÍCULO</Text>
                    </Button>
                </View>

                :

                null
                }


                <View>
                    <Navigation navigator={this.props.navigator} activePage="Favorite" />
                </View>

                <StatusBar backgroundColor={this.state.shareActive >= 0 ? '#EF5350' : '#fff'} barStyle="dark-content" />

            </Container>
        );
    }
}
