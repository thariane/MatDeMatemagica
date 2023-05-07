
let btnFib = document.getElementById("btn-fib");
let inputFib = document.getElementById("inputFib");
let saidaFib = document.getElementById("saidaFib");

let btnFat = document.getElementById("btn-fatorial");
let inputFat = document.getElementById("inputFat");
let saidaFat = document.getElementById("saidaFat");

btnFat.addEventListener("click", function(e){
    let input = Number(inputFat.value);
    let aux = input;
    let resultado = 1;
    for (let i = 0; i < input; i++) {
        resultado = resultado * aux;
        aux--;
    }    
    saidaFat.innerHTML = resultado; 
});

btnFib.addEventListener("click", function(e){
    let auxInput = Number(inputFib.value);
    let primeiro = 0;
    let segundo = 1;
    let terceiro = 0;
    let lista = [primeiro, segundo];
    for (let i = 0; i < auxInput - 1; i++) {
        terceiro = primeiro + segundo;
        primeiro = segundo;
        segundo = terceiro;
        lista.push(terceiro);
    }
    if(auxInput !== 0){
        saidaFib.innerHTML = lista;        
    }
});