import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components';
import { StatusBar, Platform } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const Wrapper = Platform.OS === 'ios' ?
  styled(SafeAreaView)`
    position: absolute;
    left: 0;
    right: 0;
    zIndex: 900;
    backgroundColor: #fff;
    elevation: 2;
  ` :
  styled.View`
    position: absolute;
    top: ${StatusBar.currentHeight || '24px'};
    left: 0;
    right: 0;
    zIndex: 900;
    backgroundColor: #fff;
    elevation: 2;
  `;

const TitleWrapper = styled.Text`
  color: ${props => props.theme.primaryTextColor};
  fontSize: 20px;
  textAlign: left;
  marginLeft: 16px;
`;

const Bar = styled.View`
  display: flex;
  flex-direction: row;
  padding: 16px 0px;
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
  padding: 0px 0px 0px 16px;
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
