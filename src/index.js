const list = require('./mock.json');

const dateBegin = new Date('2019-11-10 09:00:00');
const dateEnd = new Date('2019-11-11 12:00:00');

const orderedJobs = list.sort((jobA, jobB) => {
  return new Date(jobA['Data Máxima de conclusão']) < new Date(jobB['Data Máxima de conclusão']) ? -1 : 1;
})

const schedule = (jobs) => {
  let orderedSchedule = []
  while (jobs.length > 0) {
    let subList = jobsByDay(jobs);
    orderedSchedule.push(subList);
  }
  return orderedSchedule;
}

const jobsByDay = (jobs) => {
  const list = []
  let timeLimit = 8
  let index = 0

  while (timeLimit > 0 && index < jobs.length) {
    const job = jobs[index];
    let jobLength = job['Tempo estimado'].split(' ')[0];
    if (timeLimit - jobLength >= 0) {
      timeLimit -= jobLength;
      list.push(job.ID);
      jobs.splice(index, 1);
    }
    else {
      index++;
    }
  }
  return list;
}

console.log(schedule(orderedJobs));