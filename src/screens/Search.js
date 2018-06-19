import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity, Platform } from 'react-native';
import styled from 'styled-components';

import { formatDate } from '../utils';
import Toolbar from '../components/Toolbar';
import Datebar from '../components/Datebar';
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
  paddingTop: ${Platform.OS === 'ios' ? '98px' : '122px'};
`;

const SearchBar = styled.TextInput.attrs({
  underlineColorAndroid: 'transparent',
  placeholder: 'Search...',
})`
  flex: 1;
  fontSize: 20px;
`;

const Icon = styled(MaterialIcons).attrs({
  size: 24,
})`
  paddingLeft: 24px;
  color: ${props => props.highlight ? props.theme.error : props.theme.primaryTextColor};
`;

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: ''
    };
  }

  _handleChange = (text) => {
    this.setState({
      searchVal: text,
    });
  };

  _onClearPress = () => {
    if (this.state.searchVal === '') {
      this.props.navigation.goBack();
    } else {
      this.setState({
        searchVal: '',
      });
    }
  };

  _search(routes, searchVal) {
    return routes.filter((route) => {
      return (
        route.driverName.includes(searchVal) ||
        route.driverSerial.includes(searchVal)
      );
    });
  };

  _generateRoutes = (routes) => {
    return routes.map((route) => {
      return (
        <DriverRoute key={route.driverName} route={route} />
      );
    });
  };

  _renderView = () => {
    const {
      searchVal
    } = this.state;

    if (searchVal === '') {
      return (
        <Empty>
          <Circle>
            <Message>Search <Message highlight>{formatDate(this.props.date)}</Message>{'\n'}for a Driver's Name{'\n'}or Serial Number</Message>
          </Circle>
        </Empty>
      );
    }

    const results = this._search(this.props.routes, searchVal);
    
    if (results.length === 0) {
      return (
        <Empty>
          <Circle>
            <Message highlight>{searchVal}</Message>
            <Message>has no route for</Message>
            <Message highlight>{formatDate(this.props.date)}</Message>
          </Circle>
        </Empty>
      )
    }
    
    return (
      <ScrollView>
        {this._generateRoutes(results)}
      </ScrollView>
    )
  };

  render() {
    return (
      <Wrapper>
        <Toolbar
          centerContent={
            <SearchBar
              type="text"
              value={this.state.searchVal}
              onChangeText={this._handleChange}
              innerRef={x => this.search = x}
            />
          }
          rightContent={
            <TouchableOpacity
              onPress={this._onClearPress}
            >
              <Icon name="clear" highlight={this.state.searchVal !== ''}/>
            </TouchableOpacity>
          }
          showTitle={false}
          back
        >
          <Datebar date={this.props.date} showStops={false} showDistance={false}/>
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
  };
}

export default connect(mapStateToProps, {})(Search);
