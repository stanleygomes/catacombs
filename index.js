import React, { Component } from 'react';
import { AppRegistry, BackAndroid, Navigator, AsyncStorage } from 'react-native';
import { Spinner, Container, Content } from 'native-base';

import Intro from './src/pages/intro';
import Language from './src/pages/language';
import Chapter from './src/pages/chapter';
import Verse from './src/pages/verse';
import Book from './src/pages/book';
import About from './src/pages/about';
import License from './src/pages/license';
import Notification from './src/pages/notification';

var _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
    if(_navigator.getCurrentRoutes().length === 1)
        return false;

    _navigator.pop();

    return true;
});

export default class bible extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded : 0,
            intro: 0,
            language: 0
        }

        //intro types
        // 0: go intro
        // 1: go languages
        // 2: go home

        AsyncStorage.getItem('intro').then((value) => {
            if(value == '1')
                this.setState({intro : 1});
            else if(value == '2')
                this.setState({intro : 2});
            else
                this.setState({intro : 0});

            this.setState({loaded : 1});
        }).done();
    }

    renderScene(route, navigator) {
        _navigator = navigator;

        if(route.name == 'Intro')
            return <Intro navigator={navigator} {...route.passProps}/>
        if(route.name == 'Language')
            return <Language navigator={navigator} {...route.passProps}/>
        if(route.name == 'About')
            return <About navigator={navigator} {...route.passProps}/>
        if(route.name == 'License')
            return <License navigator={navigator} {...route.passProps}/>
        if(route.name == 'Notification')
            return <Notification navigator={navigator} {...route.passProps}/>
        if(route.name == 'Book')
            return <Book navigator={navigator} {...route.passProps}/>
        if(route.name == 'Chapter')
            return <Chapter navigator={navigator} {...route.passProps}/>
        if(route.name == 'Verse')
            return <Verse navigator={navigator} {...route.passProps}/>
    }

    render() {
        if(this.state.loaded == 0)
            return (
                <Container>
                    <Content>
                        <Spinner color="#dd5e5a" />
                    </Content>
                </Container>
            );
        else {
            if(this.state.intro == 1){
                return (
                    <Navigator initialRoute={{ name: 'Language' }} renderScene={ this.renderScene } />
                );
            }
            else if(this.state.intro == 2){
                return (
                    <Navigator initialRoute={{ name: 'Book' }} renderScene={ this.renderScene } />
                );
            }
            else{
                return (
                    <Navigator initialRoute={{ name: 'Intro' }} renderScene={ this.renderScene } />
                );
            }
        }
    }
}
