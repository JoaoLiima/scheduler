const validateData = {};

validateData.verifyRange = (orderedJobs, limitDates) => {
  let firstJob = orderedJobs[0];
  let lastJob = orderedJobs[orderedJobs.length - 1];
  const [ begin, end ] = limitDates;
  const jobsNotDone = [];

  while (new Date(firstJob['Data Máxima de conclusão']) < begin) {
    console.log('Existem trabalhos com data de início anterior à data de início da janela de execução, ' + 
      'eles serão adicionados a lista de trabalhos não executados');

    jobsNotDone.push(firstJob);
    orderedJobs.shift();
    firstJob = orderedJobs[0];
    lastJob = orderedJobs[orderedJobs.length - 1];
  }

  while (new Date(lastJob['Data Máxima de conclusão']) > end) {
    console.log('Existem trabalhos com data de término posterior à data de término da janela de execução, ' + 
      'eles serão adicionados a lista de trabalhos não executados');

    jobsNotDone.push(lastJob);
    orderedJobs.pop();
    lastJob = orderedJobs[orderedJobs.length - 1];
  }

  return jobsNotDone;
}

module.exports = validateData;