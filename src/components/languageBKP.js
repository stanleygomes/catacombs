import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableHighlight, StatusBar, AsyncStorage } from 'react-native';
import { Container, Header, Title, Left, Right, Body, Card, CardItem, Content, Button, List, ListItem, Icon, Spinner } from 'native-base';

import general from '../theme/general';
import customList from '../theme/custom-list';

export default class Language extends Component {

    constructor() {
        super();

        this.bibleData = [];
        this.books = [];

        this.state = {
            loading: 0
        }
    }

    _navigate(name, obj) {
        this.props.navigator.replace({
            name: name,
            passProps: obj
        });
    }

    selectIdiom (value) {

        this.setState({loading: '1'});

        if(value != ''){
            var v;
            if(value == 'db_ptbr')
                v = require('../database/db_ptbr.json');
            if(value == 'db_de')
                v = require('../database/db_de.json');
            if(value == 'db_en')
                v = require('../database/db_en.json');
            if(value == 'db_es')
                v = require('../database/db_es.json');
            if(value == 'db_fr')
                v = require('../database/db_fr.json');

            this.bibleData = v;

            for (var i = 0; i < this.bibleData.length; i++){
                this.books.push(this.bibleData[i].book);
            }

            AsyncStorage.setItem('bible', JSON.stringify(this.bibleData)).then(() => {
                alert(123)
                AsyncStorage.setItem('books', JSON.stringify(this.books)).then(() => {
                    this.setState({loading: '0'});
                    alert('123')
                }).done();
            }).done();
        }
        else
            this._navigate('Language', {});

        // this.setState({'in': true});
        // AsyncStorage.setItem('intro', '2');
        // AsyncStorage.setItem('language', id);
        // this._navigate('Book', {})
    }

    render () {

        var languages = [
            {
                id: 'db_ptbr',
                title: 'Português | Portuguese',
                subTitle: 'Almeida Revisada Imprensa Bíblica',
                image: require('../assets/img/flag-brazil.png')
            },
            {
                id: 'db_de',
                title: 'Alemão | German',
                subTitle: 'Schlachter',
                image: require('../assets/img/flag-germany.png')
            },
            {
                id: 'db_en',
                title: 'Inglês | English',
                subTitle: 'Basic English',
                image: require('../assets/img/flag-english.png')
            },
            {
                id: 'db_es',
                title: 'Espanhol | Spanish',
                subTitle: 'Reina Valera',
                image: require('../assets/img/flag-spain.png')
            },
            {
                id: 'db_fr',
                title: 'Francês | French',
                subTitle: 'Le Bible de I\'Épée',
                image: require('../assets/img/flag-france.png')
            },
        ];

        return (
            <Container style={{flex: 1}} backgroundColor="#fff">

                <Header noShadow={true} transparent style={general.header}>
                    <Body style={{marginLeft:15}}>
                        <Title style={general.headerText}>Escolha uma versão</Title>
                    </Body>
                </Header>

                <Content>

                    {this.state.loading == '1' ?
                        <View style={general.loading}>
                            <Spinner color="#dd5e5a" />
                        </View>
                    :
                        null
                    }

                    <View style={customList.container}>

                        <List bordered={false} style={general.noAnyThing}>
                        {languages.map(function(language, index){
                            return (
                                <ListItem key={index} style={general.noAnyThing} onPress={ function(){ this.selectIdiom(language.id) }.bind(this)}>
                                    <View style={customList.line}>
                                        <View style={customList.contentImage}>
                                            <Image style={customList.image} source={language.image} />
                                        </View>
                                        <View style={customList.contentText}>
                                            <Text style={customList.title}>{language.title}</Text>
                                            <Text style={customList.subTitle}>{language.subTitle}</Text>
                                        </View>
                                    </View>
                                </ListItem>
                            );
                        }, this)}
                        </List>

                    </View>

                </Content>

                <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            </Container>
        );
    }
}
