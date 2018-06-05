import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

const Wrapper = styled.View`
  backgroundColor: #F5F5F5;
  display: flex;
  flex-direction: row;
  alignContent: center;
  alignItems: center;
  padding: 8px 16px;
  height: 42px;
`;

const LeftContent = styled.View`
  flex: 1;
`;

const RightContent = styled.View`
  display: flex;
  flex-direction: row;
  justifyContent: center;
  alignItems: center;
  alignContent: center;
`;

const StopText = styled.Text`
  color: ${props => props.theme.primaryTextColor};
  padding: 0px 8px;
`;

const DateText = styled.Text`
  color: ${props => props.theme.primaryTextColor};
`;

const Icon = styled(Ionicons).attrs({
  size: 14,
})`
  color: #6f9df3;
`;

const Stop = styled(Icon)`
  color: ${props => props.theme.error};
`;

const Info = styled.View`
  display: flex;
  justifyContent: center;
  flex-direction: row;
  alignItems: center;
  alignContent: center;
`;


export {
  Wrapper,
  LeftContent,
  RightContent,
  StopText,
  DateText,
  Icon,
  Stop,
  Info
};
