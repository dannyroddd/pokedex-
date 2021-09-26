const express = require('express');
const app = express();
const pokemon = require('./models/pokemon');

const methodOverride = require('method-override')
app.use(express.urlencoded({ extended: false}))
app.use(express.static('public'))
app.use(methodOverride('_method'))

// INDEX
app.get('/pokemon', (req, res) => {
res.render('index.ejs', { data: pokemon });
});

//DESTROY
app.delete('/pokemon/:indexOfPokemonArray', (req, res) =>{
    pokemon.splice(req.params.indexOfPokemonArray,1)
    res.redirect('/pokemon')
})

  //EDIT 
app.get("/pokemon/:indexOfPokemonArray/edit", (req, res) => {
    res.render("edit.ejs", {
        pokedex: pokemon[req.params.indexOfPokemonArray],
        index: req.params.indexOfPokemonArray
    })
  })
  
  //UPDATE
app.put('/pokemon/:indexOfPokemonArray', (req, res)=>{
    pokemon[req.params.indexOfPokemonArray] = req.body
    res.redirect('/pokemon')
  })


//NEW
app.get('/pokemon/new', (req, res)=>{
    res.render('new.ejs')
})

app.post('/pokemon', (req, res)=>{    
    pokemon.push(req.body)
    res.redirect('/pokemon')
})

//SHOW 
app.get('/pokemon/:id', (req, res) => {
res.render('show.ejs', { poke: pokemon[req.params.id] });
});



app.listen(3000, () => {
    console.log('listening');
});