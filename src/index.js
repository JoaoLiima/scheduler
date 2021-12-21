const jobs = require('./helpers/format-jobs');
const schedule = require('./services/schedule')

const orderedJobs = jobs.sort((jobA, jobB) => {
  return jobA.limitDate < jobB.limitDate ? -1 : 1;
})

const { orderedSchedule, jobsNotDone } = schedule.organize(orderedJobs);

console.log('Agenda de serviços: ', orderedSchedule);
console.log('Trabalhos não executados: ', jobsNotDone)