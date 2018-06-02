import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/native';

const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const TitleText = styled.Text`
  fontSize: 30;
  color: black;
`;

class Home extends Component {
  render() {
    return (
      <ContainerView>
        <TitleText>Home</TitleText>
      </ContainerView>
    );
  }
}

export default Home;
