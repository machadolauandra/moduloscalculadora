var somar = require("./modulos/somar");
var media = require("./modulos/media");
var multiplicar = require("./modulos/multiplicar");
var dividir = require("./modulos/dividir");
var mensagem= require("./modulos/mensagem");
var nome= "lau";
var msg= "seja bem-vindo";

console.log( "a soma de x e y é: "+somar(20,90));
console.log("a média de x e y é: "+media(20,90));
console.log("o produto de x e y é: "+multiplicar(20,90));
console.log("a subtrair de x e y é: "+dividir(20,90));
console.log(mensagem(nome,msg));