// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if (nombre !== '') {
    amigos.push(nombre); 
    input.value = ''; 
    actualizarListaAmigos(); 
  } else {
    alert('Por favor, escribe un nombre válido.');
  }
}

function actualizarListaAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = ''; 

  amigos.forEach((amigo, index) => {
    const li = document.createElement('li');
    li.textContent = amigo;

    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.addEventListener('click', () => eliminarAmigo(index));

    li.appendChild(deleteBtn);
    listaAmigos.appendChild(li);
  });
}


function eliminarAmigo(index) {
  amigos.splice(index, 1); 
  actualizarListaAmigos(); 
}


function sortearAmigo() {
  if (amigos.length < 2) {
    alert('Necesitas al menos 2 amigos para sortear.');
    return;
  }

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = ''; 

  
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];

  
  const li = document.createElement('li');
  li.textContent = `¡Tu amigo secreto es: ${amigoSecreto}!`;
  resultado.appendChild(li);
  amigos.splice(indiceAleatorio, 1); 
 actualizarListaAmigos(); 
}