import React, { Component } from 'react';
import { TextInput, Share, View, Text, Image, StyleSheet, TouchableHighlight, StatusBar, AsyncStorage } from 'react-native';
import { Container, Header, Title, Left, Right, Body, Item, Input, Card, CardItem, List, ListItem, Content, Button, Icon, Spinner } from 'native-base';

import general from '../theme/general';
import customList from '../theme/custom-list';

import Navigation from '../components/navigation';

export default class Book extends Component {

    constructor(props) {
        super(props);

        this.searchBarInput = {};

        this.bibleData = [];
        this.tempBooks = [];
        this.state = {
            books: [],
            tempBooks: [],
            loading: 'Carregando...',
            bookKey: ''
        }

        AsyncStorage.getItem('language').then((value) => {

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
                    this.tempBooks.push(this.bibleData[i].book);
                }
                this.setState({loading: ''});
                this.setState({books: this.tempBooks});
                this.setState({tempBooks: this.tempBooks});
            }
            else
                this._navigate('Language', {})
        }).done();
    }

    loadChapter(i) {
        this._navigate('Chapter', {book: i, content: this.bibleData[i]});
    }

    setRoot(name, obj) {
        this.props.navigator.replace({
            name: name,
            passProps: obj
        });
    }

    _navigate(name, obj) {
        this.props.navigator.push({
            name: name,
            passProps: obj
        });
    }

    filterBooks(text) {
        this.setState({bookKey: text}, () => {

            var filtered = [];
            for (var k = 0; k < this.state.tempBooks.length; ++k) {

                var item = this.state.tempBooks[k].replace(/[^a-zA-Z]/g, ""),
                    itemBKP = this.state.tempBooks[k],
                    key = this.state.bookKey.replace(/[^a-zA-Z]/g, ""),
                    expression = new RegExp(key, 'gi');

                if (item.match(expression))
                    filtered.push(itemBKP);
            }

            this.setState({books: filtered});
        });
    }

    render () {

        return (
            <Container style={{flex: 1}} backgroundColor="#fff">

                <View style={{ padding: 10, flexDirection: 'row', backgroundColor: '#f2f2f2' }}>
                    <View style={{ flex: 1 }}>
                        <Item style={{borderBottomWidth: 0}}>
                            <Icon style={{marginLeft: 10}} name="ios-search" />
                            <Input placeholder="Livros" onChangeText={(text) => this.filterBooks(text)} value={this.state.bookKey}/>
                        </Item>
                    </View>
                </View>

                <Content style={{flex: 1}}>

                    {this.state.loading ?
                        <View style={general.loading}>
                            <Spinner color="#dd5e5a" />
                        </View>
                    :
                        null
                    }

                    <View style={customList.container}>

                        <Card bordered={false} style={general.noAnyThing}>
                            {this.state.books.map(function (book, index){
                            return (
                                <CardItem button key={index} style={general.noAnyThing} onPress={ function(){ this.loadChapter(index) }.bind(this)}>
                                    <View style={customList.line}>
                                        <View style={customList.contentLeft}>
                                            <Text style={customList.titleLeft}>{book}</Text>
                                        </View>
                                    </View>
                                </CardItem>
                            );
                            }, this)}
                        </Card>

                    </View>

                </Content>

                <View>
                    <Navigation navigator={this.props.navigator} activePage="Book" />
                </View>

                <StatusBar backgroundColor="#f2f2f2" barStyle="dark-content" />

            </Container>
        );
    }
}

    // menuOptions(option) {

    //     if(option == 'about'){
    //         this._navigate('About', {});
    //     }
    //     if(option == 'license'){
    //         this._navigate('License', {});
    //     }
    //     if(option == 'notification'){
    //         this._navigate('Notification', {});
    //     }
    //     if(option == 'language'){
    //         AsyncStorage.setItem('language', '');
    //         this.setRoot('Language', {});
    //     }
    //     if(option == 'share'){
    //         Share.share({
    //             message: 'Leia a Bíblia com applicativo \'A Bíblia Sagrada\'. Baixe no google play em https://play.google.com/store/apps/details?id=com.PiguinSoft.CafeRacer'
    //         },
    //         {
    //             dialogTitle: 'Compartilhar Aplicativo',
    //         })
    //         .then(this._showResult)
    //         .catch((error) => this.setState({result: 'error: ' + error.message}));
    //     }
    // }

// import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';
                // <MenuContext style={{ flex: 1 }}>
                        // <Menu onSelect={(value) => this.menuOptions(value)}>
                        //     <MenuTrigger>
                        //         <Icon style={{marginLeft: 20, marginRight: 5, marginTop: 10}} name="md-more" />
                        //     </MenuTrigger>
                        //     <MenuOptions>
                        //         <MenuOption value={'language'}>
                        //             <Text style={{fontSize: 20}}>Trocar idioma</Text>
                        //         </MenuOption>
                        //         <MenuOption value={'notification'}>
                        //             <Text style={{fontSize: 20}}>Leitura Diária</Text>
                        //         </MenuOption>
                        //         <MenuOption value={'share'}>
                        //             <Text style={{fontSize: 20}}>Compartilhe o App</Text>
                        //         </MenuOption>
                        //         <MenuOption value={'license'}>
                        //             <Text style={{fontSize: 20}}>Licença</Text>
                        //         </MenuOption>
                        //         <MenuOption value={'about'}>
                        //             <Text style={{fontSize: 20}}>Sobre</Text>
                        //         </MenuOption>
                        //     </MenuOptions>
                        // </Menu>
                // </MenuContext>
