import React, { Component } from 'react';
import { TouchableNativeFeedback } from 'react-native';
import styled from 'styled-components';
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  alignItems: center;
  padding: 16px;
  height: 72px;
  backgroundColor: #fff;
  elevation: 2;
`;

const ContentCenter = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 16px;
`;

const ContentSection = styled.View`
  display: flex;
  alignContent: center;
  alignItems: center;
  justifyContent: center;
  flex-direction: row;
`;

const Text = styled.Text`
  font-size: 18px;
`;

const Icon = styled(Ionicons).attrs({
  size: 24,
})`
  color: ${props => (props.color || props.theme.primaryTextColor)};
  paddingRight: 8px;
`;

const MIcon = styled(MaterialCommunityIcons).attrs({
  size: 24,
})`
  color: ${props => (props.color || props.theme.primaryTextColor)};
  paddingRight: 8px;
`;

class RoutePager extends Component {

  _onRightPress = () => {

  };

  _onLeftPress = () => {
    
  };

  render() {
    const {
      distance,
      duration,
      stops,
      onPress,
    } = this.props;

    return (
      <TouchableNativeFeedback onPress={onPress}>
        <Wrapper>
          <TouchableNativeFeedback onPress={this._onLeftPress}>
            <MaterialIcons name="keyboard-arrow-left" size={24} />
          </TouchableNativeFeedback>
          <ContentCenter>
            <ContentSection>
              <Icon name="md-car" size={24} color="#6f9df3" />
              <Text>
                {distance.toFixed(1)}mi
              </Text>
            </ContentSection>
            <ContentSection>
              <Icon name="md-pin" size={24} color="#FF8080" />
              <Text>{stops} stops</Text>
            </ContentSection>
            <ContentSection>
              <MIcon name="clock" size={24} />
              <Text>
                {duration}min
              </Text>
            </ContentSection>
          </ContentCenter>
          <TouchableNativeFeedback onPress={this._onRightPress}>
            <MaterialIcons name="keyboard-arrow-right" size={24}/>
          </TouchableNativeFeedback>
        </Wrapper>
      </TouchableNativeFeedback>
    );
  }
}
/**
 * 
        
 */

export default RoutePager;
