const jobs = require('./mocks/jobs.json');
const { begin, end } = require('./mocks/limitDates.json');
const validate = require('./services/validate');
const schedule = require('./services/schedule')

const orderedJobs = jobs.sort((jobA, jobB) => {
  return new Date(jobA['Data Máxima de conclusão']) < new Date(jobB['Data Máxima de conclusão']) ? -1 : 1;
})

validate.verifyRange(orderedJobs, [ new Date(begin), new Date(end) ]);
console.log(schedule.organize(orderedJobs));