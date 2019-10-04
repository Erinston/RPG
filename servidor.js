var express = require('express');
var mustache = require('mustache-express');
var app = express();

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/RPG');

app.get('/index.html', function(req, res) {
    res.sendFile( __dirname + '/html/index.html');
});

app.get('/jogar.html', function(req, res) {
    res.render( __dirname + '/html/jogar.html');
});

app.get('/ajuda.html', function(req, res) {
    res.render( __dirname + '/html/ajuda.html');
});

app.get('/sobrenovo.html', function(req, res) {
    res.render( __dirname + '/html/sobrenovo.html');
});

app.use('/css',express.static(__dirname + '/css'));

app.use(express.static('imagens'));







var port = 3000;
app.listen(port, function() {
    console.log(`Escutando na porta ${port}...`);
})