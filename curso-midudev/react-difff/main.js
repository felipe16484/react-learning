import ReactDom from "https://esm.sh/react-dom@18.2.0/client";
import React from "https://esm.sh/react@18.2.0";

const appDomElement = document.getElementById('app');

const root = ReactDom.createRoot(appDomElement);

const h = React.createElement

// Params: elemento, atributos y contenido
const button = h('button',{"data-id": 123}, 'Button 1')
const button2 = h('button',{"data-id": 456}, 'Button 2')
const button3 = h('button',{"data-id": 789}, 'Button 3')

const app = h(React.Fragment,null, [button,button2,button3])

{/*
JSX
<React.Fragment>
    <button data-id="123">Botón 1</button>
    <button data-id="456">Botón 2</button>
    <button data-id="789">Botón 3</button>
</React.Fragment> 
*/}

// De esta manera puede reaccionar a la inyección de código react
// const response = "<script>alert('Hola')</script>"
// const app = React.createElement("h1",null,response)

root.render(app)