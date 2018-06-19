import React, { Component } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { formatTime } from '../../utils';
import {
  Icon,
  Text,
  ContentSection,
  ContentCenter,
  VerticalSection,
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
              <Icon name="md-car" color="#6f9df3" />
              <Text>
                {distance.toFixed(1)}mi
              </Text>
            </ContentSection>
            <ContentSection>
              <Icon name="md-pin" color="#FF8080" />
              <VerticalSection>
                <Text>{stops} stops</Text>
                {
                  (duration !== undefined) && <Text>{formatTime(duration)}</Text>  
                }
              </VerticalSection>
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
