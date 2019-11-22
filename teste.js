var express = require('express');
var mustache = require('mustache-express');
var app = express();

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/jogo da velhar1');

app.get('/', function(req, res) {
    res.render( __dirname + '/html/PROJ.html');
});

// TABELA PRA DEIXAR O ARRAY COM 0c
//VARIAVEIS GLOBAIS DO VALOR

app.get('/jogar', function(req, res) {
     res.setHeader('Content-Type', 'text/html');
//FUNÇÃO PRA VER SE PODE USAR O CLICK E MUDAR O VALOR
   
      //COMEÇANDO O HTML
    res.write('<html>');
    res.write('<head>');
        //MOSTRANDO O TITULO E LINKANDO O CSS
        res.write('<meta charset="utf-8">');
        res.write('<title>jogo</title>');
    res.write('<link rel="stylesheet" type="text/css" href="/css/jogar.css">');       

     res.write('</head>');
    //COLOCANDO A IMAGEM DE FUNDO
   res.write('<body>');
  //CRIANDO UMA DIV INDENTIFICADOR PRA MOSTRAR A VEZ DE QUEM JOGOU E CHAMANDO A FUNÇÃO VEZDOJOGADOR
    res.write('<h1 class="titulo" > ROLE-PLAYING GAME(RPG)</h1>');
    res.write('<a href="/" class="voltar">"voltar "</a>');
    res.write('<div class="telaJogo">');
            res.write('<div class="jogador2">');
                res.write('<img class="img" src="charla.gif" >');
                res.write('<div class="hp2" id="hp">');
                res.write('</div>');
            res.write('</div>');
            res.write('<div class="jogador1">');
                  res.write('<img class="img" src="charli.gif">');
                  res.write('<div class="hp1" id="hp">');
                  res.write('</div>');
             res.write('</div>');
         res.write('<div class="areajogador">');
         res.write('<div class="textos">');
             res.write('<h3> "Escolha o seu ataque neste monento"</h3>');
             res.write('<div class="botoes">');
                 res.write('<button class="bt1" id="bt">"olá"</button>');
                 res.write('<button class="bt2" id="bt">"lá"</button>');
                 res.write('<button class="bt3" id="bt">"ol"</button>');
                 res.write('<button class="bt4" id="bt">"o"</button>');  
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

app.get('/sobre', function(req, res) {
    res.render( __dirname + '/html/sobre.html');
});

app.use('/css',express.static(__dirname + '/css'));

app.use(express.static('imagens'));


var port = 3000;
app.listen(port, function() {
    console.log(`Escutando na porta ${port}...`);
})