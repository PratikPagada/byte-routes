import React, { Component } from 'react';
import styled from 'styled-components';
import { Animated, Dimensions, PanResponder, TouchableWithoutFeedback } from 'react-native';
import Utils from './utils';

const Wrapper = styled.View`
  flex: 1;
`;

const AnimatedView = styled(Animated.View)`
  flex: 1;
  top: ${props => props.top};
`;

const TopView = styled.View`
  height: 40px;
  paddingTop: 40px;
  marginTop: 20px;
  backgroundColor: rgba(0, 0, 0, 0.51);
  borderTopLeftRadius: 15px;
  borderTopRightRadius: 15px;
`;

const TENSION = 800;
const FRICTION = 90;
const SREEN_HEIGHT = Dimensions.get('window').height;
const Helper = new Utils(Dimensions.get('window').height);

class BottomDrawer extends Component {
  constructor(props) {
    super(props);
    let initialDrawerSize =  Helper.calculateInitialPosition(props.initialDrawerSize);
    this.state = {
      touched: false,
      position: new Animated.Value(initialDrawerSize),
      initialPosition: initialDrawerSize,
    };
  }

  onUpdatePosition = (position) => {
    this.setState({
      position: position,
    });
    this._prevTop = position;
    let initialPos = Helper.getInitialPosition();
    if(initialPos === position) {
      this.props.onInitialPositionReached && this.props.onInitialPositionReached();
    }
  }

  moveDrawerView = (gestureState) => {
    console.log(gestureState.vy,'GESTURE');
    if (!this.center) return;
    var currentValue = Math.abs(gestureState.moveY / SCREEN_HEIGHT);
    var isGoingToUp = ( gestureState.vy < 0 );
    //Here, I'm subtracting %5 of screen size from edge drawer position to be closer as possible to finger location when dragging the drawer view
    var position = gestureState.moveY - SCREEN_HEIGHT * 0.05;
    //Send to callback function the current drawer position when drag down the drawer view component
    if(!isGoingToUp) this.props.onDragDown(1-currentValue);
    this.onUpdatePosition(position);
  };

  moveFinished = (gestureState) => {
    var isGoingToUp = ( gestureState.vy < 0 );
    if (!this.center) return;
    Helper.startAnimation(gestureState.vy,gestureState.moveY,this.state.initialPositon,gestureState.stateId);
    this.props.onRelease && this.props.onRelease(isGoingToUp);
  };

  componentWillMount() {
    Helper.setUpAnimation(TENSION, FRICTION,
      (position) => {
         if (!this.center) return;
         this.onUpdatePosition(position.value);
      }
    );

   this._panGesture = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
         return Helper.isAValidMovement(gestureState.dx, gestureState.dy) && this.state.touched;
      },
      onPanResponderMove: (evt, gestureState) => {
         this.moveDrawerView(gestureState)
      },
      onPanResponderRelease: (evt, gestureState) => {
         this.moveFinished(gestureState)
      },
   })
  }

  render() {
    var containerView = this.props.renderContainerView ? this.props.renderContainerView() : null;
    var drawerView = this.props.renderDrawerView ? this.props.renderDrawerView() : null;
    return (
      <Wrapper>
        <AnimatedView
          top={this.state.position}
          innerRef={(center) => this.center = center}
          {...this._panGesture.panHandlers}
        >
          <TouchableWithoutFeedback
            onPressIn={()=>{this.setState({touched: true})}}
            onPressOut={()=>{this.setState({touched: false})}}>
            <TopView>
            
            </TopView>
          </TouchableWithoutFeedback>
          {drawerView}
        </AnimatedView>
      </Wrapper>
    );
  }
}

export default BottomDrawer;
