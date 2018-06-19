import { months } from './constants';

// Return a month string from indexed month 1-12 -> Jan-Dec
export const monthString = (month) => {
  return months[parseInt(month)]
};

// Return a formatted date string from a currently selected date
export const formatDate = (dateStr) => {
  // 2018-06-01 -> Jun 1
  let date = dateStr.split('-');
  let year = date[0], month = date[1], day = date[2];
  let now = new Date().getFullYear();
  return `${monthString(month)} ${parseInt(day)}${now !== parseInt(year) ? `, ${year}` : ''}`;
};

// Return a formatted time string 101 -> to 1hr41min
export const formatTime = (time) => {
  minutes = time % 60;
  hours = Math.floor(time / 60)
  return `${hours > 0 ? `${hours}hr` : ''}${minutes}min`;
};

// returns a javascript date object from year-month-day format
export const getDate = (dateStr) => {
  let date = dateStr.split('-');
  // year, month, day
  return new Date(date[0], date[1]-1, date[2]);
};

// Format a number string to double digits for use with the available API
// Ex: 6 -> 06 or 2018-6-1 -> 2018-06-01
export const padNumber = (number) => `${number >= 10 ? '' : '0'}${number}`;
