const jobs = require('./helpers/format-jobs');
const validate = require('./services/validate');
const schedule = require('./services/schedule')

const orderedJobs = jobs.sort((jobA, jobB) => {
  return jobA.limitDate < jobB.limitDate ? -1 : 1;
})

const scheduledJobs = schedule.organize(orderedJobs);

console.log(scheduledJobs);