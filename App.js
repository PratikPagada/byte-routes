import React from 'react';
import {
  Text,
  View,
  StatusBar,
  Platform
} from 'react-native';
import { Provider, connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './src/utils/constants';

import Store from './src/Store';
import Navigation from './src/Navigation';

const Root = styled.View`
  flex: 1;
  background-color: ${props => props.theme.defaultBackground};
`;

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <ThemeProvider theme={theme}>
          <Root>
            <StatusBar barStyle='light-content' backgroundColor='transparent' translucent animated/>
            <Navigation />
          </Root>
        </ThemeProvider>
      </Provider>
    );
  }
}
