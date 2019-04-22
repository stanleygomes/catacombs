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
                        <Title style={general.headerText}>Licença</Title>
                    </Body>
                    <Right></Right>
                </Header>

                <Content style={general.content}>

                    <View style={form.center}>
                        <Image style={form.logo} source={require('../assets/img/icon-app.png')} />
                    </View>

                    <View style={form.center}>
                        <H3 style={general.marginTop15}>
                            Este projeto é distribuído sob a licença Creative Commons BY-NC. As traduções bíblicas deste projeto são de autoria e propriedade intelectual da Sociedade Bíblica Internacional (NVI), da Sociedade Bíblica Trinitariana (ACF) e da Imprensa Bíblica Brasileira (AA). Todos os direitos reservados aos autores.
                        </H3>
                    </View>

                </Content>

                <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            </Container>
        );
    }
}
