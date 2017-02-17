import React, { Component } from 'react';
import { AppRegistry, BackAndroid, Navigator, AsyncStorage } from 'react-native';
import { Drawer } from 'native-base';

import Sidebar from './src/components/sidebar';

import drawer from './src/theme/drawer';

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
            language: 0,
            drawer: false
        }

        AsyncStorage.getItem('language').then((value) => {
            if(value && value != '')
                this.setState({language: 1})

                AsyncStorage.getItem('intro').then((value) => {
                    if(value == '1')
                        this.setState({intro : 1});
                    this.setState({loaded : 1});
                }).done();
        }).done();
    }

    // openDrawer() {
    //     this.DRAWER.open();
    // }

    componentDidMount() {
        // this.context.drawer.open();
        if(this.DRAWER)
            this.DRAWER.open();
        // else
        //     alert('not')
    }

    renderScene(route, navigator) {
        _navigator = navigator;

        closeDrawer = () => {
            this.setState({drawer: false})
            // this.refs['DRAWER_REF'].closeDrawer();
            // this._drawer._root.close()
        };
        // openDrawer = () => {
        //     this._drawer._root.open()
        // };

        if(route.name == 'Intro' || route.name == 'Language'){
            if(route.name == 'Intro')
                return <Intro navigator={navigator} {...route.passProps}/>
            if(route.name == 'Language')
                return <Language navigator={navigator} {...route.passProps}/>
        }
        else{
            return (
                <Drawer onClose={() => this.closeDrawer()} ref={'DRAWER_REF'} styles={drawer} tapToClose={true} panCloseMask={0.2} closedDrawerOffset={-3} openDrawerOffset={0.2} content={

                    <Sidebar navigator={navigator} {...route.passProps} />

                } tweenHandler={(ratio) => ({main: { opacity:(2-ratio)/2 }})}>

                {route.name == 'About' ? (<About navigator={navigator} {...route.passProps}/>) : null }
                {route.name == 'License' ? (<License navigator={navigator} {...route.passProps}/>) : null }
                {route.name == 'Notification' ? (<Notification navigator={navigator} {...route.passProps}/>) : null }
                {route.name == 'Book' ? (<Book navigator={navigator} {...route.passProps}/>) : null }
                {route.name == 'Chapter' ? (<Chapter navigator={navigator} {...route.passProps}/>) : null }
                {route.name == 'Verse' ? (<Verse navigator={navigator} {...route.passProps}/>) : null }

                </Drawer>
            );
        }
    }

    render() {

        if(this.state.loaded == 0)
            return null;
        else {
            if(this.state.intro == 0){
                return (
                    <Navigator initialRoute={{ name: 'Intro' }} renderScene={ this.renderScene } />
                );
            }
            else{
                if(this.state.language == 1){
                    return (
                        <Navigator initialRoute={{ name: 'Book' }} renderScene={ this.renderScene } />
                    );
                }
                else{
                    return (
                        <Navigator initialRoute={{ name: 'Language' }} renderScene={ this.renderScene } />
                    );
                }
            }
        }
    }
}
