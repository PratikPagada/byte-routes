import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import Toolbar from '../components/Toolbar';

const Wrapper = styled.View`
  flex: 1;
`;

const ContentWrapper = styled.View`
  flex: 1;
  paddingTop: 80px;
`;

const ScrollView = styled.ScrollView`

`;

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const name = this.props.navigation.getParam('driverName', 'noname');
    return (
      <Wrapper>
        <Toolbar
          title={name}
          back
        />
        <ContentWrapper>
          <ScrollView>

          </ScrollView>
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
  return {}; // bindActionCreators(ByteActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
