import express from 'express';
import path from 'path';
const app = express();
const __dirname =path.resolve();

app.use(express.json());
app.get('/hello', (req, res) => {
    res.send('Hello')
  })
  let comments = [];

  app.post('/comment/:name', (req, res, next) => {
      const name = req.params.name;
      const comment = req.body.comment;
  
      comments.push({
          name: name,
          comment: comment
      })
  
      res.send({
          message: "comment posted successfully"
      });
  
  })
  app.get('/comments', (req, res, next) => {
      res.send(comments);
  })
app.use("/static", express.static(path.join(__dirname, 'static')))
app.use('/', express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})