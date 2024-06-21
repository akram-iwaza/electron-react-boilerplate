const fs = require('fs');
const { faker } = require('@faker-js/faker');

const generateTasks = (num) => {
  const tasks = [];
  for (let i = 0; i < num; i++) {
    const task = {
      id: i + 1,
      taskname: faker.hacker.verb() + ' ' + faker.hacker.noun(),
      walletname: faker.finance.accountName(),
      proxyname: faker.internet.ip(),
    };
    tasks.push(task);
  }
  return tasks;
};

const tasks = generateTasks(1000);
fs.writeFileSync('data.json', JSON.stringify(tasks, null, 2), 'utf-8');
console.log('Generated 1000 tasks and saved to data.json');
