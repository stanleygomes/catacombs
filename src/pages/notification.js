import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StatusBar, AsyncStorage } from 'react-native';
import { Switch, Container, Header, Right, H1, H2, H3, Left, Body, Title, Content, Button, Icon, List, ListItem } from 'native-base';

import PushNotification from 'react-native-push-notification';

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

    test() {
    }

    render() {

        return (
            <Container style={{flex: 1}} backgroundColor="#555">
                <Header noShadow={true} transparent style={{backgroundColor: '#444'}}>
                    <Left>
                        <Button transparent onPress={() => this.goBack()}>
                            <Icon name='ios-arrow-back' style={{color: '#fff'}}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{color: '#fff'}}>Leitura diária</Title>
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
                                    <Icon name="ios-notifications" style={general.colors.white}/>
                                </Left>
                                <Body>
                                  <Text style={general.colors.white}>Lembrete diário (07:30)</Text>
                                </Body>
                                <Right>
                                    <Switch value={this.state.notificationReminder} onChange={() => this.reminder(this.state.notificationReminder)}/>
                                </Right>
                            </ListItem>
                        </List>
                    }

                </Content>

                <StatusBar backgroundColor="#444" barStyle="light-content" />

            </Container>
        );
    }
}
