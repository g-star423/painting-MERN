const express = require('express')
// const mongoose = require('mongoose');
// const cors = require('cors');

const app = express();

app.use(express.json()); // using json to make ajax requests to create req.body
// app.use(cors());


// create route
app.get('/paintings', (req,res) => {
  // Painting.create(req.body, (err, createdPainting) => {
    res.send('hello')
  })
// })











// LISTENER
mongoose.connect('mongodb://localhost:27017/painting-MERN')
mongoose.connection.once('open', () => {
  console.log('connected to mongosh...')
});

// PORT
app.listen(3001, () => {
  console.log('listening...')
})