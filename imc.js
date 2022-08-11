const calcular = document.getElementById('calcular'); 

function imc() {
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado'); 
// cxvbbv


    if ( altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1);
  
        let classificacao = '';
        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso';
        } else if (valorIMC < 25){
            classificacao = 'peso ideal';
        }else if (valorIMC < 30){
            classificacao = 'sobrepeso';
        }else if (valorIMC < 40){
            classificacao = 'Obesidade';
        }else{
            classificacao = 'Obesidade Grave, Cuidado !!';
        }


        resultado.textContent = `Seu IMC é ${valorIMC} e sua 
        classificação é: ${classificacao}. `;
    
    
    
    
    }
    else{
        resultado.textContent = `Preencha todos os campos !!`;  
    } 
    

}
calcular.addEventListener('click', imc)