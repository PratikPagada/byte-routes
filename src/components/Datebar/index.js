import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import { monthString } from '../../utils/constants';

const Wrapper = styled.View`
  backgroundColor: #F5F5F5;
  display: flex;
  flex-direction: row;
  alignContent: center;
  alignItems: center;
  padding: 8px 16px;
  height: 42px;
`;

const LeftContent = styled.View`
  flex: 1;
`;

const RightContent = styled.View`
  display: flex;
  flex-direction: row;
  justifyContent: center;
  alignItems: center;
  alignContent: center;
`;

const StopText = styled.Text`
  color: ${props => props.theme.primaryTextColor};
  padding: 0px 8px;
`;

const DateText = styled.Text`
  color: ${props => props.theme.primaryTextColor};
`;

const Icon = styled(Ionicons).attrs({
  size: 14,
})`
  color: #6f9df3;
`;

const Stop = styled(Icon)`
  color: ${props => props.theme.error};
`;

const Info = styled.View`
  display: flex;
  justifyContent: center;
  flex-direction: row;
  alignItems: center;
  alignContent: center;
`;

class DateBar extends Component {
  _formatDate = (dateStr) => {
    // 2018-06-01 -> Jun 1
    let date = dateStr.split('-');
    let year = date[0], month = date[1], day = date[2];
    let now = new Date().getFullYear();
    return `${monthString(month)} ${parseInt(day)}${now !== parseInt(year) ? `, ${year}` : ''}`;
  };

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
          <DateText>{this._formatDate(date)}</DateText>
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
