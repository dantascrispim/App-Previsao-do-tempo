

const key = "a6ed5bb3a8ccd6c287c62fd7716b5ae5"



function colocarDadosNaTela(dados) {
    
     document.querySelector(".cidade").innerHTML = " Tempo em " + dados.name
     document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "° C"
     document.querySelector(".text-previsao").innerHTML = dados.weather[0].description
     document.querySelector(".umidade").innerHTML = "Umidade : " +  dados.main.humidity + "%"
     document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

function cliqueiNoBotao() {
    async function buscarCidade(cidade) {
        const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())
        
        colocarDadosNaTela(dados)
    }

    const cidade = document.querySelector(".input-cidade").value;
    
    buscarCidade(cidade)
    
}

