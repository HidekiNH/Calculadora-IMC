function calcularIMC(){

    //Entrada de dados
    let PESO = document.getElementById("peso").value;
    let ALTURA = document.getElementById("altura").value;
    //Processamento
    let IMC = PESO / (ALTURA * ALTURA);

    let classificacao;
    if (IMC < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (IMC >= 18.5 && IMC <= 24.9) {
        classificacao = "Peso normal";
    } else if (IMC >= 25 && IMC <= 29.9){
        classificacao = "Sobrepeso";
    } else if (IMC > 30) {
        classificacao ="Obesidade";
    }



    //Saída
    document.getElementById("resultado").textContent = `Seu IMC é ${IMC.toFixed(2)} e você está classificado(a) como: ${classificacao}`;


}