//mocks
const allJobs = require('./mocks/jobs.json');
const limitDate = require('./mocks/limit-dates.json');

//helpers
const formatJobs = require('./helpers/format-jobs');
const formatDates = require('./helpers/format-dates');

//services
const schedule = require('./services/schedule');

const [ begin, end ] = formatDates(limitDate);
const jobs = formatJobs(allJobs);

const orderedJobs = jobs.sort((jobA, jobB) => {
  return jobA.limitDate < jobB.limitDate ? -1 : 1;
})

const { orderedSchedule, jobsNotDone } = schedule.organize(orderedJobs, begin, end);

console.log('Agenda de serviços: ', orderedSchedule);
console.log('Trabalhos não executados: ', jobsNotDone)