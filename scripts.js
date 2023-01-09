let contadorPrato = 0;
let contadorBebida = 0;
let contadorSobremesa = 0;
const contadorTotal = 3;
let pratoPedido, bebidaPedida, sobremesaPedida;
let valorPrato = 0;
let valorBebida = 0;
let valorSobremesa = 0;

function selecionarPrato(pratoSelecionado){
    const tirarPratoSelecionado = document.querySelector('.pratos .selecionado');
    if(tirarPratoSelecionado !== null){
        tirarPratoSelecionado.classList.remove("selecionado");
    }
    pratoSelecionado.classList.toggle("selecionado");
    contadorPrato = 1;

    pratoPedido = document.querySelector('.pratos .selecionado .produto').textContent;
    const precoPrato = document.querySelector('.pratos .selecionado .preco').textContent.split(' ');
    valorPrato = Number(precoPrato[1].replace(',','.'));

    finalizarPedido();
}

function selecionarBebida(bebidaSelecionada){
    const tirarBebidaSelecionada = document.querySelector('.bebidas .selecionado');
    if(tirarBebidaSelecionada !== null){
        tirarBebidaSelecionada.classList.remove("selecionado");
    }
    bebidaSelecionada.classList.toggle("selecionado");
    contadorBebida = 1;

    bebidaPedida = document.querySelector('.bebidas .selecionado .produto').textContent;
    const precoBebidas = document.querySelector('.bebidas .selecionado .preco').textContent.split(' ');
    valorBebida = Number(precoBebidas[1].replace(',','.'));

    finalizarPedido();
}

function selecionarSobremesa(sobremesaSelecionada){
    const tirarSobremesaSelecionada = document.querySelector('.sobremesas .selecionado');
    if(tirarSobremesaSelecionada !== null){
        tirarSobremesaSelecionada.classList.remove("selecionado");
    }
    sobremesaSelecionada.classList.toggle("selecionado");
    contadorSobremesa = 1;

    sobremesaPedida = document.querySelector('.sobremesas .selecionado .produto').textContent;
    const precoSobremesa = document.querySelector('.sobremesas .selecionado .preco').textContent.split(' ');
    valorSobremesa = Number(precoSobremesa[1].replace(',','.'));
    

    finalizarPedido();
}

function finalizarPedido(){
    const pedidoFinalizado = document.querySelector('.botaoFinal');
    if((contadorPrato + contadorBebida + contadorSobremesa)=== contadorTotal){
        pedidoFinalizado.classList.add("finalizado");
        pedidoFinalizado.innerHTML = "Fechar pedido";
        pedidoFinalizado.disabled = false;
        pedidoFinalizado.addEventListener("click", pedidoWhatsapp);
    }
}

function pedidoWhatsapp(){
    const valorTotal = valorPrato + valorBebida + valorSobremesa;
    const pedidoCompleto = `Olá, gostaria de fazer o pedido:\n- Prato: ${pratoPedido}\n- Bebida: ${bebidaPedida}\n- Sobremesa: ${sobremesaPedida}\nTotal: R$ ${valorTotal.toFixed(2)}`;
    window.open(`https://wa.me/5535999999999?text=${encodeURIComponent(pedidoCompleto)}`);
}