var express = require('express');
var mustache = require('mustache-express');
var app = express();

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/RPG');

app.get('/', function(req, res) {
    res.sendFile( __dirname + '/html/index.html');
});

// TABELA PRA DEIXAR O ARRAY COM 0c
//VARIAVEIS GLOBAIS DO VALOR

app.get('/jogar', function(req, res) {
     res.setHeader('Content-Type', 'text/html');

	// Habilidades de fogo
	app.get('/fogo', function(req, res) {
		vida1 = vida1 - 20;
        console.log(`${vida1}`); //impressao do valor no console do node
		// res.redirect('/jogar');
	});
	// Habilidades de água
	app.get('/agua', function(req, res) {
		vida1 = vida1 - 10;
		console.log(`${vida1}`); //impressao do valor no console do node
		// res.redirect('/jogar');
	});
	// Habilidades de Terra
	app.get('/terra', function(req, res) {
		vida1 = vida1 - 40;
		console.log(`${vida1}`); //impressao do valor no console do node
		// res.redirect('/jogar');
	});
	// Habilidades de Vento
	app.get('/vento', function(req, res) {
		vida1 = vida1 - 30;
		console.log(`${vida1}`); //impressao do valor no console do node
		// res.redirect('/jogar');
	});

	//FUNÇÃO PRA VER SE PODE USAR O CLICK E MUDAR O VALOR
	var vida1;
	var vida2;
	if (vida1 == undefined) { vida1 = 1000;}
	if (vida2 == undefined) { vida2 = 1000;}
	//while(vida1 >0){}
   	//COMEÇANDO O HTML
    res.write('<html>');
    res.write('<head>');
        //MOSTRANDO O TITULO E LINKANDO O CSS
        res.write('<meta charset="utf-8">');
        res.write('<title>jogo</title>');
    res.write('<link rel="stylesheet" type="text/css" href="../css/jogar.css">');


     res.write('</head>');
    //COLOCANDO A IMAGEM DE FUNDO
   res.write('<body>');
  //CRIANDO UMA DIV INDENTIFICADOR PRA MOSTRAR A VEZ DE QUEM JOGOU E CHAMANDO A FUNÇÃO VEZDOJOGADOR
    res.write('<h1 class="titulo" > ROLE-PLAYING GAME(RPG)</h1>');
    res.write('<a href="/">voltar</a>');
    res.write('<div class="telaJogo">');
            res.write('<div class="jogador2">');
                res.write('<img class="img" src="charla.gif" >');
                res.write('<div class="hp2" id="hp">');
                res.write("HP:" +`${vida1}`);
                res.write('</div>');
            res.write('</div>');
            res.write('<div class="jogador1">');
                  res.write('<img class="img" src="charli.gif">');
                  res.write('<div class="hp1" id="hp">');
                  res.write("HP:" +`${vida2}`);
                  res.write('</div>');
            res.write('</div>');
         res.write('<div class="areajogador">');
         res.write('<div class="textos">');
             res.write('<h3> "Escolha o seu ataque neste monento"</h3>');
             res.write('<div class="botoes">');
                 res.write('<a href="/fogo" class="bt1" id="bt">"Fogo"</1>');
                 res.write('<a href="/agua" class="bt2" id="bt">"Água"</br>');
                 res.write('<a href="/terra" class="bt3" id="bt">"Terra"</button>');
                 res.write('<a href="/vento" class="bt4" id="bt">"Vento"</br>');
             res.write('</div>');
            res.write('</div>');
           res.write('</div>');
          res.write('</div>');
      //CRIANDO A TABELA E LINKANDO DANDO A CLASSE TABULEIRO

    res.write('</body>');
    res.write('</html>');

    res.end();
});


app.get('/ajuda', function(req, res) {
    res.render( __dirname + '/html/ajuda.html');
});
app.get('/index', function(req, res) {
    res.render( __dirname + '/html/index.html');
});

app.get('/sobrenovo', function(req, res) {
    res.render( __dirname + '/html/sobrenovo.html');
});

app.use('/css',express.static(__dirname + '/css'));

app.use('/imagens',express.static(__dirname + '/imagens'));

app.use(express.static('imagens'));


var port = 3000;
app.listen(port, function() {
    console.log(`Escutando na porta ${port}...`);
})
