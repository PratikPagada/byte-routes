import React, { Component } from 'react';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

const Wrapper = styled.View`
  position: absolute;
  top: 24px;
  left: 0;
  right: 0;
  zIndex: 900;
  backgroundColor: #fff;
  elevation: 2;
  shadowColor: #e0e0e0;
  shadowOffset: 0 2px;
  shadowOpacity: 0.3;
`;

const TitleWrapper = styled.Text`
  color: ${props => props.theme.primaryTextColor};
  fontSize: 20px;
  textAlign: left;
`;

const Bar = styled.View`
  display: flex;
  flex-direction: row;
  padding: 16px;
  height: 56px;
`;

const LeftContent = styled.View`

`;

const RightContent = styled.View`
  display: flex;
  flex-direction: row;
`;

const CenterContent = styled.View`
  flex: 1;
`;

const ExpandableContent = styled.View`

`;

const Icon = styled(Ionicons).attrs({
  size: 24,
})`
  paddingLeft: 24px;
  color: ${props => props.theme.primaryTextColor};
`;

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  render() {
    return (
      <Wrapper>
        <Bar>
          <LeftContent>

          </LeftContent>
          <CenterContent>
            <TitleWrapper>
              ByteRoutes
            </TitleWrapper>
          </CenterContent>
          <RightContent>
            <Icon name={"md-calendar"}/>
            <Icon name={"md-search"}/>
          </RightContent>
        </Bar>
        {
          this.state.open &&
            <ExpandableContent>
              {this.props.expandable}
            </ExpandableContent>
        }
        {this.props.children}
      </Wrapper>
    );
  }
}

export default Toolbar;
