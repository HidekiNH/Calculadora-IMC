function calcularIMC(){

    //Entrada de dados
    let PESO = document.getElementById("peso").value;
    let ALTURA = document.getElementById("altura").value;
    //Processamento
    let IMC = PESO / (ALTURA * ALTURA);

    let classificacao;
    if (IMC < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (IMC >= 18.5 && IMC <= 24.99){
        classificacao = "Peso normal";
    } else if (IMC >= 25 && IMC <= 29.99){
        classificacao = "Sobrepeso";
    } else if (IMC >= 30 && IMC <= 34.99){
        classificacao ="Obesidade I";
    } else if (IMC >= 35 && IMC <= 39.99){
        classificacao = "Obesidade II";
    } else if (IMC > 40){
        classificacao = "Obesidade III";
    }



    //Saída
    document.getElementById("resultado").textContent = `Seu IMC é ${IMC.toFixed(2)} e você está classificado(a) como: ${classificacao}`;


}