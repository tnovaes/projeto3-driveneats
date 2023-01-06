let contadorPrato = 0;
let contadorBebida = 0;
let contadorSobremesa = 0;

function selecionarPrato(pratoSelecionado){
    const tirarPratoSelecionado = document.querySelector('.pratos .selecionado');
    if(tirarPratoSelecionado !== null){
        tirarPratoSelecionado.classList.remove("selecionado");
    }
    pratoSelecionado.classList.toggle("selecionado");
    contadorPrato = 1;
    finalizarPedido();
}

function selecionarBebida(bebidaSelecionada){
    const tirarBebidaSelecionada = document.querySelector('.bebidas .selecionado');
    if(tirarBebidaSelecionada !== null){
        tirarBebidaSelecionada.classList.remove("selecionado");
    }
    bebidaSelecionada.classList.toggle("selecionado");
    contadorBebida = 1;
    finalizarPedido();
}

function selecionarSobremesa(sobremesaSelecionada){
    const tirarSobremesaSelecionada = document.querySelector('.sobremesas .selecionado');
    if(tirarSobremesaSelecionada !== null){
        tirarSobremesaSelecionada.classList.remove("selecionado");
    }
    sobremesaSelecionada.classList.toggle("selecionado");
    contadorSobremesa = 1;
    finalizarPedido();
}

function finalizarPedido(){
    const pedidoFinalizado = document.querySelector('.botaoFinal');
    if((contadorPrato + contadorBebida + contadorSobremesa)===3){
        pedidoFinalizado.classList.add("finalizado");
        pedidoFinalizado.innerHTML = "Fechar pedido"
        pedidoFinalizado.disabled = false;
        
    }
}