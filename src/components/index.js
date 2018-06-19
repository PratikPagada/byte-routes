import React, { Component } from 'react';
import styled from 'styled-components';
import { SafeAreaView } from 'react-navigation';

export const Wrapper = styled(SafeAreaView).attrs({
  forceInset: {
    bottom: 'never',
  }
})`
  flex: 1;
`;

export const Empty = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

export const Circle = styled.View`
  max-height: 300px;
  max-width: 300px;
  flex: 1;
  width: 100%;
  border-radius: 150px;
  background-color: ${props => props.error ? props.theme.error : '#BDBDBD'};
  display: flex;
  justifyContent: center;
  alignItems: center;
  alignContent: center;
`;

export const Message = styled.Text`
  color: ${props => props.highlight ? props.theme.error : props.theme.primaryTextColor};
  textAlign: center;
  fontSize: 18px;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
  color: props => props.theme.primary
})``;

export const ScrollView = styled.ScrollView``;

export const Avatar = styled.View`
  borderRadius: 24px;
  backgroundColor: #eee;
  width: ${props => props.size || 48}px;
  height: ${props => props.size || 48}px;
`;
