

const formulario = document.getElementById('form');
formulario.addEventListener('submit', handlesubmit);

const valorRecebido = document.getElementById ('value-real');
const moedaSelecionada = document.getElementById ('currency');
const resultado = document.getElementById ('Resultado');



function handlesubmit (e) {   
    e.preventDefault () 
    
    const valor = parseFloat(valorRecebido.value);

    if (isNaN(valor)|| valor<= 0){
        alert ("Não foi detectado nehum valor. insira um valor para conversão ser executada");
        return;

    } else if (!moedaSelecionada.value){
        alert('Nenhuma moeda selecionada. selecione uma moeda para conversão ser executada');
        return;
    };
    

    let moedaAlvo;
    if (moedaSelecionada.value === 'Dol'){
        moedaAlvo = 'USD';
    }
    else {
        moedaAlvo = 'EUR';
    }

   
    let moeda 
    if(moedaSelecionada.value === 'Dol'){
        moeda = 'USD';
    }
    else{
        moeda = 'EUR';
    }

    fetch(`https://economia.awesomeapi.com.br/json/last/${moeda}-BRL`)  // moeda signfica  a moeda selecionada e busca a cotação com termo usd-brl ou eur-brll
        .then(response => response.json()) // converte as respostas em json
        .then(data => { 
            const cotacao = data[`${moeda}BRL`].bid;  //retorna o valor da meoda em reais

            if(moeda === 'USD'){
                resultado.innerHTML = "resultado = " + (valor / cotacao).toFixed(2) + 'US$'    
            }
            else{
                resultado.innerHTML = "resultado = " + (valor / cotacao).toFixed(2) + ' €'
            }
        });
};


