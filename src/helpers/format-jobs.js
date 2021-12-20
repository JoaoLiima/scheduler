const jobs = require('../mocks/jobs.json');
const validateData = require('../services/validate');

const formatedJobs = [];

jobs.forEach(job => {
  const formatedJob = {
    id: job.ID,
    description: job['Descrição'],
    limitDate: validateData.getDate(job),
    duration: validateData.getNumber(job)
  };

  if (formatedJob.limitDate && formatedJob.duration) {
    formatedJobs.push(formatedJob);
  }
})

module.exports = formatedJobs;