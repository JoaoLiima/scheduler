const schedule = require('../schedule');

describe('Scheduling jobs test', () => {
  const mockJobs = [
    {
      id: 1,
      description: 'Importação de arquivos de fundos',
      limitDate: '2019-11-10T15:00:00.000Z',
      duration: 2
    },
    {
      id: 3,
      description: 'Importação de dados de integração',
      limitDate: '2019-11-11T11:00:00.000Z',
      duration: 6
    },
    {
      id: 2,
      description: 'Importação de dados da Base Legada',
      limitDate: '2019-11-11T15:00:00.000Z',
      duration: 4
    },
    {
      id: 4,
      description: 'Importação de dados da Base Legada',
      limitDate: '2019-11-11T15:00:00.000Z',
      duration: 6
    },
    {
      id: 5,
      description: 'Importação de dados da Base Legada',
      limitDate: '2019-11-11T15:00:00.000Z',
      duration: 6
    }
  ];

  const begin = new Date('2019-11-10 09:00:00');
  const end = new Date('2019-11-12 08:00:00');

  const { orderedSchedule, jobsNotDone } = schedule.organize(mockJobs, begin, end);

  test('Scheduling jobs according to range of dates', () => {
    expect(orderedSchedule).toEqual([[1, 3], [2], [4]])
  })

  test('Get jobs not done', () => {
    expect(jobsNotDone).toEqual([ 5 ])
  })
})