import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import { monthString } from '../../utils/constants';
import { formatDate } from '../../utils';
import {
  Wrapper,
  LeftContent,
  RightContent,
  StopText,
  DateText,
  Icon,
  Stop,
  Info,
} from './components';

class DateBar extends Component {

  render() {
    const {
      date,
      stops,
      distance,
      showStops,
      showDistance,
    } = this.props;

    return (
      <Wrapper>
        <LeftContent>
          <DateText>{formatDate(date)}</DateText>
        </LeftContent>
        <RightContent>
          {
            (showDistance) &&
            <Info>
              <Icon name="md-car" />
              <StopText>{distance.toFixed(1)}mi</StopText>
            </Info>
          }
          {
            (showStops) &&
            <Info>
              <Stop name="md-pin" />
              <StopText>{stops}</StopText>  
            </Info>
          }
        </RightContent>
      </Wrapper>
    );
  }
}

DateBar.defaultProps = {
  showDistance: true,
  showStops: true,
};

export default DateBar;
