const { begin, end } = require('../mocks/limitDates.json');
const validateData = require('../services/validate');

const formatedBegin = validateData.isDate(begin);
const formatedEnd = validateData.isDate(end);

const dates = [ formatedBegin, formatedEnd ]

module.exports = dates;