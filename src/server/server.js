const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config/db.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.get('/bbs', (req, res) => {
  console.log('접속!')
  db.query('SELECT id, name, author, sub_date FROM article ORDER BY id DESC', (err, data) => {
    if(!err) {
      res.send(data)
    } else {
      // 추후 에러 페이지로 이동
      console.log(err);
    }
  })
})

app.get('/article/:articleId', (req, res) => {
  const articleId = req.params.articleId;
  db.query(`SELECT * FROM article WHERE id="${articleId.slice(1, articleId.length)}"`, (err, data) => {
    if(!err) {
      res.send(data)
    } else {
      console.log(err)
    }
  })
})


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT} 에서 서버가 열렸습니다!`);
})