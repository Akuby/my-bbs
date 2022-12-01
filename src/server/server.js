const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js');




app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} 에서 서버가 열렸습니다!`);
})