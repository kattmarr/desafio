// Selecciona los elementos del DOM.
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

// Valores iniciales para definir el color RGB.
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Muestra los valores iniciales en los elementos <p>.
textoRojo.textContent = rojo;
textoVerde.textContent = verde;
textoAzul.textContent = azul;

// Función para actualizar el color de fondo de la página.
function actualizarColor(rojo, verde, azul) {
  // Completa esta función para cambiar el color de fondo.
  document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}

// Agrega un event listener para el input de Rojo.
inputRojo.addEventListener('change', (e) => {
 
const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

// Función para actualizar el color de fondo de la página.
function actualizarColor(rojo, verde, azul) {
    document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}

// Event listener para el input de Rojo
inputRojo.addEventListener('change', (e) => {
    const rojo = e.target.value; 
    textoRojo.textContent = `Rojo: ${rojo}`;
    actualizarColor(rojo, inputVerde.value, inputAzul.value);
});

// Event listener para el input de Verde
inputVerde.addEventListener('change', (e) => {
    const verde = e.target.value; 
    textoVerde.textContent = `Verde: ${verde}`;
    actualizarColor(inputRojo.value, verde, inputAzul.value);
});

// Event listener para el input de Azul
inputAzul.addEventListener('change', (e) => {
    const azul = e.target.value; 
    textoAzul.textContent = `Azul: ${azul}`;
    actualizarColor(inputRojo.value, inputVerde.value, azul);
});


actualizarColor(inputRojo.value, inputVerde.value, inputAzul.value);

});

// Agrega un event listener para el input de Verde.
inputVerde.addEventListener('change', (e) => {

const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

// Función para actualizar el color de fondo de la página.
function actualizarColor(rojo, verde, azul) {
    document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}

// Event listener para el input de Rojo
inputRojo.addEventListener('change', (e) => {
    const rojo = e.target.value; 
    textoRojo.textContent = `Rojo: ${rojo}`;
    actualizarColor(rojo, inputVerde.value, inputAzul.value);
});

// Event listener para el input de Verde
inputVerde.addEventListener('change', (e) => {
    const verde = e.target.value; 
    textoVerde.textContent = `Verde: ${verde}`;
    actualizarColor(inputRojo.value, verde, inputAzul.value);
});

// Event listener para el input de Azul
inputAzul.addEventListener('change', (e) => {
    const azul = e.target.value; 
    textoAzul.textContent = `Azul: ${azul}`;
    actualizarColor(inputRojo.value, inputVerde.value, azul);
});


actualizarColor(inputRojo.value, inputVerde.value, inputAzul.value);

});

// Agrega un event listener para el input de Azul.
inputAzul.addEventListener('change', (e) => {
 
const inputRojo = document.getElementById("rojo");
const inputVerde = document.getElementById("verde");
const inputAzul = document.getElementById("azul");

const textoRojo = document.getElementById("texto-rojo");
const textoVerde = document.getElementById("texto-verde");
const textoAzul = document.getElementById("texto-azul");

// Función para actualizar el color de fondo de la página.
function actualizarColor(rojo, verde, azul) {
    document.body.style.backgroundColor = `rgb(${rojo}, ${verde}, ${azul})`;
}

// Event listener para el input de Rojo
inputRojo.addEventListener('change', (e) => {
    const rojo = e.target.value; 
    textoRojo.textContent = `Rojo: ${rojo}`;
    actualizarColor(rojo, inputVerde.value, inputAzul.value);
});

// Event listener para el input de Verde
inputVerde.addEventListener('change', (e) => {
    const verde = e.target.value; 
    textoVerde.textContent = `Verde: ${verde}`;
    actualizarColor(inputRojo.value, verde, inputAzul.value);
});

// Event listener para el input de Azul
inputAzul.addEventListener('change', (e) => {
    const azul = e.target.value; 
    textoAzul.textContent = `Azul: ${azul}`;
    actualizarColor(inputRojo.value, inputVerde.value, azul);
});


actualizarColor(inputRojo.value, inputVerde.value, inputAzul.value);

});
