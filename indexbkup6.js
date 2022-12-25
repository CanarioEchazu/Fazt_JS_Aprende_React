// // arrow function

// function add (x,y){
//     return x + y;
// };

// const add = ( ) => {
//     return x + y;
// }


const button = document.createElement('button');
button.innerText = 'Click me';

// y ahora modifico funcion flecha
button.addEventListener('click', () =>{
    alert('Cliked')
});

document.body.append(button);

// inline arrow funtions

