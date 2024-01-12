// user-service.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { v4: uuidv4 } = require('uuid');
const port = 3001;
const UserService = require('../../Helper/UserService')

app.use(bodyParser.json());

app.post('/create', async (req, res) => {
  try{
    let userService = new UserService()
    const uuid = uuidv4();
    await userService.createUser(uuid)
    res.status(201).json({ userId: uuid });
  } catch(error) {
    res.status(501)
  }
});

app.listen(port, () => {
  console.log(`User Service is running on port ${port}`);
});
