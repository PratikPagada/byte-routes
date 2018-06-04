import React, { Component } from 'react';
import styled from 'styled-components';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import RouteLine from '../RouteLine';

const Wrapper = styled.View`
  background-color: transparent;
  paddingLeft: 8px;
  paddingRight: 8px;
  display: flex;
  flex-direction: row;
`;

const Location = styled.Text`
  font-weight: bold;
  color: #616161;
  flex: 1;
  font-size: 14px;
`;

const Time = styled.Text`
  font-weight: 100;
  color: #616161;
`;

const CenterContent = styled.View`
  display: flex;
  flex-direction: row;
  padding: 16px;
  flex: 1;
`;

const RightContent = styled.View`
  display: flex;
  justifyContent: center;
  alignItems: center;
  padding: 0px 16px;
`;

class Stop extends Component {
  
  render() {
    const {
      locationName,
      stopNumber,
      scheduledAt,
    } = this.props.stop;

    return (
      <Wrapper>
        <RouteLine />
        <CenterContent>
          <Location>{locationName}</Location>
          <Time>{scheduledAt}</Time>
        </CenterContent>
        <RightContent>
          <MaterialCommunityIcons name="chevron-right" size={18}/>
        </RightContent>
      </Wrapper>
    );
  }
}

export default Stop;
