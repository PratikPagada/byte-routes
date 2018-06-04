import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.View`
  padding: 1vw;
  background-color: transparent;
`;

const LocationTitle = styled.Text`
  font-weight: bold;
`;

class Stop extends Component {
  
  render() {
    const {
      locationName,
    } = this.props;

    return (
      <Wrapper>
        <LocationTitle>{locationName}</LocationTitle>
      </Wrapper>
    );
  }
}

export default Stop;
