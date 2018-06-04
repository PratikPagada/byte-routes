import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableNativeFeedback, ScrollView } from 'react-native';
import styled from 'styled-components';

import Toolbar from '../components/Toolbar';
import DriverRoute from '../components/DriverRoute';

const Wrapper = styled.View`
  flex: 1;
`;

const ContentWrapper = styled.View`
  flex: 1;
  paddingTop: 80px;
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

const Empty = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;


const Circle = styled.View`
  max-height: 300px;
  max-width: 300px;
  flex: 1;
  width: 100%;
  border-radius: 150px;
  background-color: ${props => props.error ? props.theme.error : '#BDBDBD'};
  display: flex;
  justifyContent: center;
  alignItems: center;
  alignContent: center;
`;

const Message = styled.Text`
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
            <Message>Search for a Driver's Name or Serial Number</Message>
          </Circle>
        </Empty>
      );
    }

    const results = this._search(this.props.routes, searchVal);
    
    if (results.length === 0) {
      return (
        <Empty>
          <Circle>
            <Message>
              <Message highlight>{searchVal}</Message> has no routes for today {':)'} 
            </Message>
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
            <TouchableNativeFeedback
              onPress={this._onClearPress}
            >
              <Icon name="clear" highlight={this.state.searchVal !== ''}/>
            </TouchableNativeFeedback>
          }
          showTitle={false}
          back
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);
