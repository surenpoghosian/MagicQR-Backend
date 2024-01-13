// // gateway | index.js

const express = require('express');
const httpProxy = require('http-proxy');
const app = express();
const port = 3000;

const userProxy = httpProxy.createProxyServer({ target: 'http://localhost:3001' });
const analyticsProxy = httpProxy.createProxyServer({ target: 'http://localhost:3003' });
const storageProxy = httpProxy.createProxyServer({ target: 'http://localhost:3004' });
const contentProxy = httpProxy.createProxyServer({ target: 'http://localhost:3005' });


app.use(express.json());

app.use('/users', (req, res) => {
  userProxy.web(req, res);
});

app.use('/analytics', (req, res) => {
  analyticsProxy.web(req, res);
});

app.use('/storage', (req, res) => {
  storageProxy.web(req, res);
});  

app.use('/content', (req, res) => {
  contentProxy.web(req, res);
});



app.listen(port, () => {
  console.log(`Gateway is running on port ${port}`);
});

