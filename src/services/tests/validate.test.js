const validateData = require('../validate');
const jobs = require('../../mocks/jobs.json');
const formatJobs = require('../../helpers/format-jobs');
const { begin } = require('../../mocks/limit-dates.json');

describe('Data validation tests', () => {
  const randomJobNumber = Math.ceil(Math.random() * jobs.length - 1);
  const testingJob = jobs[randomJobNumber];

  test('Formating dates from a job', () => {
    expect(validateData.getDate(testingJob)).toBeInstanceOf(Date); 
  })

  test('Formating dates from a string date', () => {
    expect(validateData.isDate(testingJob['Data Máxima de conclusão'])).toBeInstanceOf(Date); 
  })

  test('Extraction the number from the duration field', () => {
    const hours = validateData.getNumber(testingJob);

    expect(hours).not.toBeNaN();
    expect(hours).toBeLessThanOrEqual(8);
  })

  test('To have just the jobs after the begin date', () => {
    const formatedJobs = formatJobs(jobs);
    const orderedJobs = formatedJobs.sort((jobA, jobB) => {
      return jobA.limitDate < jobB.limitDate ? -1 : 1;
    });
    const formatedBegin = new Date(begin);

    const jobsInRange = validateData.verifyRange(orderedJobs, formatedBegin);

    jobsInRange.forEach(job => {
      expect(job.limitDate).toBeGreaterThanOrEqual(formatedBegin);
    });
  })
})