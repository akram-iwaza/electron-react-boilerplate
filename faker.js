const fs = require('fs');
const { faker } = require('@faker-js/faker');

const generateTasks = (num, startId) => {
  const tasks = [];
  for (let i = 0; i < num; i++) {
    const task = {
      id: startId + i,
      taskname: faker.hacker.verb() + ' ' + faker.hacker.noun(),
      walletname: faker.finance.accountName(),
      proxyname: faker.internet.ip(),
    };
    tasks.push(task);
  }
  return tasks;
};

const refactorData = (groups) => {
  const result = [];
  let startId = 1;
  groups.forEach((group, index) => {
    const tasks = generateTasks(group.count, startId);
    startId += group.count;
    const groupName = `Group ${index + 1}`;
    result.push({
      name: groupName,
      groupData: tasks,
    });
  });
  return result;
};

const groups = [{ count: 1000 }, { count: 2000 }, { count: 5000 }];

const groupedData = refactorData(groups);

fs.writeFileSync('data.json', JSON.stringify(groupedData, null, 2), 'utf-8');
console.log('Generated and grouped tasks, saved to data.json');
