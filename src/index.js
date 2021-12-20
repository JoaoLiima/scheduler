const [ begin, end ] = require('./helpers/format-dates');
const jobs = require('./helpers/format-jobs');
const validate = require('./services/validate');
const schedule = require('./services/schedule')

const orderedJobs = jobs.sort((jobA, jobB) => {
  return jobA.limitDate < jobB.limitDate ? -1 : 1;
})

validate.verifyRange(orderedJobs, begin);

console.log(schedule.organize(orderedJobs));