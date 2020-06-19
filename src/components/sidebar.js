import React, { Component } from 'react';
import { Navigator, View, Text, AsyncStorage, Share } from 'react-native';
import { Content, List, ListItem } from 'native-base';

import drawer from '../theme/drawer';

export default class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    changeLanguage() {
        AsyncStorage.setItem('language', '');
        this._navigate('Language', {});
    }

    shareApp() {

        Share.share({
            message: 'Leia a Bíblia com applicativo \'A Bíblia Sagrada\'. Baixe no google play em https://play.google.com/store/apps/details?id=com.PiguinSoft.CafeRacer'
        },
        {
            dialogTitle: 'Compartilhar Aplicativo',
        })
        .then(this._showResult)
        .catch((error) => this.setState({result: 'error: ' + error.message}));
    }

    _navigate(name, obj) {
        this.props.navigator.replace({
            name: name,
            passProps: obj
        });
    }

    render () {

        return (
            <Content>
                <List>
                    <ListItem button onPress={() => this._navigate('Book')} >
                        <Text style={drawer.itemText}>Livros</Text>
                    </ListItem>
                    <ListItem button onPress={() => this.changeLanguage()} >
                        <Text style={drawer.itemText}>Trocar idioma</Text>
                    </ListItem>
                    <ListItem button onPress={() => this._navigate('Notifications')} >
                        <Text style={drawer.itemText}>Leitura Diária</Text>
                    </ListItem>
                    <ListItem button onPress={() => this.shareApp()} >
                        <Text style={drawer.itemText}>Compartilhe o App</Text>
                    </ListItem>
                    <ListItem button onPress={() => this._navigate('About')} >
                        <Text style={drawer.itemText}>Sobre</Text>
                    </ListItem>
                </List>
            </Content>
        );
    }
}
