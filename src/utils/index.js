import { months } from './constants';

export const monthString = (month) => {
  return months[parseInt(month)]
};

export const formatDate = (dateStr) => {
  // 2018-06-01 -> Jun 1
  let date = dateStr.split('-');
  let year = date[0], month = date[1], day = date[2];
  let now = new Date().getFullYear();
  return `${monthString(month)} ${parseInt(day)}${now !== parseInt(year) ? `, ${year}` : ''}`;
};
