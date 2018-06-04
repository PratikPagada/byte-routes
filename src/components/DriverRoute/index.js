import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { TouchableNativeFeedback } from 'react-native';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Stop from '../Stop';

const Wrapper = styled.View`
  width: 100%;
`;

const Avatar = styled.View`
  borderRadius: 24px;
  backgroundColor: #eee;
  width: 48px;
  height: 48px;
`;

const ContentWrapper = styled.View`
  display: flex;
  flex: 2;
  paddingTop: 16px;
  paddingBottom: 16px;
  paddingRight: 16px;
  paddingLeft: 16px;
`;

const NameText = styled.Text`
  fontSize: 20px;
  textAlign: left;
  fontWeight: 500;
  flex: 1;
  paddingBottom: 8px;
`;

const DurationText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: green;
`;

const CardWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  align-items: center;
  align-content: center;
  elevation: 1;
  paddingLeft: 8px;
  paddingRight: 8px;
  paddingBottom: 1px;
  borderBottomWidth: ${props => props.open ? '0px' : '0.5px'};
  borderColor: #d6d7da;
`;

const ArrowWrapper = styled.View`
  width: 48px;
  height: 48px;
  borderRadius: 24px;
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
  flex-direction: row;
`;

const InfoText = styled.Text`
  marginLeft: 8px;
  color: #424242;
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
      open: false
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
    return `${distance.toFixed(1)}mi`;
  };

  formatDuration = (duration) => {
    // temporary format - should be [X]hrs[X]min
    return `${duration}min`;
  };

  _onCardPress = () => {
    // navigate to user detail page
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
        <TouchableNativeFeedback onPress={this._onPressButton}>
          <CardWrapper open={open}>
            <Avatar /*source={avatar || defaultImage}*/ />
            <ContentWrapper>
              <TitleWrapper>
                <NameText>{driverName}</NameText>
                <DurationText>{this.formatDuration(duration)}</DurationText>
              </TitleWrapper>
              <QuickInfo>
                <Information>
                  <Ionicons name="md-pin" size={18}  color={this.props.theme.error} />
                  <InfoText>
                    {stops.length}
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
            <TouchableNativeFeedback onPress={this._onDropDownPress}>
              <ArrowWrapper>
                <FontAwesome name={open ? 'angle-up' : 'angle-down'}  size={24} />
              </ArrowWrapper>
            </TouchableNativeFeedback>
          </CardWrapper>  
        </TouchableNativeFeedback>
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

export default withTheme(DriverRoute);
