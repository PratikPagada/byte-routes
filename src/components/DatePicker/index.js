import React, { Component } from 'react';
import styled, { withTheme } from 'styled-components';
import { Dimensions } from 'react-native';
import { CalendarList } from 'react-native-calendars';
import {
  Wrapper,
  Text,
} from './components';

class DatePicker extends Component {

  handleDateChange = (day) => {
    this.props.onDateChange(day.dateString);
  };

  getMarkedDates = (selectedDay) => {
    return {
      [selectedDay]: {selected: true},
    };
  };

  render(){
    const {
      selected
    } = this.props;
    const widthDimensions = Dimensions.get('window').width;

    return (
      <Wrapper>
        <CalendarList
          // Enable horizontal scrolling, default = false
          horizontal={true}
          // Enable paging on horizontal, default = false
          pagingEnabled={true}
          // Set custom calendarWidth.
          calendarWidth={widthDimensions}
          hideArrows={true}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={false}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={this.handleDateChange}
          // Calendar Theme
          theme={{
            calendarBackground: '#fff',
            textSectionTitleColor: '#b6c1cd',
            selectedDayBackgroundColor: this.props.theme.primary,
            selectedDayTextColor: '#ffffff',
            todayTextColor:  this.props.theme.primary,
            dayTextColor: '#2d4150',
            textDisabledColor: '#d9e1e8',
            dotColor: this.props.theme.primary,
            selectedDotColor: '#ffffff',
          }}
          // Dates to mark on the calendar
          markedDates={this.getMarkedDates(selected)}
        />
      </Wrapper>
    );
  }
}

export default withTheme(DatePicker);
