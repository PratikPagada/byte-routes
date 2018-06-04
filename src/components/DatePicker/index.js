import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.View`
  height: 300px;
  display: flex;
  justifyContent: center;
  alignItems: center;
  alignContent: center;
`;

const Text = styled.Text`

`;

class DatePicker extends Component {
  render(){
    return (
      <Wrapper>
        <Text>DatePicker</Text>
      </Wrapper>
    );
  }
}

export default DatePicker;
