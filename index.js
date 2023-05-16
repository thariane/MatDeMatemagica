
let btnFib = document.getElementById("btn-fib");
let inputFib = document.getElementById("inputFib");
let saidaFib = document.getElementById("saidaFib");

let btnFat = document.getElementById("btn-fatorial");
let inputFat = document.getElementById("inputFat");
let saidaFat = document.getElementById("saidaFat");

let btnPrimo = document.getElementById("btn-primo");
let inputPrimo = document.getElementById("inputPrimo");
let saidaPrimo = document.getElementById("saidaPrimo");

let btnCaixaAlta = document.getElementById("btn-CaixaAlta");
let inputCaixaAlta = document.getElementById("inputCaixaAlta");
let saidaCaixaAlta = document.getElementById("saidaCaixaAlta");

let btnConversorMoeda = document.getElementById("btn-ConversorMoeda");
let inputConversorMoedaUSD = document.getElementById("inputConversorMoedaUSD");
let inputConversorMoedaReal = document.getElementById("inputConversorMoedaReal");
let saidaConversorMoeda = document.getElementById("saidaConversorMoeda");

let btnConversorMoedaAuto = document.getElementById("btn-ConversorMoedaAuto");
let inputConversorMoedaRealAuto = document.getElementById("inputConversorMoedaRealAuto");
let selectMoedaAuto = document.getElementById("moedas");
let saidaConversorMoedaAuto = document.getElementById("saidaConversorMoedaAuto");

let btnMetrosCubicos = document.getElementById("btn-MetrosCubicos");
let inputMetrosCubicos = document.getElementById("inputMetrosCubicos");
let saidaMetrosCubicos = document.getElementById("saidaMetrosCubicos");

/*
 *Projeto Futuro
 **/
//selectMoedaAuto.addEventListener('click', function(e){
//    selectMoedaAuto.addEventListener('change', function(){
//        console.log(selectMoedaAuto.value);
//    })
//})

btnMetrosCubicos.addEventListener("click", function(e){   
    let valorMetrosCubicos = Number(inputMetrosCubicos.value.replace(',', '.'));
    let saidalitros = valorMetrosCubicos * 1000;

    saidaMetrosCubicos.innerHTML = `${saidalitros.toFixed(2)} Litros`;
});

btnConversorMoedaAuto.addEventListener('click', function(){
    let real = Number(inputConversorMoedaRealAuto.value.replace(',', '.'));    
    let moedaConversao = Number(selectMoedaAuto.value);
    let saida = real/moedaConversao;
    saidaConversorMoedaAuto.innerHTML = saida.toFixed(2);
})


btnConversorMoeda.addEventListener("click", function(e){   
    let dolar = Number(inputConversorMoedaUSD.value.replace(',', '.'));
    let real = Number(inputConversorMoedaReal.value.replace(',', '.'));
    let saida = real/dolar;
    
    console.log(dolar);
    
    saidaConversorMoeda.innerHTML = saida.toFixed(2);
});

btnCaixaAlta.addEventListener("click", function(e){   
    saidaCaixaAlta.innerHTML = inputCaixaAlta.value.toUpperCase(); 
});

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