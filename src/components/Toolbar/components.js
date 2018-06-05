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
  paddingLeft: 8px;
`;

const Bar = styled.View`
  display: flex;
  flex-direction: row;
  padding: 16px;
  height: 56px;
`;

const LeftContent = styled.View`
  display: flex;
  flex-direction: row;
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
  color: ${props => props.highlight ? props.theme.primary : props.theme.primaryTextColor};
  paddingRight: 16px;
`;


export {
  Icon,
  ExpandableContent,
  CenterContent,
  RightContent,
  LeftContent,
  Bar,
  TitleWrapper,
  Wrapper,
};
