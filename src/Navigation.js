/**
 * App Navigation
 * HomeScreen: Lists all routes for selected date
 * DetailScreen: Lists all the stops in more detail for selected route
 * SearchScreen: Search for driver in routes
 * SettingsScreen: Show app settings
 */
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
    // remove default header to allow for a
    // custom navbar to make an expandable date picker
    // and date bar below the navbar
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
    // start on the home screen
    initialRouteName: 'Home'
  }
);

class AppNavigator extends Component {
  render() {
    /* TODO: If we were to implement authentication
    // if not authenticated return login view
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
