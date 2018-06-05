import React, { Component } from 'react';
import styled from 'styled-components';
import { TouchableNativeFeedback, Linking, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import RouteLine from '../RouteLine';
import {
  Address,
  LocationNumber,
  Icon,
  LeftContent,
  RightContent,
  ContentSection,
  CenterContent,
  Time,
  Location,
  Wrapper,
} from './components';

class Stop extends Component {
  
  _openStop = () => {
    const { stop } = this.props;
    const scheme = Platform.OS === 'ios' ? 'maps:0,0?q=' : 'geo:0,0?q=';
    const latLng = `${stop.latitude},${stop.longitude}`;
    const label = stop.locationName;
    const url = Platform.OS === 'ios' ? `${scheme}${label}@${latLng}` : `${scheme}${latLng}(${label})`;

    Linking.openURL(url); 
  }

  render() {
    const {
      stop,
      minimal,
      last,
    } = this.props;

    const {
      locationName,
      stopNumber,
      scheduledAt,
      locationNo,
      address,
    } = stop;

    return (
      <TouchableNativeFeedback onPress={this._openStop}>
        <Wrapper minimal={minimal}>
          {
            !minimal &&
            <LeftContent>
              <Icon name="md-pin" size={24} color="#FF8080" />
              <LocationNumber>{locationNo}</LocationNumber>
            </LeftContent>
          }
          <RouteLine minimal={minimal} last={last}>
            {stopNumber}
          </RouteLine>
          <CenterContent>
            <ContentSection>
              <Location>{locationName}</Location>
              <Time>{scheduledAt}</Time>
            </ContentSection>
            {
              !minimal &&
              <ContentSection>
                <Address>{address}</Address>
              </ContentSection>
            }
          </CenterContent>
          <RightContent>
            <MaterialCommunityIcons name="chevron-right" size={minimal ? 18 : 24}/>
          </RightContent>
        </Wrapper>
      </TouchableNativeFeedback>
    );
  }
}

Stop.defaultProps = {
  minimal: false,
};

export default Stop;
