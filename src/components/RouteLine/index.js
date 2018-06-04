import React, { PureComponent } from 'react';
import styled from 'styled-component';

const Wrapper = styled.View`
  width: 10px;
  padding-top: 10px;
  background-color: ${props => props.theme.primary};
`;

const Dot = styled.View`
  height: 8px;
  width: 8px;
  border-radius: 4px;
  margin: 0 auto;
`;

class RouteLine extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Dot />
      </Wrapper>
    );
  }
}

export default RouteLine;
