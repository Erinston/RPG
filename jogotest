const express = require('express');
var mustache = require('mustache-express');
const session = require('express-session');
const url = require('url');
const router =  express.Router();
let parts;
let query;


var mapa =[
        [ 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [ 1,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,4,11,11,11,1],
        [ 1,11,11,11,11,11,11,11,11,11,11,15,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,1],
        [ 1,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,1],
        [ 1,12,11,11,0,0,0,0,3,0,0,3,3,0,3,3,3,0,0,3,3,3,3,3,0,0,0,0,0,0,11,11,11,11,11,11,1],
        [ 1,11,11,11,0,5,10,10,3,3,0,0,3,0,3,3,0,0,0,0,3,3,3,3,0,0,0,0,0,11,11,11,11,11,11,11,1],
        [ 1,11,11,11,0,10,2,2,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,11,11,11,11,11,11,11,11,1],
        [ 1,11,11,11,3,10,2,2,2,10,0,3,3,3,0,0,0,0,3,0,0,3,0,0,0,0,3,11,11,11,11,11,0,11,11,11,1],
        [ 1,11,11,11,3,3,10,2,2,2,3,2,2,2,3,0,0,3,0,0,0,0,3,0,0,3,11,11,11,11,11,0,3,11,11,11,1],
        [ 1,11,11,11,3,3,3,10,2,2,2,2,2,2,2,3,0,0,3,3,0,3,0,0,0,11,12,11,11,11,3,0,3,11,11,11,1],
        [ 1,11,11,11,3,3,0,3,10,2,2,2,2,2,2,3,0,0,0,0,0,0,0,0,11,11,11,11,11,3,3,0,3,11,11,11,1],
        [ 1,11,11,11,3,3,0,3,3,10,2,2,2,10,3,0,0,0,0,3,0,0,3,11,11,11,11,11,0,3,3,0,0,11,11,11,1],
        [ 1,11,11,11,0,0,0,0,0,3,10,2,2,2,10,0,0,0,0,0,3,3,11,11,11,11,11,0,0,0,0,3,0,11,11,11,1],
        [ 1,11,11,11,3,3,0,3,0,0,0,10,2,2,2,10,0,0,0,0,0,11,11,11,11,11,3,0,3,0,0,3,0,11,11,11,1],
        [ 1,11,11,11,3,3,0,3,3,0,3,0,10,2,2,2,10,0,0,3,11,11,11,11,11,3,3,0,3,3,0,0,0,11,11,11,1],
        [ 1,11,11,11,3,3,0,3,3,0,3,3,0,10,2,2,2,10,3,11,12,11,11,11,0,3,0,0,0,0,0,0,0,12,11,11,1],
        [ 1,11,11,11,3,3,0,3,3,0,3,3,0,3,10,2,10,3,11,11,11,11,11,0,0,0,0,0,0,0,3,3,3,11,11,11,1],
        [ 1,11,11,12,3,3,0,0,0,0,3,3,0,3,3,10,3,11,11,11,11,11,3,0,0,3,3,3,3,0,3,3,3,11,11,11,1],
        [ 1,11,11,11,3,3,3,0,3,3,3,3,0,0,0,3,12,11,11,11,11,3,3,0,0,3,3,0,0,0,0,3,3,11,11,11,1],
        [ 1,11,11,11,3,3,3,0,0,0,0,0,0,3,0,11,11,11,11,11,3,10,3,0,0,3,3,0,3,3,0,3,3,11,11,11,1],
        [ 1,11,11,11,0,0,0,0,0,3,3,0,3,3,11,11,11,11,11,3,10,2,10,0,0,3,3,0,3,3,0,3,3,11,11,11,1],
        [ 1,11,11,11,0,0,0,3,0,0,3,0,3,11,11,11,11,11,3,10,2,2,2,10,0,3,0,0,3,3,0,3,3,11,11,11,1],
        [ 1,11,11,11,3,3,0,3,0,0,0,0,11,11,11,11,11,0,0,3,10,2,2,2,10,0,0,0,0,3,0,3,3,11,11,11,1],
        [ 1,11,11,11,3,3,0,3,3,3,0,12,11,11,11,11,3,3,0,0,0,10,2,2,2,10,3,3,0,0,0,0,0,11,11,11,1],
        [ 1,11,11,11,3,3,0,3,3,3,11,11,11,11,11,3,0,0,3,0,0,3,2,2,2,2,10,3,0,0,0,3,3,11,11,11,1],
        [ 1,11,11,11,3,3,0,3,3,11,11,11,11,11,0,0,0,0,0,0,3,2,2,2,2,2,2,10,3,0,0,3,3,11,11,11,1],
        [ 1,11,12,11,0,3,0,3,11,11,11,11,11,0,0,0,3,3,0,0,3,2,2,2,2,2,2,2,10,3,3,3,3,11,11,11,1],
        [ 1,8,8,8,0,0,0,11,11,11,11,11,3,0,3,0,0,0,3,0,0,3,2,2,2,3,2,2,2,10,3,3,3,11,11,11,1],
        [ 1,8,8,8,8,0,11,11,11,11,11,3,0,0,3,0,0,3,0,0,0,0,3,3,3,0,10,2,2,2,10,3,3,11,11,11,1],
        [ 1,8,8,8,8,9,11,11,11,11,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,10,2,2,10,3,0,11,11,12,1],
        [ 1,8,8,8,8,8,8,11,11,0,3,3,3,0,0,0,0,0,0,0,0,3,3,3,0,0,0,0,10,10,0,0,0,11,11,11,1],
        [ 1,8,9,8,8,8,8,8,0,0,3,3,0,0,0,3,3,3,3,0,0,0,0,0,0,0,3,0,0,3,0,0,0,11,11,11,1],
        [ 1,8,8,8,8,8,8,8,8,0,3,3,0,0,0,3,3,3,3,3,7,0,3,3,3,0,3,3,0,3,0,0,0,11,11,11,1],
        [ 1,8,8,8,9,8,8,8,8,9,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,1],
        [ 1,8,8,8,8,8,8,8,8,8,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,1],
        [ 1,8,8,8,8,8,8,8,8,8,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,1],
        [ 1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];



const host = 'localhost';
const porta = 3000;

var app = express();
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + 'rpg');
app.use(session({ secret: 'rpg', resave: false, saveUninitialized: true }));

console.log(__dirname);

app.use(express.static(__dirname));

app.get('/jogar', function(req, res, next) {

	if (req.session.mapa == null) {

		
		console.log("inicializou a sessao");

		req.session.mapa = mapa;
	}if(req.session.player == null){
        req.session.player = [35,1];
    }if(req.session.vida){   
       req.session.vida;
    }
	console.log(req.session.vida);
	console.log(req.session.mapa);
	var array = req.session.mapa;
	
	res.setHeader('Content-Type', 'text/plain'); 

	res.statusCode = 200;
   res.setHeader('Content-Type', 'text/html');

     
    res.write('<html>');
    res.write(`<link rel="stylesheet" href="/css.css" media="screen" charset="utf-8">`);
    res.write('<body>');
		res.write('<table>');
	
	for (var i = 0; i < array.length; i++) {
		res.write('<tr>');
		for (var j = 0; j < array[i].length; j++) {
            if(i == req.session.player[0] && j == req.session.player[1] && array[i][j]==0) {
                res.write(`<td class='grama'><div class='player'; style='top:`+i*32+`px;'></div>`);
            }else if(i == req.session.player[0] && j == req.session.player[1] && array[i][j]==8) {
                res.write(`<td class='ciment'><div class='player'; style='top:`+i*32+`px;'></div>`);
            }else if(i == req.session.player[0] && j == req.session.player[1] && array[i][j]==11) {
                res.write(`<td class='mid'><div class='player'; style='top:`+i*32+`px;'></div>`);
            }else if(i == req.session.player[0] && j == req.session.player[1] && array[i][j]==3) {
                res.write(`<td class='grama'><div class='player' style='top:`+i*32+`px;';><div class='arbusto2'></div></div>`);
            }else if(i == req.session.player[0] && j == req.session.player[1] && array[i][j]==2) {
                res.write(`<td class='agua'><div class='player'; style='top:`+i*32+`px;'></div>`);
            }else if(i == req.session.player[0] && j == req.session.player[1] && array[i][j]==10) {
                res.write(`<td class='ensop'><div class='player'; style='top:`+i*32+`px;'></div>`);
            }else if(i == req.session.player[0] && j == req.session.player[1] && array[i][j]==12) {
                res.write(`<td class='mid'><div class='player';><div class='torre';></div></div>`);
            }else if(i == req.session.player[0] && j == req.session.player[1] && array[i][j]==8) {
                res.write(`<td class='ciment'><div class='player';><div class='torre';></div></div>`);
                }else if(array[i][j]==0){
                    res.write(`<td class="grama">`);
                }else if (array[i][j]==1){
                    res.write(`<td class="muro">`);
                }else if(array[i][j]==2){
                    res.write(`<td class="agua">`);
                }else if(array[i][j]==3){
                    res.write(`<td class='grama'><div class='arbusto2';></div>`);
                }else if(array[i][j]==4){
                    res.write(`<td class="mid"><div class='boss';></div>`);
                }else if(array[i][j]==5){
                    res.write(`<td class='grama'><div class='arvore';></div>`);
                }else if(array[i][j]==6){
                    res.write(`<td class='grama'><div class='arvore1';></div>`);
                }else if(array[i][j]==7){
                    res.write(`<td class='grama'><div class='torre';></div>`);
                }else if(array[i][j]==8){
                    res.write(`<td class='ciment'>`);
                }else if(array[i][j]==9){
                    res.write(`<td class='ciment'><div class='torre';></div>`);
                }else if(array[i][j]==10){
                    res.write(`<td class='ensop'>`);
                }else if(array[i][j]==11){
                    res.write(`<td class='mid'>`);
                }else if(array[i][j]==12){
                    res.write(`<td class='mid'><div class='torre';></div>`);
                }else if(array[i][j]==13){
                    res.write(`<td class='grama'><div class='arbusto2';><div class='torre';></div></div>`);
                }else if(array[i][j]==14){
                    
                }else if(array[i][j]==15){
                    res.write(`<td class='mid'><div class='bat'>CLIQUE NA LINHA 1,COLUNA 32 PARA INICIAR A BATALHA</div>`);
                }

      res.write(`<a href=/get/${i}/${j} style='top:`+i*32+`px;'>`);
			res.write(`${array[i][j]}`);
			res.write('</a>');
			res.write('</td>');
		
		}

		res.write('</tr>');
	}
	
	res.write('</table>');
    res.write('</body>');
    res.write('</html>');
    res.end();
	
});

app.get('/get/1/32', function(req, res, next) {
    array = req.session.mapa;

    var obj = req.url.split('/get/1/d2');
    console.log(obj);
    
    var linha = obj[2];
    var coluna = obj[3];
  
    res.setHeader('Content-Type', 'text/plain'); 
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    res.write('<html>');
    res.write(`<link rel="stylesheet" href="/batalha.css" media="screen" charset="utf-8">`);
    res.write('<body>');


    res.write('<div class="player" id="d2"></div>');
    res.write('<a class="aaa" href="d2">');
     
            

    if (req.session.vida == undefined || req.session.vida == "<a href='http://localhost:3000'>reiniciar</a>"){
        req.session.vida = 100 ;
         var vida  =  req.session.vida; 

    }else if (req.session.vida <= 100 &&  req.session.vida != 0) {
             req.session.vida = req.session.vida - 10;
    
    }else if(req.session.vida == 0){
       	    req.session.vida= 100;	
	    req.session.morreu= true;
    }
    
    var vida = req.session.vida;
    
    if (req.session.morreu == undefined) {
        res.write(`<div class='boss'><div class='vida'>`+vida+`</div></div>`);
    }
    req.session.morreu = undefined;
    req.session.vida;
    req.session.mapa;
 
    res.write('<a href="http://localhost:3000">Clique aqui quando o BOSS morrer</a>');

    res.write('</body>');
    res.write('</html>');
    res.end  ();
    
});
    app.get('/get/1/d2/', function(req, res, next){
            array = req.session.mapa;
    res.redirect('/get/1/32');


    });


app.get('/get/*', function(req, res, next) {
	array = req.session.mapa;
	
	var obj = req.url.split('/');
    console.log(obj);
	var linha = obj[2];
	var coluna = obj[3];
  	req.session.player = [linha, coluna];
	res.redirect("/jogar");
});


app.listen(3000, () => {
  console.log('Escutando localhost:3000');
})

