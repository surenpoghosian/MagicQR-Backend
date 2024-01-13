// content-service 
const express = require('express');
const app = express();
const port = 3005;
const ContentService = require('../../Helper/ContentService')
const { v4: uuidv4 } = require('uuid');

app.use(express.json());

app.get('/generate', async (req, res) => {
    const query = req.query
      try{
        if(query?.url && query?.prompt && query?.u_id) {
          const contentService = new ContentService()
          const q_id = uuidv4();
          const output = await contentService.generateQr(query.u_id, q_id, query.url, query.prompt)
          res.json(output)
        } else {
          throw Error("Bad query")
        }
        } catch (error) {
        console.error(error);

        if (error.response) {
          // The request was made, but the server responded with a status code other than 2xx
          res.status(error.response.status).json({ error: error.response.data });
        } else if (error.request) {
          // The request was made, but no response was received
          res.status(500).json({ error: 'No response received from the external API' });
        } else {
          // Something happened in setting up the request
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
});

app.listen(port, () => {
  console.log(`Content Service is running on port ${port}`);
});
