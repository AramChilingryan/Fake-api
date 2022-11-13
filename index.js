const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express();
const port = 3005;

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json());

const users = [{
  username: 'aram@email.com',
  password: '12345678',
}];

app.post('/login', (req, res) => {
  const user = users.find(u => u.username === req.body.username && u.password === req.body.password)

  if (user) {
    res.status(200).json({token: 'caji1c1nc1'});
  } else {
    res.status(401).json({details: 'Unauthrized'});
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
