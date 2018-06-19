import React, { Component } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { formatTime } from '../../utils';
import {
  MIcon,
  Icon,
  Text,
  ContentSection,
  ContentCenter,
  Wrapper,
} from './components';

class RoutePager extends Component {

  _onRightPress = () => {
    this.props.pressedArrow(true);
  };

  _onLeftPress = () => {
    this.props.pressedArrow(false);
  };

  render() {
    const {
      distance,
      duration,
      stops,
      onPress,
    } = this.props;

    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <Wrapper>
          <TouchableOpacity onPress={this._onLeftPress}>
            <MaterialIcons name="keyboard-arrow-left" size={24} />
          </TouchableOpacity>
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
                {formatTime(duration)}
              </Text>
            </ContentSection>
          </ContentCenter>
          <TouchableOpacity onPress={this._onRightPress}>
            <MaterialIcons name="keyboard-arrow-right" size={24}/>
          </TouchableOpacity>
        </Wrapper>
      </TouchableWithoutFeedback>
    );
  }
}

export default RoutePager;
