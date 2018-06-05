import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { Constants } from 'expo';

import HomeScreen from './screens/Home';
import DetailScreen from './screens/Details';
import SearchScreen from './screens/Search';
import SettingsScreen from './screens/Settings';

export const AppMainStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailScreen },
    Search: { screen: SearchScreen },
    Settings: { screen: SettingsScreen },
  },
  {
    // custom toolbar to make a custom dropdown date picker
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
    initialRouteName: 'Home'
  }
);

class AppNavigator extends Component {
  render() {
    /*
    // if not auth return login view
    if (!this.props.user.isAuth) {
      return <LoginView />;
    }
    */
    return <AppMainStack />;
  }
}

export default connect(state => ({
  navigation: state.navigation,
}))(AppNavigator);

export const router = AppMainStack.router;
