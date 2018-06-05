import React, { PureComponent } from 'react';
import {
  DotText,
  Dot,
  Line,
  Wrapper,
} from './components';

class RouteLine extends PureComponent {
  render() {
    const { minimal, last } = this.props;
    return (
      <Wrapper>
        <Line last={last}>
          <Dot>
            <DotText>
            {
              !minimal &&
              this.props.children
            }
            </DotText>
          </Dot>
        </Line>
      </Wrapper>
    );
  }
}

RouteLine.defaultProps = {
  minimal: false,
};

export default RouteLine;
