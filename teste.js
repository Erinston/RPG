    //COMEÇANDO O HTML
var express = require('express');
var mustache = require('mustache-express');
var app = express();

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/RPG');

app.get('/', function(req, res) {
  vida1 = 100;
  vida2 = 100;
  res.sendFile( __dirname + '/html/index.html');
});

var nome1="Charizard";
var nome2="Spinda";
var vida1=100;
var vida2=100;



// TABELA PRA DEIXAR O ARRAY COM 0c
//VARIAVEIS GLOBAIS DO VALOR
function jogar(req, res){
    // Habilidades de fogo
  //while(vida1 >0){}
  res.setHeader('Content-Type', 'text/html');
  //FUNÇÃO PRA VER SE PODE USAR O CLICK E MUDAR O VALOR

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
        res.write('<a href="/" class="volta">voltar</a>');
        res.write('<div class="telaJogo">');
        if (vida1 <=0 || vida2 <=0) {
          if(vida1 > 0){
            res.write('<h1 class="derota">VENCEU</h1>');
          }else if(vida2 > 0){
            res.write('<h1 class="derota">Você Perdeu <br> Jogar novamente</h1>');
          }else if (vida1 <= 0 && vida2 <= 0){
            res.write('<h1 class="derota">empate <br> Jogar novamente</h1>');
          }else{
            res.write('<h1 class="derota">empate</h1>');
            res.write('<h1 class="derota">Jogar novamente</h1>');

          }
        }

        res.write('<div class="jogador2">');
            if (vida1 <= 0 && vida2 <= 0) {
              res.write('<img class="img" src="charla.gif" class = "vence" >');
            }
        
            if (vida2>0) {
              res.write('<img class="img" src="charla.gif" class = "vence" >');
            }else{

            }
                if(vida1 >0 && vida2 >0){
              res.write('<div class="hp2" id="hp">');
                res.write("NOME:"+nome1);
                res.write('<br>');
                res.write("HP:"+ vida2);
              res.write('</div>');
              }
              res.write('</div>');
            res.write('<div class="jogador1">');
            if(vida1>0){
              res.write('<img class="img" src="charli.gif" class = "vence" >');
            }
            if (vida1 <= 0 && vida2 <= 0) {
              res.write('<img class="img" src="charli.gif" class = "vence" >');
            } 
              if(vida1 >0 && vida2 >0){
           
              res.write('<div class="hp1" id="hp">');
                res.write("NOME:"+nome2);
                res.write('<br>');
                res.write("HP:" +vida1);
              res.write('</div>');             
            }
              res.write('</div>');
            res.write('<div class="areajogador">');

if (vida1 > 0 && vida2 > 0) {
                res.write('<div class="textos">');
                      res.write('<h3>Escolha o seu ataque neste momento</h3>');
                res.write('</div>');
                res.write('<div class="bt">');
                  res.write('<a href="/fogo" class="bt1" id="bt">Fogo</a>');
                  res.write('<a href="/agua" class="bt2" id="bt">Água</a>');
                  res.write('<br>');
                  res.write('<br>');
                  res.write('<a href="/terra" class="bt3" id="bt">Terra</a>');
                res.write('<a href="/vento" class="bt4" id="bt">Vento</a>');  
                res.write('</div>');

}
if (vida1 <= 0 || vida2 <= 0) {

                 // vida1=100; 
                 // vida2=100;; 
                  res.write('<div class="fimLuta">');
                    res.write('<a href="/reiniciar" class="b3" id="bt"> reiniciar<a/>');
                    res.write('<a href="/" class="bt2" id="bt">Sair<a/>');
                  res.write('</div>');
                }


              res.write('</div>');
              res.write('</div>');
              res.write('</div>');
              res.write('</div>');
            res.write('</div>');
          res.write('</div>');
            //CRIANDO A TABELA E LINKANDO DANDO A CLASSE TABULEIRO

    res.write('</body>');
    res.write('</html>');
                  res.write('<br>');
                  res.write('<br>');

    res.end();
}
app.get('/jogar', function(req, res) {
  jogar(req,res);
  
  });

app.get('/fogo', function(req, res) {
 //impressao do valor no console do node
  random1 = Math.floor(Math.random() * (30 - 10)); 
  random2 = Math.floor(Math.random() * (30 - 10)); 
  vida1 = vida1 - random1;
  vida2 = vida2 - random2;
  res.redirect('/jogar');        
 
  });
  // Habilidades de água
app.get('/agua', function(req, res) {
  random1 = Math.floor(Math.random() * (30 - 10)); 
  random2 = Math.floor(Math.random() * (30 - 10)); 
  vida1 = vida1 - random1;
  vida2 = vida2 - random2;
  //impressao do valor no console do node
  res.redirect('/jogar');        
});
// Habilidades de Terra
app.get('/terra', function(req, res) {
  random1 = Math.floor(Math.random() * (30 - 10)); 
  random2 = Math.floor(Math.random() * (30 - 10)); 
  vida1 = vida1 - random1;
  vida2 = vida2 - random2;
  //impressao do valor no console do node
   res.redirect('/jogar');        
});
app.get('/reiniciar', function(req, res) {
    vida1 = 100;
    vida2 = 100;
   res.redirect('/jogar');
});
// Habilidades de Vento
app.get('/vento', function(req, res) {
  random1 = Math.floor(Math.random() * (30 - 10)); 
  random2 = Math.floor(Math.random() * (30 - 10)); 
  vida1 = vida1 - random1;
  vida2 = vida2 - random1;
  //impressao do valor no console do node
   res.redirect('/jogar');
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
