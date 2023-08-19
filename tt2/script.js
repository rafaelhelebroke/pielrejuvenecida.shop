window.onload = function() {
    var contadorElemento = document.getElementById("contador");
    var contador = Math.floor(Math.random() * 600) + 300;

    function atualizarContador() {
        var aleatorio = Math.random();
        
        if (aleatorio < 0.6) {
            contador += Math.floor(Math.random() * 15) + 1;
        } else if (aleatorio < 0.8 && contador > 0) {
            contador -= Math.floor(Math.random() * 5) + 1;
        }

        contadorElemento.textContent = contador;

        // Gere um tempo de atualização aleatório entre 500 ms e 3000 ms (0.5 e 3 segundos)
        var tempoAleatorio = Math.floor(Math.random() * 3000) + 1000;
        
        // Atualize o contador novamente após o tempo aleatório
        setTimeout(atualizarContador, tempoAleatorio);
    }

    // Inicie a primeira atualização
    atualizarContador();
};
