const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/get-inhabitants', (req, res) => {
  
})




app.listen(4000, () => console.log('listening on 4000'))