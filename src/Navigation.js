import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { Constants } from 'expo';

import HomeScreen from './screens/Home';

export const AppMainStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
  },
  {
    headerTitle: 'Home',
    headerTitleStyle: {
      color: '#000',
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
