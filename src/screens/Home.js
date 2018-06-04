import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import * as ByteActions from '../actions/byteroutes';
import DriverRoute from '../components/DriverRoute';

const ContainerView = styled.View`
  flex: 1;
`;

const Empty = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const Circle = styled.View`
  max-height: 200px;
  max-width: 200px;
  border-radius: 100px;
  background-color: ${props => props.error ? props.theme.error : '#BDBDBD'};
`;

const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: props => props.theme.primary
})``;

class Home extends Component {
  componentDidMount() {
    this.props.fetchRoutes(this.props.date);
  }

  generateRoutes = (routes = []) => {
    return routes.map((route) => {
      return ( 
        <DriverRoute key={route.driverSerial || route.driverName} route={route}/>
      );
    });
  };

  render() {
    const {
      routes,
      fetchedRoutes,
      fetchingRoutes,
      error
    } = this.props;

    console.log(routes);

    if (error) {
      return (
        <Empty>
          <Circle error>
            {error}
          </Circle>
        </Empty>
      );
    }

    if (!fetchedRoutes || fetchingRoutes) {
      return (
        <Empty>
          <Loading />
        </Empty>
      )
    }

    if (fetchedRoutes && routes.length === 0) {
      return (
        <Empty>
          <Circle>
            No routes for today
          </Circle>
        </Empty>
      );
    }

    return (
      <ContainerView>
        {
          this.generateRoutes(routes)
        }
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
  return bindActionCreators(ByteActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
