const readline = require("readline");
let numeros = new Array();

let lectorLinea = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

lectorLinea.question('ingrese el numero: ',function(numero){
    for (var i = 1; i <= numero; i++) {
        if (i % 2 != 0) {
          numeros[i] = i;
        } else {
          numeros[i] = "";
        }
      }
      console.log(numeros);
      lectorLinea.close();    
});



  


