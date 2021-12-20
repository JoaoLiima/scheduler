const { begin } = require('../mocks/limitDates.json');

const validateData = {};
const jobsNotDone = [];

validateData.verifyRange = (orderedJobs, begin) => {
  let firstJob = orderedJobs[0];

  while (firstJob?.limitDate < begin) {
    console.log(`O trabalho de ID = ${firstJob.id} não será adicionado pois a data limite está fora da janela de execução`);

    jobsNotDone.push(firstJob);
    orderedJobs.shift();
    firstJob = orderedJobs[0];
    lastJob = orderedJobs[orderedJobs.length - 1];
  }
}

validateData.getDate = job => {
  const date = validateData.isDate(job['Data Máxima de conclusão']);

  if (date) return date;

  console.log(`Campo de data limite no formato incorreto, o trabalho de ID = ${job.ID} não será adicionado a agenda`);
  jobsNotDone.push(job);
  return null;
}

validateData.getNumber = job => {
  const hours = +job['Tempo estimado'].split(' ')[0];

  if (!isNaN(hours)) {
    return hours;
  }

  console.log(`Campo de horas no formato incorreto, o trabalho de ID = ${job.ID} não será adicionado a agenda`);
  jobsNotDone.push(job);
  return null;
}

validateData.isDate = date => {
  const formatedDate = new Date(date);
  
  if (formatedDate instanceof Date && !isNaN(formatedDate)) {
    return formatedDate;
  }

  console.log('Janela de execução inválida, as coisas podem ficar estranhas a partir de agora');
  return null;
}

module.exports = validateData;