import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import {
  Icon,
  ExpandableContent,
  CenterContent,
  RightContent,
  LeftContent,
  Bar,
  TitleWrapper,
  Wrapper,
} from './components';

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
              <TouchableOpacity onPress={this.onBackPress}>
                <Icon name="md-arrow-back" size={24} />
              </TouchableOpacity>
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
