// analytics-service.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3003;
const AnalyticsService = require('../../Helper/AnalyticsService.js')

app.use(bodyParser.json());

const analyticsData = [];

const handleUpdate = (eventData) => {
  analyticsData.push(eventData);
  console.log('Update logic executed');
  console.log(analyticsData)
};

app.get('/data', async (req, res) => {
  let analyticsService = new AnalyticsService()
  try {
    const query = req.query
    if(query?.q_id && query?.u_id){

      let data = await analyticsService.getAnalytics(query.u_id, query.u_id);
      console.log(data);
      res.status(200).json(data); // Assuming you want to send the data as JSON
    } else {
      throw Error("Bad Query")
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/scan', (req, res) => {
  console.log(req)
  const eventData = { message: 'Some update data' };
  handleUpdate(eventData)
  res.redirect("https://instagram.com");
});

app.listen(port, () => {
  console.log(`Analytics Service is running on port ${port}`);
});
