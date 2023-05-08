
let btnFib = document.getElementById("btn-fib");
let inputFib = document.getElementById("inputFib");
let saidaFib = document.getElementById("saidaFib");

let btnFat = document.getElementById("btn-fatorial");
let inputFat = document.getElementById("inputFat");
let saidaFat = document.getElementById("saidaFat");

let btnPrimo = document.getElementById("btn-primo");
let inputPrimo = document.getElementById("inputPrimo");
let saidaPrimo = document.getElementById("saidaPrimo");

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

btnPrimo.addEventListener("click", function(e){
    let auxInput = Number(inputPrimo.value);
    let aux = false;
    for (let i = 2; i < auxInput; i++) {
        if(auxInput%i === 0){
            aux = true;
        }
    }
    if(!aux){
        saidaPrimo.innerHTML = "É primo!";        
    } else{
        saidaPrimo.innerHTML = "Não é primo!";
    }
});