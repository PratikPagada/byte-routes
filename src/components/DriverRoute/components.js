import styled from 'styled-components';

const Wrapper = styled.View`
  width: 100%;
`;

const ContentWrapper = styled.View`
  display: flex;
  flex: 2;
  paddingTop: 16px;
  paddingBottom: 16px;
  paddingRight: 16px;
  paddingLeft: 16px;
`;

const NameText = styled.Text`
  fontSize: 20px;
  textAlign: left;
  fontWeight: 500;
  flex: 1;
  paddingBottom: 8px;
`;

const DurationText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: green;
`;

const CardWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  align-items: center;
  align-content: center;
  elevation: 1;
  paddingLeft: 8px;
  paddingRight: 8px;
  paddingBottom: 1px;
  borderBottomWidth: ${props => props.open ? '0px' : '0.5px'};
  borderColor: #d6d7da;
`;

const ArrowWrapper = styled.View`
  width: 48px;
  height: 48px;
  borderRadius: 24px;
  display: flex;
  justifyContent: center;
  alignItems: center;
`;

const QuickInfo = styled.View`
  display: flex;
  flexDirection: row;
  justifyContent: space-between;
`;

const Information = styled.View`
  display: flex;
  flex-direction: row;
`;

const InfoText = styled.Text`
  marginLeft: 8px;
  color: #424242;
`;

const StopWrapper = styled.View`
  display: flex;
`;

const TitleWrapper = styled.View`
  display: flex;
  flex-direction: row;
`;

export {
  TitleWrapper,
  StopWrapper,
  InfoText,
  Information,
  QuickInfo,
  ArrowWrapper,
  CardWrapper,
  DurationText,
  NameText,
  ContentWrapper,
  Wrapper,
};
