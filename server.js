const express = require('express');
const app = express();
const pokemon = require('./models/pokemon');

const methodOverride = require('method-override')
app.use(express.urlencoded({ extended: false}))
app.use(express.static('public'))
app.use(methodOverride('_method'))

// INDEX
app.get('/', (req, res) => {
res.render('index.ejs', { data: pokemon });
});

//NEW
app.get('/new', (req, res)=>{
    res.render('new.ejs')
})

app.post('/', (req, res)=>{    
    pokemon.push(req.body)
    res.redirect('/')
})

//DESTROY
// app.delete('/:indexOfPokemonArray', (req, res) =>{
//     pokemon.splice(req.params.indexOfPokemonArray,1)
//     res.redirect('/')
// })


//SHOW 
app.get('/:id', (req, res) => {
res.render('show.ejs', { poke: pokemon[req.params.id] });
});



app.listen(3000, () => {
    console.log('listening');
});