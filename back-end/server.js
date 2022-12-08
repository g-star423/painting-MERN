const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
const Painting = require('./models/paintings.js');

const app = express();

app.use(express.json()); // using json to make ajax requests to create req.body
app.use(cors());


// create route
app.post('/paintings', (req,res) => {
  Painting.create(req.body, (err, createdPainting) => {
    res.json(createdPainting)
  })
})

// read route
app.get('/paintings', (req,res) => {
  Painting.find({}, (err, foundPaintings) => {
    res.json(foundPaintings)
  })
})

// update route
app.put('/paintings/:id', (req, res) => {
  Painting.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedPainting) => {
    res.json(updatedPainting);
  })
})

// delete route
app.delete('/paintings/:id', (req, res) => {
  console.log(req.params)
  Painting.findByIdAndDelete(req.params.id, (err, deletedPainting) => {
    res.json(deletedPainting);
    // res.json('animal deleted')
  })
})


// LISTENER
mongoose.connect('mongodb://localhost:27017/painting-MERN')
mongoose.connection.once('open', () => {
  console.log('connected to mongosh...')
});

// PORT
app.listen(3001, () => {
  console.log('listening...')
})