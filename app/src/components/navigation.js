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
				// {page: 'Feed', iconOutline: 'ios-albums-outline', icon: 'ios-albums', count: 0},
				{page: 'Favorite', iconOutline: 'ios-heart-outline', icon: 'ios-heart', count: 0},
				{page: 'Language', iconOutline: 'ios-globe-outline', icon: 'ios-globe', count: 0},
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
									// <Text active={true} style={{color: '#333'}}>{item.page}</Text>
