import styled from 'styled-components';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Wrapper = styled.View `
  display: flex;
  flex-direction: row;
  alignItems: center;
  padding: 16px;
  height: 72px;
  backgroundColor: #fff;
  elevation: 1;
`;

const ContentCenter = styled.View `
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0px 16px;
`;

const ContentSection = styled.View `
  display: flex;
  alignContent: center;
  alignItems: center;
  justifyContent: center;
  flex-direction: row;
`;

const VerticalSection = styled.View`
  display: flex;
  flex-direction: column;
  justifyContent: center;
`;

const Text = styled.Text `
  font-size: 16px;
`;

const Icon = styled(Ionicons).attrs({
  size: 24,
})`
  color: ${props => (props.color || props.theme.primaryTextColor)};
  paddingRight: 8px;
`;

export {
  Icon,
  Text,
  ContentSection,
  ContentCenter,
  VerticalSection,
  Wrapper,
};
