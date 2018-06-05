import React, { Component } from 'react';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

const Wrapper = styled.View`
  background-color: ${props => props.minimal ? 'transparent' : '#fff'};
  paddingLeft: 8px;
  paddingRight: 8px;
  display: flex;
  flex-direction: row;
`;

const Location = styled.Text`
  font-weight: bold;
  color: #616161;
  flex: 1;
  font-size: ${props => props.minimal ? 14 : 16}px;
`;

const Time = styled.Text`
  font-weight: 100;
  color: #616161;
`;

const CenterContent = styled.View`
  padding: 16px;
  flex: 1;
  borderBottomWidth: 0.5px;
  borderColor: #d6d7da;
`;

const ContentSection = styled.View`
  display: flex;
  flex-direction: row;
`;

const RightContent = styled.View`
  display: flex;
  justifyContent: center;
  alignItems: center;
  padding: 16px 8px 16px 0px;
`;

const LeftContent = styled.View`
  display: flex;
  width: 48px;
  flex-direction: column;
  justifyContent: center;
  alignItems: center;
  alignContent: center;
  paddingTop: 16px;
  paddingBottom: 16px;
`;

const Icon = styled(Ionicons).attrs({
  size: 24,
})`
  color: ${props => (props.color || props.theme.primaryTextColor)};
  paddingBottom: 8px;
`;

const LocationNumber = styled.Text`
  textAlign: center;
`;

const Address = styled.Text`
  fontSize: 14px;
  color: ${props => props.theme.primaryTextColor};
  opacity: 0.6;
`;


export {
  Address,
  LocationNumber,
  Icon,
  LeftContent,
  RightContent,
  ContentSection,
  CenterContent,
  Time,
  Location,
  Wrapper,
};
