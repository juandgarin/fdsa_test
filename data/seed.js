const fs = require('fs');
const path = require('path');
const { faker } = require('@faker-js/faker');
const md5 = require('md5');

function createDestinations(limit = 5) {
  const result = [];

  for (let i = 0; i < limit; i++) {
    const name = faker.address.state();
    const description = faker.lorem.sentence();
    const countryCode = faker.address.countryCode();
    const destinationType = {
      country: faker.address.country(),
      city: faker.address.city(),
    }
    const lastModify = faker.date.recent();
    result.push({
      id: faker.datatype.uuid(),
      name,
      description,
      countryCode,
      destinationType,
      lastModify,
    });
  }

  return result;
}

function main() {
  const data = {
    destinations: createDestinations(),
  };

  fs.writeFileSync(
    path.resolve(__dirname, 'db.json'),
    JSON.stringify(data, null, 4)
  );
}

main();
