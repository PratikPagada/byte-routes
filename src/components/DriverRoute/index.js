import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { TouchableHighlight, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import { Avatar } from '../index';
import { formatTime } from '../../utils';
import {
  TitleWrapper,
  StopWrapper,
  InfoText,
  Information,
  QuickInfo,
  ArrowWrapper,
  CardWrapper,
  DurationText,
  NameText,
  ContentWrapper,
  Wrapper,
} from './components';

import Stop from '../Stop';

class DriverRoute extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  generateStops = (stops) => {
    return stops.map((stop, indx, stops) => {
      return <Stop key={stop.stopNumber} stop={stop} last={indx === stops.length-1} minimal/>
    });
  };

  startTime = (stops) => {
    let time = stops.filter(({orderNo, stopNumber}) => {
      return (orderNo === 1) || (stopNumber === 1);
    })[0].scheduledAt;
    //TODO: Format Time
    return time;
  };

  formatDistance = (distance) => {
    return `${distance.toFixed(1)}mi`;
  };

  formatDuration = (duration) => {
    // temporary format - should be [X]hrs[X]min
    return formatTime(duration);
  };

  _onCardPress = () => {
    // navigate to user detail page
    this.props.navigation.navigate('Details', { driverName: this.props.route.driverName })
  };

  _onDropDownPress = () => {
    // show stops
    this.setState({
      open: !this.state.open
    });
  }
  
  render() {
    const {
      driverName,
      stops,
      duration,
      distance,
      avatar,
    } = this.props.route;

    const {
      open
    } = this.state;

    return (
      <Wrapper>
        <TouchableHighlight onPress={this._onCardPress}>
          <CardWrapper open={open}>
            <Avatar /*source={avatar || defaultImage}*/ />
            <ContentWrapper>
              <TitleWrapper>
                <NameText>{driverName}</NameText>
                <DurationText>{this.formatDuration(duration)}</DurationText>
              </TitleWrapper>
              <QuickInfo>
                <Information>
                  <Ionicons name="md-pin" size={18}  color="#FF8080" />
                  <InfoText>
                    {stops.length} stops
                  </InfoText>
                </Information>
                <Information>
                  <Ionicons name="md-car" size={18} color="#6f9df3" />
                  <InfoText>
                    {this.formatDistance(distance)}
                  </InfoText>
                </Information>
                <Information>
                  <MaterialCommunityIcons name="clock" size={18} color="#424242" />
                  <InfoText>
                    {this.startTime(stops)}
                  </InfoText>
                </Information>
              </QuickInfo>
            </ContentWrapper>
            <TouchableOpacity onPress={this._onDropDownPress}>
              <ArrowWrapper>
                <FontAwesome name={open ? 'angle-up' : 'angle-down'}  size={24} />
              </ArrowWrapper>
            </TouchableOpacity>
          </CardWrapper>  
        </TouchableHighlight>
        <StopWrapper>
          {
            open &&
            this.generateStops(stops)
          }
        </StopWrapper>
      </Wrapper>
    );
  }
}

export default withNavigation(DriverRoute);
