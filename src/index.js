const jobs = require('./services/format-data');
const { begin, end } = require('./mocks/limitDates.json');
const validate = require('./services/validate');
const schedule = require('./services/schedule')

const orderedJobs = jobs.sort((jobA, jobB) => {
  return jobA.limitDate < jobB.limitDate ? -1 : 1;
})

validate.verifyRange(orderedJobs, [ new Date(begin), new Date(end) ]);
console.log(schedule.organize(orderedJobs));