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

validateData.isDate = job => {
  const date = new Date(job['Data Máxima de conclusão']);
  
  if (date instanceof Date && !isNaN(date)) {
    return date;
  }

  console.log(`Campo de data limite no formato incorreto, o trabalho de ID = ${job.ID} não será adicionado a agenda`);
  return null;
}

validateData.getNumber = job => {
  const hours = +job['Tempo estimado'].split(' ')[0];

  if (!isNaN(hours)) {
    return hours;
  }

  console.log(`Campo de horas no formato incorreto, o trabalho de ID = ${job.ID} não será adicionado a agenda`);
  return null;
}

module.exports = validateData;