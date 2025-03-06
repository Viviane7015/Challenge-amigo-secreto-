

let amigos = [];


function adicionarAmigo() {
 
  const novoAmigo = document.getElementById('amigo').value.trim();

  
  if (novoAmigo !== '') {
    
    amigos.push(novoAmigo);

    
    document.getElementById('amigo').value = '';

    
    atualizarListaAmigos();
  } else {
    alert('Por favor, digite um nome válido.');
  }
}

 
  amigos.forEach(amigo => {
    const novoItem = document.createElement('li');
    novoItem.textContent = amigo;
    listaAmigos.appendChild(novoItem);
  });



function selecionarAmigoAleatorio() {

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

 
  const amigoAleatorio = amigos[indiceAleatorio];

 
  const resultadoElement = document.getElementById('resultado');
  resultadoElement.innerHTML = `O amigo selecionado aleatoriamente é: ${amigoAleatorio}`;
}

const botaoSortearAmigo = document.getElementById('botaoSortearAmigo');


botaoSortearAmigo.addEventListener('click', sortearAmigo);

botaoAdicionarAmigo.addEventListener('click', adicionarAmigo);

 listaAmigos.innerHTML = '';

function sortearAmigo() {
    
    if (amigos.length < 2) {
      alert('É necessário ter pelo menos 2 amigos na lista para realizar o sorteio.');
      return;
    }
  
    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  
    
    const amigoSorteado = amigos[indiceAleatorio];
  
   
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
  }
