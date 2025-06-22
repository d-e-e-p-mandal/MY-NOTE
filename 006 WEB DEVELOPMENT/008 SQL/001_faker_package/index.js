const express = require("express");
const path = require("path");
// require faker : for generate random data
const { faker } = require('@faker-js/faker');

const app = express();

const createRandomUser = ()=>{
    return {
      userId: faker.string.uuid(),
      username: faker.internet.username(), // before version 9.1.0, use userName()
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
      registeredAt: faker.date.past(),
    };
}

console.log(createRandomUser());
