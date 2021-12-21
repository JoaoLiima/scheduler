const validateData = require('../services/validate');

const formatDates = (date) => {
  const formatedBegin = validateData.isDate(date.begin);
  const formatedEnd = validateData.isDate(date.end);

  const dates = [ formatedBegin, formatedEnd ]

  return dates;
}

module.exports = formatDates;