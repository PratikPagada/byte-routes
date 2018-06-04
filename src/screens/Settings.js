import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import Toolbar from '../components/Toolbar';

const ContainerView = styled.View`
  flex: 1;
`;

const ContentWrapper = styled.View`
  flex: 1;
  paddingTop: 80px;
`;

const ScrollView = styled.ScrollView`

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
      <ContainerView>
        <Toolbar
          title="Settings"
          back
        >
        </Toolbar>
        <ContentWrapper>
          {this._renderView()}
        </ContentWrapper>
      </ContainerView>
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
