import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TouchableNativeFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';

import Toolbar from '../components/Toolbar';
import Datebar from '../components/Datebar';
import DatePicker from '../components/DatePicker';
import * as ByteActions from '../actions/byteroutes';
import DriverRoute from '../components/DriverRoute';
import {
  Wrapper,
  ScrollView,
  LoadingIndicator,
  Empty,
  Circle,
  Message,
} from '../components';

const ContentWrapper = styled.View`
  flex: 1;
  paddingTop: 122px;
`;

const Icon = styled(Ionicons).attrs({
  size: 24,
})`
  marginLeft: 24px;
  color: ${props => props.highlight ? props.theme.primary : props.theme.primaryTextColor};
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandToolbar: false,
    };
  }

  componentDidMount() {
    this.props.fetchRoutes(this.props.date);
  }
  
  static getDerivedStateFromProps(nextProps, prevState) {
    if (this.props !== undefined && this.props.date !== nextProps.date) {
      this.props.fetchRoutes(props.date);
    }

    // Return null to indicate no change to state.
    return null;
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

  _onCalendarPress = () => {
    this.setState({
      expandToolbar: !this.state.expandToolbar,
    });
  };

  _onSearchPress = () => {
    // navigate to settings
    this.props.navigation.navigate('Search');
  };

  _onSettingsPress = () => {
    // navigate to settings
    this.props.navigation.navigate('Settings');
  };

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
          <LoadingIndicator />
          <Message>Loading Routes</Message>
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
    const {
      expandToolbar,
    } = this.state;

    return (
      <Wrapper>
        <Toolbar
          expand={expandToolbar}
          expandable={
            <DatePicker
              selected={this.props.date}
            />
          }
          rightContent={[
            <TouchableNativeFeedback key="calendar" onPress={this._onCalendarPress}>
              <Icon name={"md-calendar"} highlight={expandToolbar}/>
            </TouchableNativeFeedback>,
            <TouchableNativeFeedback key="search" onPress={this._onSearchPress}>
              <Icon name={"md-search"} />
            </TouchableNativeFeedback>,
            <TouchableNativeFeedback key="settings" onPress={this._onSettingsPress}>
              <Icon name={"md-settings"} />
            </TouchableNativeFeedback>
          ]}
        >
          <Datebar
            date={this.props.date}
            stops={this._countStops(this.props.routes)}
            distance={this._countDistance(this.props.routes)}
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

Home.defaultProps = {
  date: '',
};

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
