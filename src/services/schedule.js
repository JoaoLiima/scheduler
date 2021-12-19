const schedule = {};

schedule.organize = jobs => {
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

module.exports = schedule;