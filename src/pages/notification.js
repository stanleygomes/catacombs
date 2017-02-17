import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StatusBar, AsyncStorage } from 'react-native';
import { Container, Header, Right, H1, H2, H3, Left, Body, Title, Content, Button, Icon } from 'native-base';

import form from '../theme/form';
import general from '../theme/general';

export default class Notification extends Component {

    constructor(props) {
        super(props);
    }

    goBack() {
        this.props.navigator.pop();
    }

    render() {

        return (
            <Container style={{flex: 1}} backgroundColor="#fff">
                <Header noShadow={true} transparent style={general.header}>
                    <Left>
                        <Button transparent onPress={() => this.goBack()}>
                            <Icon name='ios-arrow-back' style={general.headerIcon}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={general.headerText}>Leitura diária</Title>
                    </Body>
                    <Right></Right>
                </Header>

                <Content style={general.content}>



                </Content>

                <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            </Container>
        );
    }
}
