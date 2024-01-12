// storage-service.js

const express = require('express');
const app = express();
const port = 3004;

app.use(express.json());

const qrList = [
  {
    q_id: "e7ff6fd9-883a-418c-8220-9d07e7680a03",
    url: "https://instagram.com",
    img: "https://replicate.delivery/pbxt/AC1emdf7yxq2T0xF2NsAlveIeyaP2kD2oRfVNmbHZy9KTNeiE/seed-54601.png"
  },
  {
    q_id: "e7ff6fd9-111a-418c-8220-9d07e7680a03",
    url: "https://google.com",
    img: "https://replicate.delivery/pbxt/9r8bSfd7rfpmxUpA0fkA8A1hPQoEWzetGpvIb9z33SU7nGvIB/seed-24410.png"
  }
]

app.get('/qr-list', (req, res) => {
  res.json(qrList);
});



app.listen(port, () => {
  console.log(`Storage Service is running on port ${port}`);
});
