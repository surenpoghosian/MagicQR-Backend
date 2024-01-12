// storage-service.js

const express = require('express');
const app = express();
const port = 3004;
const StorageService = require('../../Helper/StorageService')

app.use(express.json());

app.get('/qr-list', async (req, res) => {
  try {
    const query = req.query
    if(query?.u_id){
      let storageService = new StorageService()
      let list = await storageService.getQrList(query.u_id)
      res.status(201).json(list)
    } else {
      throw Error("Bad Query")
    }
  } catch {
    res.status(500)
  }
});


app.listen(port, () => {
  console.log(`Storage Service is running on port ${port}`);
});
