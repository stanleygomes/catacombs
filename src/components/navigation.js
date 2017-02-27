import React, { Component } from 'react';
import { View, Navigator, StyleProvider } from 'react-native';
import { Footer, FooterTab, Button, Text, Icon, Badge } from 'native-base';

import general from '../theme/general';

export default class Navigation extends Component {

	constructor(props) {
		super(props);

		this.state = {
			active: this.props.activePage,
			tabs: [
				{page: 'Book', iconOutline: 'ios-home-outline', icon: 'ios-home', count: 0},
				// {page: 'About', iconOutline: 'ios-information-circle-outline', icon: 'ios-information-circle', count: 2},
				// {page: 'License', iconOutline: 'ios-map-outline', icon: 'ios-map', count: 10},
				{page: 'Language', iconOutline: 'ios-flag-outline', icon: 'ios-flag', count: 2},
				{page: 'Notification',  iconOutline: 'ios-settings-outline', icon: 'ios-settings', count: 0}
			]
		};
	}

    _navigate(name, obj) {
        this.props.navigator.replace({
            name: name,
            passProps: obj
        });
    }

    openPage(page) {

        if(page == 'language')
            AsyncStorage.setItem('language', '');

    	this.setState({active: page});
    	this._navigate(page, {});
    }

	render() {
		return (
            <View>
				<Footer style={general.footer}>
					<FooterTab>
						{ this.state.tabs.map(function(item, index) {
							return (
								<Button key={index} active={ this.state.active == item.page ? true : false } onPress={ () => this.openPage(item.page) }>
									<Icon style={{color: '#333'}} name={ this.state.active == item.page ? item.icon : item.iconOutline } active={ this.state.active == item.page ? true : false } />
								</Button>
							);
						}, this)}
					</FooterTab>
	            </Footer>
            </View>
		);
	}
}
