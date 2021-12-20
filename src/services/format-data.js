const jobs = require('../mocks/jobs.json');
const { begin, end } = require('../mocks/limitDates.json');
const validateData = require('./validate');

const formatedJobs = [];

jobs.forEach(job => {
  const formatedJob = {
    id: job.ID,
    description: job['Descrição'],
    limitDate: validateData.isDate(job),
    duration: validateData.getNumber(job)
  };

  if (formatedJob.limitDate && formatedJob.duration) {
    formatedJobs.push(formatedJob);
  }
})

module.exports = formatedJobs;