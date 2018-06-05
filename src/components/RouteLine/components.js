import styled from 'styled-components';

const Wrapper = styled.View`
  width: 48px;
`;

const Line = styled.View`
  flex: ${props => props.last ? 0 : 1};
  width: ${props => props.minimal ? '18px' : '24px'};
  margin: 0 auto;
  background-color: ${props => props.theme.primary};
  justifyContent: flex-start;
  alignItems: center;
  paddingTop: 16px;
  borderBottomRightRadius: ${props => props.last ? (props.minimal ? 9 : 12) : 0}px;
  borderBottomLeftRadius: ${props => props.last ? (props.minimal ? 9 : 12) : 0}px;
`;

const Dot = styled.View`
  height: ${props => props.minimal ? '12px' : '18px'};
  width: ${props => props.minimal ? '12px' : '18px'};
  border-radius: ${props => props.minimal ? '6px' : '9px'};
  backgroundColor: rgba(255,255,255,0.6);
  margin: 2px;
`;

const DotText = styled.Text`
  color: ${props => props.theme.primary};
  textAlign: center;
  fontSize: 12px;
  flex: 1;
`;


export {
  DotText,
  Dot,
  Line,
  Wrapper,
};
