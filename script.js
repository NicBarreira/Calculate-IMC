//declarando constante calcular
const calcular = document.getElementById('calcular');

//Criando uma função onde tudo acontece, chamda IMC
function imc () {
    //declarando constantes, nome, altura, peso e o botão
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    //Se nome, altura ou peso for diferente de vazio, ocorre a funçaõ dita a baixo,
    //caso ao contrário ocorre uma função que esta no fim do codigo
    if (nome !== '' && altura !== '' && peso !== '') {
    
        //criando constante chamada valorIMC que calcua o IMC 
        const valorIMC = (peso / (altura * altura)).toFixed(1);
        
        //let declara uma variavel dentro desse escopo, criando a variavel classificacao;
        let classificacao = '';

        //se valor calculado for menor que 18.5, ira apareccer a classificacao a baixo;
        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }
        //se valor calulado menor que 25, ira aparecer a classificacao a baixo;
        else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!!!';
        }
        //se valor calulado menor que 30, ira aparecer a classificacao a baixo;
        else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }
        //se valor calulado menor que 35, ira aparecer a classificacao a baixo;
        else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }
        //se valor calulado menor que 40, ira aparecer a classificacao a baixo;
        else if (valorIMC < 40){
            classificacao = 'com obesidade grau II';
        }

        // maior que 40 ira aparecer esta classificacao a baixo
        else {
            classificacao = 'OBESA(O), EMAGRAÇA JÁ';
        }

        //constante variavel com o dado dentro da div feita em HTML.
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
        
    }
    //se não preencher todos os campos aparecer a mesnsagem a baixo.
    else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

//constante calcular, qando clicar no botão acontecer a função imc declarada la em cima 
calcular.addEventListener('click', imc);