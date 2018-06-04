import React, { Component } from 'react';
import { TouchableNativeFeedback } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';

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

`

const Icon = styled(Ionicons).attrs({
  size: 24,
})`
  paddingRight: 24px;
  color: ${props => props.highlight ? props.theme.primary : props.theme.primaryTextColor};
`;

class Toolbar extends Component {
  onBackPress = () => {
    this.props.navigation.goBack();
  };

  render() {
    const {
      back,
      title,
      expand,
      showTitle,
      leftContent,
      rightContent,
      centerContent,
    } = this.props;

    return (
      <Wrapper>
        <Bar>
          <LeftContent>
            {
              back &&
              <TouchableNativeFeedback onPress={this.onBackPress}>
                <Icon name="md-arrow-back" size={24} />
              </TouchableNativeFeedback>
            }
            {leftContent}
          </LeftContent>
          <CenterContent>
            {
              showTitle &&
              <TitleWrapper>
                {title}
              </TitleWrapper>
            }
            {centerContent}
          </CenterContent>
          <RightContent>
            {rightContent}
          </RightContent>
        </Bar>
        {
          expand &&
          <ExpandableContent>
            {this.props.expandable}
          </ExpandableContent>
        }
        {this.props.children}
      </Wrapper>
    );
  }
}

Toolbar.defaultProps = {
  showTitle: true,
  title: "ByteRoutes",
  open: false,
  back: false,
};

export default withNavigation(Toolbar);
