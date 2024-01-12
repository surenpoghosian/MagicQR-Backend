// user-service.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { v4: uuidv4 } = require('uuid');
const port = 3001;

app.use(bodyParser.json());

// Sample in-memory database
const users = [
   "5425d138-2fe5-4a9c-b22a-f6a743a469e7",
   "4b79abc2-6c5a-43c9-9d12-03ada24355b7" 
];

app.post('/create', (req, res) => {
  try{
    const uuid = uuidv4();
    res.status(201).json({userId: uuid});  
  } catch(error) {
    res.status(501)
  }
});

app.listen(port, () => {
  console.log(`User Service is running on port ${port}`);
});
