import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ToolbarAndroid } from 'react-native';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';
import { MapView } from 'expo';
// import MapViewDirections from 'react-native-maps-directions';

import { fetchRoutes } from '../actions/byteroutes';
import Toolbar from '../components/Toolbar';
import Datebar from '../components/Datebar';
import Stop from '../components/Stop';
import RoutePager from '../components/RoutePager';
import {
  Wrapper,
  ScrollView,
  LoadingIndicator,
  Empty,
  Circle,
  Message,
  Avatar,
} from '../components';

const ContentWrapper = styled.View`
  flex: 1;
  paddingTop: 122px;
`;

const Content = styled.View`
  flex: 1;
`;

const MapContainer = styled.View`
  height: 300px;
  backgroundColor: #f2f2f2;
`;

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.navigation.getParam('driverName', 'noname'),
      route: {},
    };
  }

  handleDateChange(right=true) {
    if (right) {
      // add one to current date
    } else {
      // go back one day
    }
  }

  handlePagerPress = () => {
    
  };

  _getMarkers = ({stops}) => {
    return stops.map((stop) => {
      return (
        <MapView.Marker
          key={stop.locationNo}    
          coordinate={{
            latitude: stop.latitude,
            longitude: stop.longitude
          }}
          title={stop.locationName}
        />
      )
    });
  }

  _getRoute = ({stops}) => {
    // return route directions between coordinates
    // using the route order and MapViewDirections
  };

  _generateStops = (route: {}) => {
    if(route.stops) {
      return route.stops.map((stop, indx, stops) => {
        return (
          <Stop key={stop.stopNumber} stop={stop} last={indx === stops.length-1}/>
        );
      });
    }
    return null;
  };

  _renderView = () => {
    const {
      routes,
      fetchedRoutes,
      fetchingRoutes,
      error
    } = this.props;

    const {
      route,
    } = this.state;
    
    const {
      duration,
      distance,
      stops,
    } = route;

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
          <LoadingIndicator />
          <Message>Loading Route</Message>
        </Empty>
      )
    }

    if (fetchedRoutes && route) {
      return ([
        <MapContainer key="map">
          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: route.stops[0].latitude,
              longitude: route.stops[0].longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            {this._getMarkers(route)}
          </MapView>
        </MapContainer>,
        <ScrollView key="info">
          <RoutePager
            stops={(stops ? stops.length : 0)}
            duration={duration}
            distance={distance}
            onPress={this.handlePagerPress}
            dateChange={this.handleDateChange}
          />
          {
            this._generateStops(route)
          }
        </ScrollView>
      ]);
    }

    if (fetchedRoutes && (routes.length === 0)) {
      return (
        <Empty>
          <Circle>
            <Message>No route for today</Message>
          </Circle>
        </Empty>
      );
    }

  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    if (this.props !== undefined && this.props.date !== nextProps.date) {
      this.props.fetchRoutes(props.date);
      return null;
    }

    if (this.props === undefined || nextProps.routes !== this.props.routes) {
      let driverRoute = nextProps.routes.filter((route) => {
        return route.driverName === prevState.name
      });

      console.log(driverRoute);

      if (driverRoute.length > 0) {
        return {
          route: driverRoute[0]
        }
      }
      
      return {
        route: {}
      }
    }

    // Return null to indicate no change to state.
    return null;
  }

  render() {
    const {
      date,
    } = this.props;

    const {
      name,
    } = this.state;

    return (
      <Wrapper>
        <Toolbar
          title={name}
          leftContent={
            <Avatar size={24} />
          }
          back
        >
          <Datebar
            date={date}
            showStops={false}
            showDistance={false}
          />
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
  return bindActionCreators({
    fetchRoutes
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
