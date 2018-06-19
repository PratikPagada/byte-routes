import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Platform } from 'react-native';
import styled from 'styled-components';

import Toolbar from '../components/Toolbar';
import {
  Wrapper,
  ScrollView,
} from '../components';

const ContentWrapper = styled.View`
  flex: 1;
  paddingTop: ${Platform.OS === 'ios' ? '56px' : '80px'};
`;


class Settings extends Component {
  _renderView = () => {
    return (
      <ScrollView>
        
      </ScrollView>
    );
  }

  render() {
    return (
      <Wrapper>
        <Toolbar
          title="Settings"
          back
        >
        </Toolbar>
        <ContentWrapper>
          {this._renderView()}
        </ContentWrapper>
      </Wrapper>
    );
  }
}

function mapStateToProps({byte}) {
  return {
    routes: byte.routes,
    date: byte.date,
    driver: byte.driver,
    fetchingRoutes: byte.fetchingRoutes,
    fetchedRoutes: byte.fetchedRoutes,
    error: byte.error
  };
}

function mapDispatchToProps(dispatch) {
  return {}; //bindActionCreators(ByteActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
