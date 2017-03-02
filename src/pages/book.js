import React, { Component } from 'react';
import { TextInput, Share, View, Text, Image, StyleSheet, TouchableHighlight, StatusBar, AsyncStorage } from 'react-native';
import { Container, Header, Title, Left, Right, Body, Item, Input, Card, CardItem, List, ListItem, Content, Button, Icon, Spinner } from 'native-base';

import general from '../theme/general';
import customList from '../theme/custom-list';

import Navigation from '../components/navigation';

import Firebase from "../components/Firebase";

export default class Book extends Component {

    constructor(props) {
        super(props);

        this.searchBarInput = {};

        this.bibleData = [];
        this.tempBooks = [];
        this.state = {
            books: [],
            tempBooks: [],
            loading: true,
            bookKey: ''
        }
    }

    loadChapter(i) {
        this._navigate('Chapter', {book: i});
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

    filterBooks(key, book) {
        if(!key || key == '')
            return true;

        var book = book.replace(/[^a-zA-Z]/g, ""),
            key = key.replace(/[^a-zA-Z]/g, ""),
            expression = new RegExp(key, 'gi');

        if (book.match(expression))
            return true;

        return false;
    }

    async componentDidMount() {
        try {
            AsyncStorage.getItem('language').then((value) => {

                if(value != ''){

                    Firebase.listen('books/' + value, (bookList) => {

                        this.bibleData = bookList;

                        for (var i = 0; i < this.bibleData.length; i++){
                            this.tempBooks.push(this.bibleData[i]);
                        }

                        this.setState({loading: ''});
                        this.setState({books: this.tempBooks});
                        this.setState({tempBooks: this.tempBooks});
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

                <View style={{ padding: 10, flexDirection: 'row', backgroundColor: '#f2f2f2' }}>
                    <View style={{ flex: 1 }}>
                        <Item style={{borderBottomWidth: 0}}>
                            <Icon style={{marginLeft: 10}} name="ios-search" />
                            <Input placeholder="Livros" onChangeText={(text) => this.setState({bookKey: text})} value={this.state.bookKey}/>
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
                                    <View key={index}>
                                        {this.filterBooks(this.state.bookKey, book) ?
                                            (
                                        <CardItem button style={general.noAnyThing} onPress={ function(){ this.loadChapter(index) }.bind(this)}>
                                            <View style={customList.line}>
                                                <View style={customList.contentLeft}>
                                                    <Text style={customList.titleLeft}>{book}</Text>
                                                </View>
                                            </View>
                                        </CardItem>
                                            )

                                            :

                                            null
                                        }
                                    </View>
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
