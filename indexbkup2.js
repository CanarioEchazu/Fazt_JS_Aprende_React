const title = document.createElement('h1');
const button = document.createElement('button');

title.innerText = "Hola desde JS";
button.innerText = "Presiona aqui";

// button.addEventListener('click', function (){
//     console.log('Hola presionaste ahi');
// })

button.addEventListener('click', function(){
    title.innerText = 'Texto actualizado desde JS';
    alert("se realizo un click");
})

document.body.append(title);
document.body.append(button);