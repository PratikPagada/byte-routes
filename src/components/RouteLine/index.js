import React, { PureComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.View`
  width: 48px;
`;

const Line = styled.View`
  flex: 1;
  width: 18px;
  margin: 0 auto;
  background-color: ${props => props.theme.primary};
  justifyContent: center;
  alignItems: center;
`;

const Dot = styled.View`
  height: 12px;
  width: 12px;
  border-radius: 6px;
  backgroundColor: rgba(255,255,255,0.5);
`;

const DotText = styled.Text`
  color: ${props => props.theme.primary};
  textAlign: center;
  fontSize: 8px;
`;

class RouteLine extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Line>
          <Dot>
            <DotText>{this.props.children}</DotText>
          </Dot>
        </Line>
      </Wrapper>
    );
  }
}

export default RouteLine;
