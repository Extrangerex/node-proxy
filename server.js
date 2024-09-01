const express = require('express');
const cors = require('cors');
const request = require('request');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/image/:fileId', (req, res) => {
  const fileId = req.params.fileId;
  const driveUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;

  request.get(driveUrl).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
