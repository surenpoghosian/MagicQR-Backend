// analytics-service.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3003;
const AnalyticsService = require('../../Helper/AnalyticsService.js')

app.use(bodyParser.json());


app.get('/data', async (req, res) => {
  let analyticsService = new AnalyticsService()
  try {
    const query = req.query
    if(query?.q_id && query?.u_id){

      let data = await analyticsService.getAnalytics(query.u_id, query.q_id);
      res.status(200).json(data);
  
    } else {
      throw Error("Bad Query")
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/scan', async (req, res) => {
  let analyticsService = new AnalyticsService()
  try {
    const query = req.query
    if(query?.q_id && query?.u_id){

      await analyticsService.appendScanRecord(query.u_id, query.q_id)

    } else {
      throw Error("Bad Query")
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  } finally {
    res.redirect("https://instagram.com");
  }
});





app.listen(port, () => {
  console.log(`Analytics Service is running on port ${port}`);
});
