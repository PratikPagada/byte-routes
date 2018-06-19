import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TouchableOpacity, DatePickerAndroid } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';
import { Platform } from 'react-native'

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
import { padNumber } from '../utils';

const ContentWrapper = styled.View`
  flex: 1;
  paddingTop: ${Platform.OS === 'ios' ? '98px' : '122px'};
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
    // Fetch Routes for current date 
    this.props.fetchRoutes(this.props.date);
  }
  
  componentDidUpdate(prevProps){
    if (prevProps.date !== this.props.date) {
      this.props.fetchRoutes(this.props.date);
    }
  }

  handleDateChange = (year, month, day) => {
    // format to -> 2018-06-01
    this.props.changeDate(`${year}-${padNumber(month)}-${padNumber(day)}`);
  };

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

  _openDefaultCalendar = async () => {
    try {
      const selected = this.props.date;
      let current = new Date();
      if (selected) {
        const date = selected.split('-');
        let year = parseInt(date[0]), month = parseInt(date[1]), day = parseInt(date[2]);
        current = new Date(year, month-1, day);
      }
      const {action, year, month, day} = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: current,
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        // Selected year, month (0-11), day
        this.handleDateChange(year, month + 1, day);
      }
    } catch ({code, message}) {
      console.warn('Cannot open date picker', message);
    }
  };

  _onCalendarPress = () => {
    /*this.setState({
      expandToolbar: !this.state.expandToolbar,
    });*/
    this._openDefaultCalendar();
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
              onDateChange={this.handleDateChange}
            />
          }
          rightContent={[
            <TouchableOpacity key="calendar" onPress={this._onCalendarPress}>
              <Icon name={"md-calendar"} highlight={expandToolbar}/>
            </TouchableOpacity>,
            <TouchableOpacity key="search" onPress={this._onSearchPress}>
              <Icon name={"md-search"} />
            </TouchableOpacity>,
            <TouchableOpacity key="settings" onPress={this._onSettingsPress}>
              <Icon name={"md-settings"} />
            </TouchableOpacity>
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
