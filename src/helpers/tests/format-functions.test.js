const formatDates = require('../format-dates');
const limitDates = require('../../mocks/limit-dates.json');
const formatJobs = require('../format-jobs');
const jobs = require('../../mocks/jobs.json');

describe('Formating functions', () => {
  test('Formating limit dates', () => {
    const [ begin, end ] = formatDates(limitDates);

    expect(begin && end).toBeInstanceOf(Date);
  });
  
  test('Formating the jobs array', () => {
    const formatedJobs = formatJobs(jobs);

    formatedJobs.forEach(job => {
      expect(job).toHaveProperty('id');
      expect(job).toHaveProperty('description');
      expect(job).toHaveProperty('limitDate');
      expect(job).toHaveProperty('duration');
    })
  });
})