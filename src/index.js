const formatJobs = require('./helpers/format-jobs');
const allJobs = require('./mocks/jobs.json');
const schedule = require('./services/schedule');

const jobs = formatJobs(allJobs);

const orderedJobs = jobs.sort((jobA, jobB) => {
  return jobA.limitDate < jobB.limitDate ? -1 : 1;
})

const { orderedSchedule, jobsNotDone } = schedule.organize(orderedJobs);

console.log('Agenda de serviços: ', orderedSchedule);
console.log('Trabalhos não executados: ', jobsNotDone)