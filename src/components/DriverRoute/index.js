import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const Wrapper = styled.View`
  width: 100%;
`;

const Avatar = styled.View`
  borderRadius: 16px;
  backgroundColor: #eee;
  width: 32px;
  height: 32px;
`;

const ContentWrapper = styled.View`
  display: flex;
  flex: 2;
  padding: 8px;
`;

const NameText = styled.Text`
  fontSize: 24px;
  textAlign: left;
  fontWeight: 500;
  flex: 1;
`;

const DurationText = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: green;
`;

const CardWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  align-items: center;
  align-content: center;
  borderBottomColor: #eee;
  borderBottomWidth: 1px;
`;

const ArrowWrapper = styled.View`
  width: 32px;
  height: 32px;
  display: flex;
  justifyContent: center;
  alignItems: center;
`;

const QuickInfo = styled.View`
  display: flex;
  flexDirection: row;
  justifyContent: space-between;
`;

const Information = styled.View`
  display: flex;
`;

const InfoText = styled.Text`
  
`;

const StopWrapper = styled.View`
  display: flex;
`;

const TitleWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

class DriverRoute extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  generateStops = (stops) => {
    return stops.map((stop) => {
      return (
        <Stop key={stop.locationNo} stop={stop}/>
      );
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
    return distance;
  };

  formatDuration = (duration) => {
    return duration;
  };
  
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
        <CardWrapper open={open}>
          <Avatar /*source={avatar || defaultImage}*/ />
          <ContentWrapper>
            <TitleWrapper>
              <NameText>{driverName}</NameText>
              <DurationText>{this.formatDuration(duration)}min</DurationText>
            </TitleWrapper>
            <QuickInfo>
              <Information>
                <InfoText>
                  {stops.length}
                </InfoText>
              </Information>
              <Information>
                <InfoText>
                  {this.formatDistance(distance)}
                </InfoText>
              </Information>
              <Information>
                <InfoText>
                  {this.startTime(stops)}
                </InfoText>
              </Information>
            </QuickInfo>
          </ContentWrapper>
          <ArrowWrapper>
            <FontAwesome name={open ? 'angle-up' : 'angle-down'} />
          </ArrowWrapper>
        </CardWrapper>
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

export default DriverRoute;
