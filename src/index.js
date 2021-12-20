const [ begin, end ] = require('./helpers/format-dates');
const jobs = require('./helpers/format-jobs');
const validate = require('./services/validate');
const schedule = require('./services/schedule')

const orderedJobs = jobs.sort((jobA, jobB) => {
  return jobA.limitDate < jobB.limitDate ? -1 : 1;
})

validate.verifyRange(orderedJobs, begin, end);
const scheduledJobs = schedule.organize(orderedJobs);

validate.verifyJobsThatCanBeDone(scheduledJobs, begin, end);