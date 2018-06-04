import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import Toolbar from '../components/Toolbar';
import Datebar from '../components/Datebar';
import * as ByteActions from '../actions/byteroutes';
import DriverRoute from '../components/DriverRoute';

const ContainerView = styled.View`
  flex: 1;
`;

const ContentWrapper = styled.View`
  flex: 1;
  paddingTop: 122px;
`;

const ScrollView = styled.ScrollView``;

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

const Message = styled.Text`

`;

const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
  color: props => props.theme.primary
})``;

class Home extends Component {
  componentDidMount() {
    this.props.fetchRoutes(this.props.date);
  }

  _generateRoutes = (routes = []) => {
    return routes.map((route, indx) => {
      return ( 
        <DriverRoute key={route.driverSerial || route.driverName} route={route} />
      );
    });
  };

  _countStops = (routes = []) => {
    return routes.reduce((totalStops, route) => totalStops + route.stops.length, 0);
  }

  _countDistance = (routes = []) => {
    return routes.reduce((totalDist, route) => totalDist + route.distance, 0);
  }

  _renderView = () => {
    const {
      routes,
      fetchedRoutes,
      fetchingRoutes,
      error
    } = this.props;

    if (error) {
      return (
        <Empty>
          <Circle error>
            <Message>{error}</Message>
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
            <Message>No routes for today</Message>
          </Circle>
        </Empty>
      );
    }

    return (
      <ScrollView>
        {
          this._generateRoutes(routes)
        }
      </ScrollView>
    );
  }

  render() {
    return (
      <ContainerView>
        <Toolbar>
          <Datebar
            date={this.props.date}
            stops={this._countStops(this.props.routes)}
            distance={this._countDistance(this.props.routes)}
          />
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
  return bindActionCreators(ByteActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
