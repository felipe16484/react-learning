// Vanilla JavaScript

// Recuperamos el botón
const button = document.querySelector('button');

// Al hacer click en el botón, tenemos que ejecutar una función
button.addEventListener('click', function () {
    // Recuperar la id del atributo HTML
    const id = button.getAttribute('data-id');

    // Llamar a un servicio para actualizar si me gusta
    // toggleLike(id)

    if (!button.classList.contains('liked')){
        button.classList.add('liked')
        button.innerText = 'Me gusta'
    }else{
        button.classList.remove('liked')
        button.innerText = 'Quitar me gusta'
    }
})