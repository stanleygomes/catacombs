import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, AsyncStorage } from 'react-native';
import { Container, Header, Title, Card, CardItem, Content, Button, Icon } from 'native-base';

import Swiper from 'react-native-swiper';

import swiper from '../theme/swiper';

export default class Intro extends Component {

    constructor() {
        super();
    }

    skip() {
        AsyncStorage.setItem('intro', '1');
        this._navigate('Language', {});
    }

    _navigate(name, obj) {
        this.props.navigator.replace({
            name: name,
            passProps: obj
        });
    }

    render () {
        return (
            <Container backgroundColor="#fff">

                <View>
                    <StatusBar backgroundColor="#fff" barStyle="dark-content" />
                </View>

                <Button light transparent style={swiper.textTopButton} onPress={() => this.skip()}>
                    <Text style={swiper.textTop}>PULAR</Text>
                </Button>

                <Swiper style={swiper.wrapper} showsButtons={false} loop={false} activeDotColor="#f44336" paginationStyle={swiper.paginationStyle}>
                    <View style={swiper.slide}>
                        <Image style={swiper.image} source={require('../assets/img/icon-app.png')} />
                        <Text style={swiper.text}>A Bíblia Sagrada</Text>
                    </View>
                    <View style={swiper.slide}>
                        <Image style={swiper.image} source={require('../assets/img/intro-search.png')} />
                        <Text style={swiper.text}>Pesquisa fácil</Text>
                    </View>
                    <View style={swiper.slide}>
                        <Image style={swiper.image} source={require('../assets/img/intro-lecture.png')} />
                        <Text style={swiper.text}>Modo de leitura</Text>
                    </View>
                    <View style={swiper.slide}>
                        <Image style={swiper.image} source={require('../assets/img/intro-flags.png')} />
                        <Text style={swiper.text}>Suporte a idiomas</Text>
                    </View>
                    <View style={swiper.slide}>
                        <Image style={swiper.image} source={require('../assets/img/intro-bell.png')} />
                        <Text style={swiper.text}>Leitura diária</Text>
                        <Button block light transparent onPress={() => this._navigate('Language', {})}>
                            <Text style={[swiper.text, swiper.textButton]} onPress={() => this.skip()}>INICIAR</Text>
                        </Button>
                    </View>
                </Swiper>

            </Container>
        );
    }
}
