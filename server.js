const express = require('express');
const app = express();
const pokemon = require('./models/pokemon');


// INDEX
app.get('/', (req, res) => {
res.render('index.ejs', { data: pokemon });
});


//SHOW 
app.get('/:id', (req, res) => {
res.render('show.ejs', { poke: pokemon[req.params.id] });
});



app.listen(3000, () => {
    console.log('listening');
});