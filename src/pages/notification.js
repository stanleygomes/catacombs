import React, { Component } from 'react';
import { View, Text, Share, Image, TouchableHighlight, StatusBar, AsyncStorage } from 'react-native';
import { Switch, Container, Header, Right, H1, H2, H3, Left, Body, Title, Content, Button, Icon, List, ListItem } from 'native-base';

import PushNotification from 'react-native-push-notification';

import Navigation from '../components/navigation';

import form from '../theme/form';
import general from '../theme/general';

export default class Notification extends Component {

    constructor(props) {
        super(props);

        this.state = {
            notificationReminder: true,
            showPage: false
        }
    }

    _navigate(name, obj) {
        this.props.navigator.push({
            name: name,
            passProps: obj
        });
    }

    goBack() {
        this.props.navigator.pop();
    }

    reminder(value) {
        if(value){
            AsyncStorage.setItem('notification', 'false');
            PushNotification.cancelAllLocalNotifications();
        }
        else{
            PushNotification.configure({
                onNotification: function(notification) {
                    console.log( 'NOTIFICATION:', notification );
                },
                senderID: '',
                popInitialNotification: true,
                requestPermissions: true,
            });

            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            tomorrow.setHours(7)
            tomorrow.setMinutes(30)
            tomorrow.setSeconds(0);

            PushNotification.localNotificationSchedule({
                message: "Seu lembrete para ler a bíblia está aqui.",
                date: tomorrow,
                repeatType: 'day'
            });

            AsyncStorage.setItem('notification', 'true');
        }

        this.setState({notificationReminder: !this.state.notificationReminder});
    }

    componentDidMount() {
        AsyncStorage.getItem('notification').then((value) => {
            if(value && value == 'true')
                this.setState({notificationReminder: true});
            else
                this.setState({notificationReminder: false});
            this.setState({showPage: true});
        }).done();
    }

                    // <Left></Left>
// if(option == 'share'){
//             Share.share({
//                 message: 'Leia a Bíblia com applicativo \'A Bíblia Sagrada\'. Baixe no google play em https://play.google.com/store/apps/details?id=com.PiguinSoft.CafeRacer'
//             },
//             {
//                 dialogTitle: 'Compartilhar Aplicativo',
//             })
//             .then(this._showResult)
//             .catch((error) => this.setState({result: 'error: ' + error.message}));
//         }

    render() {

        return (
            <Container style={{flex: 1}} backgroundColor="#fff">
                <Header noShadow={true} transparent style={general.header}>
                    <Body>
                        <Title style={general.headerIcon}>Leitura diária</Title>
                    </Body>
                    <Right></Right>
                </Header>

                <Content style={general.content}>

                    {
                        !this.state.showPage ?

                        null

                        :

                        <List>
                            <ListItem icon>
                                <Left>
                                    <Icon name="ios-notifications" style={general.colors.clBlack}/>
                                </Left>
                                <Body>
                                  <Text style={general.colors.clBlack}>Lembrete diário (07:30)</Text>
                                </Body>
                                <Right>
                                    <Switch value={this.state.notificationReminder} onChange={() => this.reminder(this.state.notificationReminder)}/>
                                </Right>
                            </ListItem>
                            <ListItem icon onPress={() => this._navigate('About', {})}>
                                <Left>
                                    <Icon name="ios-information-circle" style={general.colors.clBlack}/>
                                </Left>
                                <Body>
                                  <Text style={general.colors.clBlack}>Sobre</Text>
                                </Body>
                            </ListItem>
                            <ListItem icon onPress={() => this._navigate('License', {})}>
                                <Left>
                                    <Icon name="ios-book" style={general.colors.clBlack}/>
                                </Left>
                                <Body>
                                  <Text style={general.colors.clBlack}>Licença</Text>
                                </Body>
                            </ListItem>
                        </List>
                    }

                </Content>

                <View>
                    <Navigation navigator={this.props.navigator} activePage="Notification" />
                </View>

                <StatusBar backgroundColor="#fff" barStyle="dark-content" />

            </Container>
        );
    }
}
