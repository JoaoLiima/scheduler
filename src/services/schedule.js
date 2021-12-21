const validate = require('../services/validate');
const [ begin, end ] = require('../helpers/format-dates');

const schedule = {};

schedule.organize = jobs => {
  let index = 0;
  const hoursByDay = getHoursByDay(begin, end);

  const jobsNotDone = validate.verifyRange(jobs, begin, end);
  let orderedSchedule = []

  while (jobs.length > 0 && hoursByDay[index]) {
    let subList = jobsByDay(jobs, hoursByDay[index]);
    orderedSchedule.push(subList);
    index++;
  }

  jobsNotDone.push(...jobs.map(job => job.id));

  return { orderedSchedule, jobsNotDone };
}

const jobsByDay = (jobs, timeLimit) => {
  const list = [];
  let index = 0;

  while (timeLimit > 0 && index < jobs.length) {
    const job = jobs[index];
    if (timeLimit - job.duration >= 0) {
      timeLimit -= job.duration;
      list.push(job.id);
      jobs.splice(index, 1);
    }
    else {
      index++;
    }
  }
  return list;
}

const getHoursByDay = (begin, end) => {
  const hours = [];
  const days = end.getDate() - begin.getDate() + 1;
  
  for(let i = 0; i < days; i++) {
    if (i === 0) {
      const availableHours = 24 - begin.getHours();
      availableHours <= 8 ? hours.push(availableHours) : hours.push(8);
    } else if (i === days - 1) {
      const availableHours = end.getHours();
      availableHours <= 8 ? hours.push(availableHours) : hours.push(8);
    } else {
      hours.push(8);
    }
  }
  
  return hours;
}

module.exports = schedule;