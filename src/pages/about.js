import React, { Component } from 'react';
import { Linking, View, Text, Image, TouchableHighlight, StatusBar, AsyncStorage } from 'react-native';
import { Container, Header, Right, H1, H2, H3, Left, Body, Title, Content, Button, Icon } from 'native-base';

import form from '../theme/form';
import general from '../theme/general';

export default class About extends Component {

    constructor(props) {
        super(props);
    }

    goBack() {
        this.props.navigator.pop();
    }

    openFeedback() {
        Linking.openURL('mailto:feedback@abibliasagrada.xyz?subject=FeedBack');
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
                        <Title style={general.headerText}>Sobre</Title>
                    </Body>
                    <Right></Right>
                </Header>

                <Content style={general.content}>

                    <View style={form.center}>
                        <Image style={form.logo} source={require('../assets/img/icon-app.png')} />
                    </View>

                    <View style={form.center}>
                        <H1 style={general.marginTop15}>A BÍBLIA SAGRADA</H1>

                        <H2 style={general.marginTop15}>v1.0</H2>
                        <H3 style={general.marginTop15}>Este projeto só foi possível graças aos dados da bíblia reunidos no github do Thiago Bodruk.</H3>

                        <Text style={general.marginTop15}>github.com/thiagobodruk/biblia</Text>

                        <TouchableHighlight style={general.marginTop15} onPress={() => this.openFeedback()}>
                            <Button>
                                <Text>ENVIAR FEEDBACK</Text>
                            </Button>
                        </TouchableHighlight>
                    </View>

                </Content>

                <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            </Container>
        );
    }
}
