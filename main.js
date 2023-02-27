function  tocaSom(audioNota){
    const elemento = document.querySelector(audioNota);

    if(elemento === null){
        console.log ('Nota não encontrada')
    } else{
        elemento.play();
    }

}

const listaDeNotas = document.querySelectorAll('.tecla');

for (let cont = 0; cont < listaDeNotas.length; cont++){
    const tecla = listaDeNotas[cont];
    const nota = tecla.classList[1];
    const audioNota = `#som_${nota}`;


    tecla.onclick = function (){
        tocaSom(`#som_${nota}`);
    }

    tecla.onkeydown = function (evento) {
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
