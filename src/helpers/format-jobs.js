const validateData = require('../services/validate');

const formatedJobs = [];

const formatJobs = jobs => {
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

  return formatedJobs;
}

module.exports = formatJobs;