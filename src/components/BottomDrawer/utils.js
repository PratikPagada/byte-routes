import React, { Component, Animated, Easing } from 'react';

export default class Utils {
  constructor(screen_height) {
    this.module = {};
    this.initialUsedSpace;
    this.tension;
    this.friction;
    this.initialPosition;
    this.callbackPositionUpdated;
    this.screen_height = screen_height;
  }

  calculateInitialPosition = (initial_space) => {
    this.initialUsedSpace = Math.abs(initial_space);
    this.initialPosition = (this.screen_height * ( 1 - this.initialUsedSpace ));
    return this.initialPosition;
  };

  getInitialUsedSpace = () => {
    return this.initialUsedSpace;
  };

  getInitialPosition = () => {
    return this.initialPosition;
  };

  setUpAnimation = (higher_tension, friction, callbackPositionUpdated) => {
    this.tension = higher_tension;
    this.friction = friction;
    this.callbackPositionUpdated = callbackPositionUpdated;
  };

  isValidMovement = (positionX, positionY) => {
    var moveTravelledFarEnough =  Math.abs(distanceY) > Math.abs(distanceX) && Math.abs(distanceY) > 2;
    return moveTravelledFarEnough;
  };

  startAnimation = (velocityY, positionY,initialPositon,id ) => {
    console.log('creating animation ');
    var isGoingToUp = (velocityY < 0 )? true : false;
    var speed = Math.abs(velocityY);
    var currentPosition = Math.abs(positionY / this.screen_height);
    var endPosition = isGoingToUp? 0 : initialPositon;

    var position = new Animated.Value(positionY);
    position.removeAllListeners();

    console.log('configuration : ' + endPosition);

    Animated.timing(position, {
       toValue: endPosition,
       tension: 30,
       friction: 1,
       //easing:Easing.elastic,
       velocity: velocityY
    }).start();

    position.addListener((position)=>{console.log('position by',position,endPosition);});
    position.addListener(this.callbackPositionUpdated);
  };
}
